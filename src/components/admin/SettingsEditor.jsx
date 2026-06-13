import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase.js'
import { saveContent } from '../../lib/useContent.js'
import {
  profile as seedProfile, stats as seedStats, toolkit as seedToolkit,
  education as seedEducation, awards as seedAwards,
} from '../../constants/data.js'
import FieldInput from './FieldInput.jsx'
import ObjectListEditor from './ObjectListEditor.jsx'
import StringListEditor from './StringListEditor.jsx'

// load a content doc with fallback
async function fetchContent(key, seed) {
  if (!supabase) return seed
  const { data } = await supabase.from('site_content').select('value').eq('key', key).maybeSingle()
  return data && data.value != null ? data.value : seed
}

function Section({ title, children, onSave }) {
  const [state, setState] = useState('idle') // idle | saving | saved | error
  async function handle() {
    setState('saving')
    const { error } = await onSave()
    setState(error ? 'error' : 'saved')
    setTimeout(() => setState('idle'), 2500)
  }
  return (
    <div className="clay set-section">
      <div className="set-head">
        <h3>{title}</h3>
        <button className="btn btn-primary" onClick={handle} disabled={state === 'saving'}>
          {state === 'saving' ? 'Saving…' : state === 'saved' ? 'Saved ✓' : state === 'error' ? 'Error' : 'Save'}
        </button>
      </div>
      {children}
    </div>
  )
}

export default function SettingsEditor() {
  const [profile, setProfile] = useState(seedProfile)
  const [aboutText, setAboutText] = useState('')      // about[] as newline text
  const [targetsText, setTargetsText] = useState('')  // targets[] as csv text
  const [stats, setStats] = useState(seedStats)
  const [toolkit, setToolkit] = useState([])          // items[] held as csv strings
  const [education, setEducation] = useState(seedEducation)
  const [awards, setAwards] = useState(seedAwards)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const [p, s, t, e, a] = await Promise.all([
        fetchContent('profile', seedProfile),
        fetchContent('stats', seedStats),
        fetchContent('toolkit', seedToolkit),
        fetchContent('education', seedEducation),
        fetchContent('awards', seedAwards),
      ])
      setProfile(p)
      setAboutText((p.about || []).join('\n\n'))
      setTargetsText((p.targets || []).join(', '))
      setStats(s)
      setToolkit((t || []).map(g => ({ ...g, items: (g.items || []).join(', ') })))
      setEducation(e)
      setAwards(a)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <p className="ce-empty">Loading…</p>

  const set = (k, v) => setProfile(prev => ({ ...prev, [k]: v }))

  return (
    <div className="settings">
      {/* PROFILE */}
      <Section
        title="Profile"
        onSave={() => saveContent('profile', {
          ...profile,
          about: aboutText.split('\n\n').map(s => s.trim()).filter(Boolean),
          targets: targetsText.split(',').map(s => s.trim()).filter(Boolean),
        })}
      >
        <FieldInput field={{ label: 'Profile photo', type: 'image' }} value={profile.photo} onChange={url => set('photo', url)} />
        <div className="set-grid">
          <label className="fi"><span>Full name</span>
            <input value={profile.name || ''} onChange={e => set('name', e.target.value)} /></label>
          <label className="fi"><span>Short name</span>
            <input value={profile.shortName || ''} onChange={e => set('shortName', e.target.value)} /></label>
          <label className="fi"><span>Location</span>
            <input value={profile.location || ''} onChange={e => set('location', e.target.value)} /></label>
          <label className="fi"><span>Email</span>
            <input value={profile.email || ''} onChange={e => set('email', e.target.value)} /></label>
          <label className="fi"><span>Phone</span>
            <input value={profile.phone || ''} onChange={e => set('phone', e.target.value)} /></label>
          <label className="fi"><span>LinkedIn URL</span>
            <input value={profile.linkedin || ''} onChange={e => set('linkedin', e.target.value)} /></label>
          <label className="fi"><span>GitHub URL</span>
            <input value={profile.github || ''} onChange={e => set('github', e.target.value)} /></label>
        </div>
        <label className="fi"><span>Tagline</span>
          <textarea rows={2} value={profile.tagline || ''} onChange={e => set('tagline', e.target.value)} /></label>
        <label className="fi"><span>About (one paragraph per blank line)</span>
          <textarea rows={6} value={aboutText} onChange={e => setAboutText(e.target.value)} /></label>
        <label className="fi"><span>Target roles (comma separated)</span>
          <input value={targetsText} onChange={e => setTargetsText(e.target.value)} /></label>
      </Section>

      {/* STATS */}
      <Section title="Stats (homepage)" onSave={() => saveContent('stats', stats)}>
        <ObjectListEditor
          items={stats}
          onChange={setStats}
          fields={[
            { key: 'value', label: 'Value', placeholder: '10+' },
            { key: 'label', label: 'Label', placeholder: 'Projects' },
          ]}
          addLabel="+ Add stat"
        />
      </Section>

      {/* TOOLKIT */}
      <Section
        title="Toolkit"
        onSave={() => saveContent('toolkit', toolkit.map(g => ({
          ...g, items: String(g.items || '').split(',').map(s => s.trim()).filter(Boolean),
        })))}
      >
        <ObjectListEditor
          items={toolkit}
          onChange={setToolkit}
          fields={[
            { key: 'group', label: 'Group name', placeholder: 'Data & Analytics' },
            { key: 'icon', label: 'Icon (symbol)', placeholder: '◆' },
            { key: 'items', label: 'Items (comma separated)', placeholder: 'Python, SQL, ...' },
          ]}
          addLabel="+ Add group"
        />
      </Section>

      {/* EDUCATION */}
      <Section title="Education" onSave={() => saveContent('education', education)}>
        <ObjectListEditor
          items={education}
          onChange={setEducation}
          fields={[
            { key: 'school', label: 'School' },
            { key: 'degree', label: 'Degree' },
            { key: 'period', label: 'Period', placeholder: '2022 – Present' },
          ]}
          addLabel="+ Add school"
        />
      </Section>

      {/* AWARDS */}
      <Section title="Awards & highlights" onSave={() => saveContent('awards', awards.filter(Boolean))}>
        <StringListEditor items={awards} onChange={setAwards} placeholder="Award name (year)" addLabel="+ Add award" />
      </Section>
    </div>
  )
}
