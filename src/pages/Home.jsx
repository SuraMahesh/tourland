import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours, specials } from '../data/tours'
import TripQuiz from '../components/TripQuiz'

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <div>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-800/80" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')]" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        {/* Content */}
        <div className="container relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Discover Sri Lanka
              <span className="block text-brand-teal-400">Your Way</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Private, custom tours — 7 days, 14 days, or your own itinerary. 
              Wildlife, beaches, tea country, and ancient culture.
            </p>
            
            {/* Trip Planner CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowQuiz(true)}
                className="btn btn-primary text-lg px-8 py-4"
              >
                Plan My Trip
              </button>
              <Link to="/tours" className="btn btn-secondary text-lg px-8 py-4">
                View Tours
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex justify-center gap-8 text-slate-400 text-sm">
              <div>
                <div className="text-2xl font-bold text-white">7-14</div>
                <div>Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div>Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div>Private</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center">Featured Tours</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.slice(0, 3).map(tour => (
              <Link key={tour.slug} to={`/tours/${tour.slug}`} className="block group">
                <div className="rounded-3xl bg-white p-6 shadow-sm transition group-hover:shadow-md">
                  <div className="text-sm font-bold text-brand-teal-800">{tour.days} days</div>
                  <h3 className="mt-2 text-xl font-extrabold">{tour.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{tour.summary}</p>
                  <div className="mt-4 font-bold text-slate-900">From ${tour.priceFrom}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/tours" className="btn btn-secondary">View All Tours</Link>
          </div>
        </div>
      </section>

      {/* Specials Preview */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center">Special Experiences</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {specials.slice(0, 3).map(s => (
              <div key={s.slug} className="rounded-3xl border border-slate-100 bg-white p-6">
                <div className="badge">{s.tag}</div>
                <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/specials" className="btn btn-secondary">All Specials</Link>
          </div>
        </div>
      </section>

      {/* Trip Planner Section (below fold) */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Not sure which tour?</h2>
            <p className="mt-4 text-slate-600">
              Answer 4 quick questions and we'll recommend the perfect itinerary.
            </p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="btn btn-primary mt-6"
            >
              Start Trip Planner Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Trip Quiz Modal */}
      {showQuiz && <TripQuiz onClose={() => setShowQuiz(false)} />}
    </div>
  )
}