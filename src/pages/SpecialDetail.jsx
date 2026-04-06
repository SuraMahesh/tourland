import { Link, useParams } from 'react-router-dom'
import { Section } from '../components/Section'
import { contact, specials } from '../data/tours'

export default function SpecialDetail() {
  const { slug } = useParams()
  const special = specials.find((s) => s.slug === slug)

  if (!special) {
    return (
      <Section title="Special tour not found" desc="Go back to specials.">
        <Link className="btn btn-secondary" to="/specials">Back to specials</Link>
      </Section>
    )
  }

  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    `Hi Tourland! I want the special: ${special.title}\n\nTravel dates: \nNumber of people: \nAdditional details: `
  )}`

  return (
    <div>
      <Section eyebrow={special.tag} title={special.title} desc={special.summary}>
        <div className="flex flex-wrap items-center gap-3">
          <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
            Book / Ask on WhatsApp
          </a>
          <Link className="btn btn-secondary" to="/specials">
            Back to specials
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden border border-slate-100 bg-white p-6">
              {special.image && (
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full aspect-[16/9] object-cover rounded-2xl mb-6"
                />
              )}
              <h3 className="text-lg font-extrabold text-slate-900">About this experience</h3>
              <div className="mt-4 text-slate-600 leading-relaxed">{special.summary}</div>

              <div className="mt-8">
                <h3 className="text-lg font-extrabold text-slate-900">What to expect</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Expert local guides and logistics handled</li>
                  <li>Private transport throughout the journey</li>
                  <li>Hotel recommendations to match your budget</li>
                  <li>Flexible pacing for your group</li>
                  <li>Season-specific advice for best experience</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-100 bg-white p-6">
              <div className="text-sm font-bold text-slate-900">Included</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Private driver & guide</li>
                <li>All entry fees (as per itinerary)</li>
                <li>Water & snacks during activities</li>
                <li>Hotel pickup/drop-off</li>
              </ul>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-olive-50 p-6">
              <div className="text-sm font-bold text-slate-900">Customize</div>
              <p className="mt-2 text-sm text-slate-600">
                Want to combine with a 7 or 14 day tour? We can tailor a package to include this special.
              </p>
              <a className="mt-4 inline-block text-sm font-bold text-brand-teal-800" href={wa} target="_blank" rel="noreferrer">
                Discuss on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
