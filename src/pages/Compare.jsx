import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { contact, tours } from '../data/tours'

export default function Compare() {
  const classic = tours.find((t) => t.slug === 'sri-lanka-7-days-classic')
  const grand = tours.find((t) => t.slug === 'sri-lanka-14-days-grand')

  return (
    <div>
      <Section
        eyebrow="Compare packages"
        title="7-day Classic vs 14-day Grand"
        desc="Side-by-side view to pick the right trip."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Classic */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6">
            <div className="text-sm font-extrabold">
              <div className="badge">{classic?.days} days</div>
              <h2 className="mt-3 text-xl md:text-2xl font-extrabold text-slate-900">{classic?.title}</h2>
              <div className="mt-2 text-lg font-bold text-slate-900">{classic?.priceFrom}</div>
              <p className="mt-3 text-sm text-slate-600">{classic?.summary}</p>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-slate-900">Highlights</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {classic?.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-slate-900">Best for</div>
              <p className="mt-2 text-sm text-slate-600">
                A first trip: culture, tea country, one safari night, and the coast at a comfortable pace.
              </p>
            </div>

            <div className="mt-6">
              <Link className="btn btn-secondary w-full text-center" to={`/tours/${classic.slug}`}>
                View itinerary
              </Link>
            </div>
          </div>

          {/* Grand */}
          <div className="rounded-3xl border-2 border-brand-teal-200 bg-gradient-to-br from-brand-olive-50 to-white p-6">
            <div className="text-sm font-extrabold">
              <div className="badge">{grand?.days} days</div>
              <h2 className="mt-3 text-xl md:text-2xl font-extrabold text-slate-900">{grand?.title}</h2>
              <div className="mt-2 text-lg font-bold text-slate-900">{grand?.priceFrom}</div>
              <p className="mt-3 text-sm text-slate-600">{grand?.summary}</p>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-slate-900">Extra vs the 7-day</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Ancient cities (Anuradhapura / Polonnaruwa optional)</li>
                <li>More time in the cultural triangle</li>
                <li>Train to Ella + hikes + Nine Arches Bridge</li>
                <li>Additional safari and beach days</li>
                <li>Hiriketiya surf & Galle Fort</li>
              </ul>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-slate-900">Best for</div>
              <p className="mt-2 text-sm text-slate-600">
                Longer trips for deeper exploration, surf, extra wildlife parks, tea country, and more.
              </p>
            </div>

            <div className="mt-6">
              <Link className="btn btn-primary w-full text-center" to={`/tours/${grand.slug}`}>
                View full itinerary
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-white to-brand-teal-50 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div>
              <div className="font-bold">Quick summary</div>
              <p className="mt-2 text-slate-600">7 days: 4-5 regions with a steady pace. 14 days: same regions with more time each + extra highlights.</p>
            </div>
            <div>
              <div className="font-bold">Can I customise?</div>
              <p className="mt-2 text-slate-600">Yes. Add or skip days, change the route, and include specials (birding, surf, temples).</p>
            </div>
            <div>
              <div className="font-bold">Talk to us</div>
              <p className="mt-2 text-slate-600">
                <a className="font-bold text-brand-teal-800" href={`https://wa.me/${contact.whatsappE164}`} target="_blank" rel="noreferrer">WhatsApp us</a> or <a className="font-bold text-brand-teal-800" href={`mailto:${contact.email}`}>email</a> and we'll help you choose.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
