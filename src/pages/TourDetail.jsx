import { Link, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { Section } from '../components/Section'
import { contact, tours } from '../data/tours'
import TourPdfGenerator from './TourPdfGenerator'

export default function TourDetail() {
  const { slug } = useParams()
  const tour = tours.find((t) => t.slug === slug)
  const pdfRef = useRef(null)

  useEffect(() => {
    // Cleanup pdf container on unmount
    return () => {
      if (pdfRef.current) {
        pdfRef.current.innerHTML = ''
      }
    }
  }, [])

  if (!tour) {
    return (
      <Section title="Tour not found" desc="Go back to packages.">
        <Link className="btn btn-secondary" to="/tours">Back</Link>
      </Section>
    )
  }

  const wa = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    `Hi Tourland! I want this package: ${tour.title}\n\nTravel dates: \nNumber of people: \nHotel preference: boutique / mid-range / premium\nSpecial interests: \n`
  )}`

  const downloadPdf = () => {
    const element = document.getElementById(`pdf-${slug}`)
    if (!element) return
    const opt = {
      margin:       [10, 10, 10, 10],
      filename:     `${tour.slug}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(element).save()
  }

  return (
    <div>
      <TourPdfGenerator />
      <Section eyebrow={`${tour.days} days`} title={tour.title} desc={tour.summary}>
        <div className="flex flex-wrap items-center gap-3">
          <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
            Book / Ask on WhatsApp
          </a>
          <a className="btn btn-secondary" href={`mailto:${contact.email}?subject=${encodeURIComponent(`Tour inquiry: ${tour.title}`)}`}>
            Email inquiry
          </a>
          <button className="btn btn-secondary" onClick={downloadPdf}>
            Download PDF brochure
          </button>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-lg font-extrabold text-slate-900">Itinerary</h3>
            <div className="mt-4 grid gap-3">
              {tour.itinerary.map((d) => (
                <div key={d.day} className="rounded-2xl border border-slate-100 bg-white p-5">
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
              <div className="text-sm font-bold text-slate-900">What’s included</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Private transport + driver</li>
                <li>Flexible hotel recommendations</li>
                <li>Custom pacing (family / couples / solo)</li>
                <li>Seasonal advice (parks, beaches)</li>
              </ul>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-olive-50 p-6">
              <div className="text-sm font-bold text-slate-900">Custom add-ons</div>
              <p className="mt-2 text-sm text-slate-600">
                Want birding (Kumana), Yala safari focus, Hiriketiya surf, tea country photography, or
                Buddhism heritage visits? Tell us and we’ll add it.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
