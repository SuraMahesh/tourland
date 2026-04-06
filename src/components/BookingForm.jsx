import { useState } from 'react'
import { contact } from '../data/tours'

export default function BookingForm({ tourSlug, tourTitle, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: { start: '', end: '' },
    passengers: 1,
    rooms: 1,
    roomType: 'standard', // standard, deluxe, suite
    activities: [],
    specialRequests: '',
  })

  const roomPrices = { standard: 0, deluxe: 50, suite: 120 } // USD per night

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
  }

  const toggleActivity = (activity) => {
    setForm(f => ({
      ...f,
      activities: f.activities.includes(activity)
        ? f.activities.filter(a => a !== activity)
        : [...f.activities, activity]
    }))
  }

  const calculateTotal = () => {
    const basePrice = tourTitle.includes('7 days') ? 690 : 1290
    const roomUpgrade = (roomPrices[form.roomType] * 7) // per person? simplified
    const activityAddons = form.activities.length * 100 // placeholder
    return basePrice + roomUpgrade + activityAddons
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const submitBooking = () => {
    const summary = `Booking Inquiry:\nTour: ${tourTitle}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDates: ${form.travelDates.start} to ${form.travelDates.end}\nPassengers: ${form.passengers}\nRooms: ${form.rooms} (${form.roomType})\nActivities: ${form.activities.join(', ')}\nSpecial requests: ${form.specialRequests}\nEstimated total: $${calculateTotal()}`
    const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(summary)}`
    window.open(wa, '_blank')
    if (onClose) onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900">Book this tour</h2>
          {onClose && (
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>
          )}
        </div>

        {/* Progress */}
        <div className="mb-8 flex justify-between">
          {[1,2,3,4].map(s => (
            <div key={s} className={`flex-1 ${s < 4 ? 'border-b-2 ' : ''} ${s <= step ? 'border-brand-teal-600' : 'border-slate-200'}`}>
              <div className={`mb-2 text-sm font-semibold ${s <= step ? 'text-brand-teal-800' : 'text-slate-400'}`}>Step {s}</div>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h3 className="mb-4 text-lg font-bold">Your details</h3>
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-semibold">Full name</label>
                <input type="text" value={form.name} onChange={e => handleChange('name', e.target.value)} className="w-full rounded-lg border border-slate-300 p-3" placeholder="John Doe" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Email</label>
                <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} className="w-full rounded-lg border border-slate-300 p-3" placeholder="john@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Phone (with country code)</label>
                <input type="tel" value={form.phone} onChange={e => handleChange('phone', e.target.value)} className="w-full rounded-lg border border-slate-300 p-3" placeholder="+94 77 123 4567" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="mb-4 text-lg font-bold">Travel dates & group</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">Start date</label>
                <input type="date" value={form.travelDates.start} onChange={e => handleChange('travelDates', {...form.travelDates, start: e.target.value})} className="w-full rounded-lg border border-slate-300 p-3" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">End date</label>
                <input type="date" value={form.travelDates.end} onChange={e => handleChange('travelDates', {...form.travelDates, end: e.target.value})} className="w-full rounded-lg border border-slate-300 p-3" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Passengers</label>
                <select value={form.passengers} onChange={e => handleChange('passengers', parseInt(e.target.value))} className="w-full rounded-lg border border-slate-300 p-3">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Rooms needed</label>
                <select value={form.rooms} onChange={e => handleChange('rooms', parseInt(e.target.value))} className="w-full rounded-lg border border-slate-300 p-3">
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="mb-4 text-lg font-bold">Room preference</h3>
            <div className="mb-6 grid gap-4">
              {['standard', 'deluxe', 'suite'].map(type => (
                <div
                  key={type}
                  onClick={() => handleChange('roomType', type)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 ${form.roomType === type ? 'border-brand-teal-600 bg-brand-teal-50' : 'border-slate-200'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold capitalize">{type}</div>
                      <div className="text-sm text-slate-600">{type === 'standard' ? 'Comfortable 3-star' : type === 'deluxe' ? '4-star with amenities' : 'Premium 5-star'}</div>
                    </div>
                    <div className="font-bold">+${roomPrices[type] * 7} USD</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-lg font-bold">Add-on activities (+$100 each)</h3>
            <div className="grid gap-3">
              {['Bird watching (Kumana)', 'Surf lesson (Hiriketiya)', 'Tea country tour', 'Cultural dance show', 'Cooking class'].map(act => (
                <label key={act} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 cursor-pointer hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={form.activities.includes(act)}
                    onChange={() => toggleActivity(act)}
                    className="h-5 w-5 rounded text-brand-teal-600"
                  />
                  <span>{act}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="mb-4 text-lg font-bold">Review your booking</h3>
            <div className="rounded-xl bg-slate-50 p-4 space-y-2 text-sm">
              <p><span className="font-semibold">Tour:</span> {tourTitle}</p>
              <p><span className="font-semibold">Name:</span> {form.name}</p>
              <p><span className="font-semibold">Contact:</span> {form.email}, {form.phone}</p>
              <p><span className="font-semibold">Dates:</span> {form.travelDates.start} → {form.travelDates.end}</p>
              <p><span className="font-semibold">Passengers:</span> {form.passengers}</p>
              <p><span className="font-semibold">Rooms:</span> {form.rooms} × {form.roomType}</p>
              {form.activities.length > 0 && <p><span className="font-semibold">Activities:</span> {form.activities.join(', ')}</p>}
              <p><span className="font-semibold">Special requests:</span> {form.specialRequests || 'None'}</p>
              <div className="mt-4 border-t pt-2"><span className="font-bold">Estimated total: </span><span className="text-xl font-bold text-brand-teal-800">${calculateTotal()}</span> USD</div>
            </div>
            <p className="mt-4 text-sm text-slate-600">This is an inquiry, not a final quote. We'll confirm availability and final pricing via WhatsApp/email.</p>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 ? (
            <button className="btn btn-secondary" onClick={prevStep}>Back</button>
          ) : <div />}
          {step < 4 ? (
            <button className="btn btn-primary" onClick={nextStep} disabled={step === 1 && !form.name}>Next</button>
          ) : (
            <button className="btn btn-primary" onClick={submitBooking}>Send inquiry on WhatsApp</button>
          )}
        </div>
      </div>
    </div>
  )
}
