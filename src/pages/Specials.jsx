import { Section } from '../components/Section'
import { specials, contact } from '../data/tours'

export default function Specials() {
  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I’m interested in a special tour.\n\nWhich: \nTravel dates: \nNumber of people: \n'
  )}`

  return (
    <div>
      <Section
        eyebrow="Special tours"
        title="Add a special experience"
        desc="Birding, wildlife, surf, tea country, and sacred sites—planned around the best seasons."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {specials.map((s) => (
            <div key={s.slug} className="rounded-3xl border border-slate-100 bg-white p-6">
              <div className="badge">{s.tag}</div>
              <div className="mt-3 text-lg font-extrabold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
            Ask about a special tour
          </a>
        </div>
      </Section>
    </div>
  )
}
