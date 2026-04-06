import { Link, useParams } from 'react-router-dom'
import { useRef, useCallback, useState } from 'react'
import html2pdf from 'html2pdf.js'
import { Section } from '../components/Section'
import BookingForm from '../components/BookingForm'
import { contact, tours } from '../data/tours'

export default function TourDetail() {
  const { slug } = useParams()
  const tour = tours.find((t) => t.slug === slug)
  const captureRef = useRef(null)

  // Customizer state
  const [pax, setPax] = useState(2)
  const [roomType, setRoomType] = useState('standard')
  const [addOns, setAddOns] = useState([])
  const [showBooking, setShowBooking] = useState(false)

  if (!tour) {
    return (
      <Section title="Tour not found" desc="Go back to packages.">
        <Link className="btn btn-secondary" to="/tours">Back</Link>
      </Section>
    )
  }

  const basePrice = tour.priceFrom.includes('690') || tour.title.includes('7 days') ? 690 : 1290
  const roomUpgrade = { standard: 0, deluxe: 50, suite: 120 }[roomType] * pax
  const addOnCost = addOns.length * 100 * pax
  const total = basePrice * pax + roomUpgrade + addOnCost

  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    `Hi Tourland! I want this package: ${tour.title}\n\nTravel dates: \nNumber of people: \nHotel preference: boutique / mid-range / premium\nSpecial interests: \n`
  )}`

  const downloadPdf = useCallback(() => {
    const element = captureRef.current
    if (!element) return

    // Clone the element for PDF generation
    const clone = element.cloneNode(true)
    clone.style.width = '700px'
    clone.style.padding = '20px'
    clone.style.position = 'fixed'
    clone.style.left = '0'
    clone.style.top = '0'
    clone.style.background = '#fff'
    clone.style.zIndex = '-1'
    document.body.appendChild(clone)

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `tourland-${tour.slug}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().set(opt).from(element).save().then(() => {
      document.body.removeChild(clone)
    })
  }, [tour])

  return (
    <div>
      <div ref={captureRef} style={{ background: '#fff' }}>
        <Section eyebrow={`${tour.days} days`} title={tour.title} desc={tour.summary}>

          <div className="flex flex-wrap items-center gap-3">
            <button className="btn btn-primary" onClick={() => setShowBooking(true)}>
              Book this tour
            </button>
            <a className="btn btn-secondary" href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-secondary" href={`mailto:${contact.email}?subject=${encodeURIComponent(`Tour inquiry: ${tour.title}`)}`}>
              Email
            </a>
            <button className="btn btn-secondary" onClick={downloadPdf}>
              PDF
            </button>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-lg font-extrabold text-slate-900">Itinerary</h3>
              <div className="mt-4 grid gap-3">
                {tour.itinerary.map((d) => (
                  <div key={d.day} className="rounded-2xl border border-slate-100 bg-white p-5 print:border print:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm font-extrabold text-brand-teal-800">Day {d.day}</div>
                      <div className="text-sm font-bold text-slate-900">{d.title}</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-slate-100 bg-white p-6">
                <div className="text-sm font-bold text-slate-900">What's included</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Private transport + driver</li>
                  <li>Flexible hotel recommendations</li>
                  <li>Custom pacing (family / couples / solo)</li>
                  <li>Seasonal advice (parks, beaches)</li>
                </ul>
              </div>

              <div className="mt-4 rounded-3xl border border-brand-teal-100 bg-brand-teal-50/30 p-6">
                <div className="text-sm font-bold text-slate-900">Quick price estimate</div>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Base price ({pax} pax × ${basePrice})</span>
                    <span className="font-semibold">${basePrice * pax}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room upgrades ({roomType})</span>
                    <span className="font-semibold">+${roomUpgrade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Add-ons ({addOns.length})</span>
                    <span className="font-semibold">+${addOnCost}</span>
                  </div>
                  <div className="border-t pt-2 text-base font-bold text-brand-teal-800 flex justify-between">
                    <span>Estimated total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-sm font-semibold">Passengers</div>
                  <select value={pax} onChange={e => setPax(parseInt(e.target.value))} className="w-full rounded-lg border border-slate-300 p-2 text-sm">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-sm font-semibold">Room type</div>
                  {['standard', 'deluxe', 'suite'].map(r => (
                    <label key={r} className="flex items-center gap-2 mb-2 text-sm">
                      <input
                        type="radio"
                        name="roomType"
                        value={r}
                        checked={roomType === r}
                        onChange={() => setRoomType(r)}
                      />
                      <span className="capitalize">{r} (+${{standard:0, deluxe:50, suite:120}[r]} per person)</span>
                    </label>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-sm font-semibold">Add-on activities (+$100 each)</div>
                  {['Birding', 'Surf lesson', 'Tea tour', 'Dance show', 'Cooking'].map(act => (
                    <label key={act} className="flex items-center gap-2 mb-2 text-sm">
                      <input
                        type="checkbox"
                        checked={addOns.includes(act)}
                        onChange={() => setAddOns(a => a.includes(act) ? a.filter(x => x!==act) : [...a, act])}
                      />
                      <span>{act}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-olive-50 p-6">
                <div className="text-sm font-bold text-slate-900">Request booking</div>
                <p className="mt-2 text-sm text-slate-600">
                  Final price may vary. Send an inquiry and we'll confirm availability and exact cost.
                </p>
                <a
                  className="mt-4 inline-block w-full rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white shadow hover:bg-green-600"
                  href={`https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(`Hi Tourland! I want ${tour.title} for ${pax} person(s). Room type: ${roomType}. Activities: ${addOns.join(', ') || 'none'}. Travel dates: TBD. Please send a detailed quote.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp inquiry
                </a>
              </div>
            </div>
          </div>

          {/* Print footer */}
          <div className="hidden print:block mt-12 pt-4 border-t text-center text-sm text-slate-400">
            <p>Tourland Sri Lanka | {contact.whatsappDisplay} | {contact.email}</p>
            <p className="mt-1">© {new Date().getFullYear()} Tourland. All rights reserved.</p>
          </div>
        </Section>
      </div>

      {/* Booking modal */}
      {showBooking && <BookingForm tourSlug={slug} tourTitle={tour.title} onClose={() => setShowBooking(false)} />}
    </div>
  )
}
