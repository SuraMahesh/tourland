import { useParams } from 'react-router-dom'
import { tours } from '../data/tours'

export default function TourPdfGenerator() {
  const { slug } = useParams()
  const tour = tours.find((t) => t.slug === slug)

  if (!tour) return null

  return (
    <div
      id={`pdf-${slug}`}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '794px', // A4 width at 96dpi
        padding: '40px',
        background: '#fff',
        color: '#000',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: '3px solid #556B2F', paddingBottom: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
          <img src="/tourland-logo.png" alt="Tourland" style={{ height: '60px' }} />
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>{tour.title}</h1>
            <p style={{ margin: '8px 0 0', fontSize: '16px', color: '#475569' }}>{tour.priceFrom}</p>
          </div>
        </div>
        <p style={{ fontSize: '14px', lineHeight: '1.6', maxWidth: '700px' }}>{tour.summary}</p>
      </div>

      {/* Highlights */}
      {tour.highlights && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>
            Highlights
          </h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            {tour.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Itinerary */}
      {tour.itinerary && (
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            Itinerary
          </h2>
          <div style={{ lineHeight: '1.8' }}>
            {tour.itinerary.map((d) => (
              <div key={d.day} style={{ display: 'flex', marginBottom: '16px' }}>
                <div style={{ width: '70px', fontWeight: 'bold', color: '#115e59' }}>Day {d.day}</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{d.title}</div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '2px solid #e2e8f0',
          fontSize: '12px',
          color: '#64748b',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}>Tourland Sri Lanka | +94 77 414 5903 | surangamunasinghe22568@gmail.com</p>
        <p style={{ margin: '8px 0 0' }}>© {new Date().getFullYear()} Tourland. All rights reserved.</p>
      </div>
    </div>
  )
}
