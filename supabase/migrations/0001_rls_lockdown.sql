-- ============================================================
-- OPAL PORTFOLIO — RLS LOCKDOWN
--
-- NOTE: the UUID below is a Supabase user id, not a credential.
-- It identifies which account may write. It grants nothing on its own.
--
-- Goal: anyone can READ the site; only YOU can WRITE.
--
-- The default "to authenticated" policy is not enough — in
-- Supabase "authenticated" means anyone who signed up, not you.
-- These policies pin writes to a single user id.
--
-- BEFORE RUNNING:
--   1. Supabase → Authentication → Users → copy your user UID
--   2. Paste it into the owner_id value in STEP 1 below
--   3. Also disable public signups:
--      Authentication → Providers → Email → "Enable signup" OFF
--
-- Run the whole file at once in the SQL editor.
-- Safe to re-run: every policy is dropped before being created.
-- ============================================================


-- ============================================================
-- STEP 0 — AUDIT (run this first, read the output)
-- Look for any policy where `roles` includes `anon` and
-- `cmd` is not SELECT. That would mean no login required.
-- ============================================================

select tablename, policyname, cmd, roles, qual
from pg_policies
where schemaname = 'public'
order by tablename, cmd;


-- ============================================================
-- STEP 1 — APPLY POLICIES TO EVERY CONTENT TABLE
--
-- Replace the UUID below with your own before running.
-- ============================================================

do $$
declare
  owner_id constant uuid := 'b6c00aba-7375-43a1-93a6-33144b630caa';  -- << CHANGE THIS
  t text;
  content_tables constant text[] := array[
    'site_content',
    'experience',
    'projects',
    'certificates',
    'recognition',
    'artworks'
  ];
begin
  foreach t in array content_tables loop

    -- skip tables that don't exist yet, instead of failing the whole script
    if not exists (
      select 1 from information_schema.tables
      where table_schema = 'public' and table_name = t
    ) then
      raise notice 'skipping % (table not found)', t;
      continue;
    end if;

    -- RLS must be on, or policies are ignored entirely
    execute format('alter table public.%I enable row level security', t);

    -- clear any previous policies so this script is idempotent
    execute format('drop policy if exists "public read %s" on public.%I', t, t);
    execute format('drop policy if exists "authenticated write %s" on public.%I', t, t);
    execute format('drop policy if exists "owner write %s" on public.%I', t, t);

    -- anyone (logged out included) can read: this is a public portfolio
    execute format(
      'create policy "public read %s" on public.%I for select using (true)',
      t, t
    );

    -- only the owner can insert / update / delete
    execute format(
      'create policy "owner write %s" on public.%I for all to authenticated
         using (auth.uid() = %L) with check (auth.uid() = %L)',
      t, t, owner_id, owner_id
    );

    raise notice 'locked down %', t;
  end loop;
end $$;


-- ============================================================
-- STEP 2 — STORAGE BUCKET
--
-- Same idea for uploaded images. Change 'media' if your bucket
-- has a different name (Storage → Buckets).
-- ============================================================

do $$
declare
  owner_id constant uuid := 'b6c00aba-7375-43a1-93a6-33144b630caa';  -- << CHANGE THIS
  bucket   constant text := 'media';                                  -- << CHECK THIS
begin
  drop policy if exists "public read media" on storage.objects;
  drop policy if exists "authenticated write media" on storage.objects;
  drop policy if exists "owner write media" on storage.objects;

  execute format(
    'create policy "public read media" on storage.objects
       for select using (bucket_id = %L)',
    bucket
  );

  execute format(
    'create policy "owner write media" on storage.objects
       for all to authenticated
       using (bucket_id = %L and auth.uid() = %L)
       with check (bucket_id = %L and auth.uid() = %L)',
    bucket, owner_id, bucket, owner_id
  );
end $$;


-- ============================================================
-- STEP 3 — VERIFY
--
-- Expected result for every table:
--   one SELECT policy with qual = true
--   one ALL policy whose qual contains your uuid
--
-- Anything allowing INSERT/UPDATE/DELETE to {anon} is a hole.
-- ============================================================

select tablename, policyname, cmd, roles, qual
from pg_policies
where schemaname = 'public'
order by tablename, cmd;


-- ============================================================
-- STEP 4 — CONFIRM RLS IS ACTUALLY ON
-- rowsecurity must be true for every row returned.
-- ============================================================

select relname as table_name, relrowsecurity as rls_enabled
from pg_class
where relnamespace = 'public'::regnamespace
  and relkind = 'r'
order by relname;