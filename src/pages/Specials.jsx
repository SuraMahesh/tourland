import { Link } from 'react-router-dom'
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
        <div className="grid gap-6 md:grid-cols-3">
          {specials.map((s) => (
            <Link key={s.slug} to={`/specials/${s.slug}`} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:border-slate-200 hover:shadow-md block">
              <div className="aspect-[3/2] overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="badge">{s.tag}</div>
                <div className="mt-3 text-lg font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
              </div>
            </Link>
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
