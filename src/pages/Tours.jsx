import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { tours } from '../data/tours'

export default function Tours() {
  return (
    <div>
      <Section
        eyebrow="Tours"
        title="7 & 14 day Sri Lanka packages"
        desc="Start with a clean package, then customize hotels, route, and special interests."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((t) => (
            <Link key={t.slug} to={`/tours/${t.slug}`} className="group rounded-3xl border border-slate-100 bg-white p-6 hover:border-slate-200 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="badge">{t.days} days</div>
                <div className="text-sm font-bold text-slate-700">{t.priceFrom}</div>
              </div>
              <div className="mt-3 text-xl font-extrabold text-slate-900">{t.title}</div>
              <p className="mt-2 text-sm text-slate-600">{t.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.highlights.map((h) => (
                  <span key={h} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm font-bold text-brand-teal-800 group-hover:underline">Open itinerary →</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link className="btn btn-secondary" to="/compare">
            Compare 7-day vs 14-day packages
          </Link>
        </div>
        </div>
      </Section>
    </div>
  )
}
