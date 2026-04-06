import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { tours, specials, contact } from '../data/tours'

export default function Home() {
  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I want to plan a Sri Lanka tour.\n\nTrip length: \nTravel dates: \nNumber of people: \n'
  )}`

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-800/80" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')]" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container relative py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="badge">Sri Lanka • Private tours • Flexible itineraries</div>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Minimal, comfortable Sri Lanka trips — planned by locals.
              </h1>
              <p className="mt-4 max-w-xl text-slate-600">
                Tourland arranges 7 and 14 day journeys across Sri Lanka—culture, tea country, wildlife,
                and beach time. We recommend hotels to match your style and budget.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                  Plan on WhatsApp
                </a>
                <Link className="btn btn-secondary" to="/tours">
                  View packages
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="font-bold text-slate-900">Private driver + guide</div>
                  <div className="mt-1 text-slate-600">Comfortable travel, no rush.</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="font-bold text-slate-900">Hotel recommendations</div>
                  <div className="mt-1 text-slate-600">Boutique to family stays.</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="font-bold text-slate-900">Wildlife & nature</div>
                  <div className="mt-1 text-slate-600">Yala, Kumana, seasonal tips.</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="font-bold text-slate-900">Special interests</div>
                  <div className="mt-1 text-slate-600">Surf, temples, photography.</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-brand-teal-700 via-brand-teal-600 to-brand-olive-600 p-1 shadow-xl">
                <div className="h-full w-full rounded-[22px] bg-white p-6">
                  <div className="text-xs font-bold text-slate-500">POPULAR ROUTE</div>
                  <div className="mt-2 text-xl font-extrabold text-slate-900">
                    Culture → Tea Country → Safari → Beach
                  </div>
                  <div className="mt-4 grid gap-3 text-sm">
                    {[
                      'Sigiriya & Dambulla',
                      'Kandy & sacred sites',
                      'Nuwara Eliya tea estates',
                      'Yala National Park',
                      'Hiriketiya / South Coast',
                    ].map((x) => (
                      <div key={x} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                        <span className="h-2 w-2 rounded-full bg-brand-olive-600" />
                        <span className="font-semibold text-slate-800">{x}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-brand-teal-50 p-4">
                    <div className="text-xs font-bold text-brand-teal-900">Tip</div>
                    <div className="mt-1 text-sm text-slate-700">
                      Tell us your travel dates—we recommend the best parks & beach coast for the season.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Packages"
        title="Choose 7 days or 14 days"
        desc="Two clean packages you can customize. We can adjust hotels, pace, and special interests."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {tours.map((t) => (
            <Link
              key={t.slug}
              to={`/tours/${t.slug}`}
              className="group rounded-3xl border border-slate-100 bg-white p-6 transition hover:border-slate-200 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="badge">{t.days} days</div>
                <div className="text-sm font-bold text-slate-700">{t.priceFrom}</div>
              </div>
              <div className="mt-3 text-xl font-extrabold text-slate-900 group-hover:text-brand-teal-800">
                {t.title}
              </div>
              <p className="mt-2 text-sm text-slate-600">{t.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.highlights.slice(0, 4).map((h) => (
                  <span key={h} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm font-bold text-brand-teal-800">View itinerary →</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Special tours"
        title="Wildlife, surf, tea country, and sacred places"
        desc="Add special experiences to your trip. We’ll suggest the best timing and route."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {specials.slice(0, 6).map((s) => (
            <div key={s.slug} className="rounded-3xl border border-slate-100 bg-white p-6">
              <div className="badge">{s.tag}</div>
              <div className="mt-3 text-lg font-extrabold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link className="btn btn-secondary" to="/specials">
            View all specials
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Hotels"
        title="We recommend hotels that match your style"
        desc="Tell us your budget and preference—minimal boutique, family rooms, or premium stays."
      >
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-teal-50 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-lg font-extrabold text-slate-900">Comfort first.</div>
              <p className="mt-2 text-sm text-slate-600">
                We’ll propose a hotel plan for each location—close to key sites and suitable for your pace.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-bold text-slate-900">Boutique stays</div>
              <div className="mt-1 text-sm text-slate-600">Great design, peaceful views.</div>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-bold text-slate-900">Family-friendly</div>
              <div className="mt-1 text-sm text-slate-600">Spacious rooms, easy check-ins.</div>
            </div>
          </div>
          <div className="mt-6">
            <Link className="btn btn-secondary" to="/hotels">See regions & notes</Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
