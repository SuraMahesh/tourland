import { Section } from '../components/Section'
import { hotels, contact } from '../data/tours'

export default function Hotels() {
  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! Please recommend hotels for my Sri Lanka trip.\n\nDates: \nBudget: \nStyle: boutique / mid-range / premium\nLocations: \n'
  )}`

  return (
    <div>
      <Section
        eyebrow="Hotels"
        title="Hotel recommendations"
        desc="We recommend comfortable hotels in every region—based on your budget, style, and travel pace."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {hotels.map((h) => (
            <div key={h.region} className="rounded-3xl border border-slate-100 bg-white p-6">
              <div className="text-lg font-extrabold text-slate-900">{h.region}</div>
              <p className="mt-2 text-sm text-slate-600">{h.notes}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-brand-teal-50 p-6">
          <div className="text-sm font-bold text-slate-900">Want a curated hotel list?</div>
          <p className="mt-2 text-sm text-slate-600">
            Send your dates + budget range and we’ll reply with a recommended hotel plan.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">WhatsApp us</a>
            <a className="btn btn-secondary" href={`mailto:${contact.email}`}>Email</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
