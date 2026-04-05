import { Section } from '../components/Section'
import { contact } from '../data/tours'

export default function Contact() {
  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I want to plan a Sri Lanka tour.\n\nTrip length: 7 days / 14 days\nTravel dates: \nNumber of people: \nInterests: \nHotel preference: boutique / mid-range / premium\n'
  )}`

  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Let’s plan your Sri Lanka trip"
        desc="Send your travel dates and interests. We’ll reply with a clean plan + hotel recommendations."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-6">
            <div className="text-sm font-bold text-slate-900">WhatsApp</div>
            <div className="mt-2 text-sm text-slate-600">Fastest reply</div>
            <div className="mt-4">
              <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6">
            <div className="text-sm font-bold text-slate-900">Email</div>
            <div className="mt-2 text-sm text-slate-600">For detailed plans</div>
            <div className="mt-4">
              <a className="btn btn-secondary" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-olive-50 p-6">
          <div className="text-sm font-bold text-slate-900">What to send us</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Trip length (7 days / 14 days)</li>
            <li>Travel dates</li>
            <li>Number of people</li>
            <li>Interests (wildlife, beach, tea country, culture, Buddhism sites)</li>
            <li>Hotel preference (boutique / mid-range / premium)</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
