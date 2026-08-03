# Black Opal — Portfolio

**Ma. Angeline T. Tipa** · BS Computer Engineering (Big Data), PUP Manila

Live: [opal-portfolio.vercel.app](https://opal-portfolio.vercel.app)

A multi-page portfolio built with React + Vite. Claymorphism on a black-opal
palette, dark/light toggle, and a small admin mode so content can be edited
from the site instead of the codebase.

---

## Stack

| Layer | Tools |
|---|---|
| Frontend | React 18, React Router, Vite |
| Backend | Supabase (Postgres, Auth, Storage, RLS) |
| Hosting | Vercel |
| Styling | Plain CSS with design tokens — no framework |

No UI library and no icon package. The design system, the SVG icons, and the
command console are all hand-built.

---

## Features

- **Ask about me (`Ctrl` / `Cmd` + `K`)** — a command console that answers
  questions about skills, projects and availability from a local answer bank,
  and jumps to any page. Keyword-scored, no AI call, no network request, so it
  works offline and can never invent an answer.
- **Admin mode** — sign in to add, edit, reorder and delete experience,
  projects, certificates, recognition and artwork, with image upload to
  Supabase Storage.
- **Recognition grouped by trait** — awards are grouped by what they
  demonstrate rather than what kind of award they were, with older school-level
  honors collapsed behind a toggle.
- **Graceful data fallback** — every page renders instantly from
  `src/constants/`, then upgrades to Supabase content if it exists. The site
  stays complete even when the database is asleep.
- **Dark / light themes**, scroll reveals, lightbox for certificates and art.

---

## Run locally

```bash
npm install
npm run dev
```

Create a `.env` from `.env.example`:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Both are safe to expose in the browser — access is controlled by row-level
security, not by hiding the key. Supabase is optional for local development;
without it the site renders from the seed files.

---

## Editing content

**Through admin** (preferred) — visit `/admin`, sign in, and edit any
collection. Changes are live immediately.

**Through code** — the seed data lives in `src/constants/`:

| File | Holds |
|---|---|
| `data.js` | profile, toolkit, education, projects, certificates, artwork |
| `recognition.js` | awards, their groups, and which appear on Home |
| `knowledge.js` | answers for the Ask console |
| `adminSchema.js` | which fields each admin section shows |

Supabase content **overrides** these seeds. Once a collection has rows in the
database, editing the seed file changes nothing on the live site.

Static images go in `public/` and are referenced with a leading slash
(`/certs/ccna.webp`). Filenames are case-sensitive on Vercel even though they
are not on Windows.

---

## Keeping the answer bank honest

`knowledge.js` is the one file that can misrepresent me, because it answers
questions directly. Two rules:

- Skill tiers mirror the CV exactly — proficient means proficient.
- Nothing goes in that I could not defend in an interview.

---

## Security

Every table uses row-level security: **public read, owner-only write**. Policies
are pinned to a single user id rather than to any authenticated user, since in
Supabase "authenticated" means anyone who signed up. Public signups are
disabled.

The migration lives in [`supabase/migrations/`](supabase/migrations) and is safe
to re-run.

> Note: the UUID in that migration is a Supabase user id, not a credential. It
> identifies which account may write and grants nothing on its own.

RLS policies are additive — Postgres combines them with OR. Adding a stricter
policy does not tighten anything until the looser one is dropped.

---

## Project structure

```
src/
  components/   UI building blocks (console, credentials, recognition, ...)
    admin/      collection + settings editors
  pages/        one file per route
  constants/    seed content and the admin field schema
  lib/          Supabase client, auth, content hooks, mail helper
  styles/       design tokens and performance overrides
public/         images, certificates, resume and CV PDFs
supabase/       SQL migrations
```

Components, constants and modals sit in separate files so nothing has to be
duplicated to be reused.

---

## Deploy

Push to GitHub, import the repo on Vercel, add the two environment variables.
`vercel.json` already handles client-side routing and security headers.

---

## Author

**Ma. Angeline T. Tipa**
[GitHub](https://github.com/angelinetipa) ·
[LinkedIn](https://www.linkedin.com/in/angelinetipa) ·
angelinetipa@gmail.com