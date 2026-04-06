import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { contact } from '../data/tours'

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-brand-teal-800' : 'text-slate-700 hover:text-slate-900'
  }`

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappHref = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I want to plan a Sri Lanka tour.\n\nTrip length: 7 days / 14 days\nTravel dates: \nNumber of people: \nInterests: wildlife / beach / culture / tea country\n'
  )}`

  const navLinks = [
    { to: '/tours', label: 'Tours' },
    { to: '/specials', label: 'Specials' },
    { to: '/hotels', label: 'Hotels' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/tourland-logo.png" alt="Tourland" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn btn-secondary hidden sm:inline-flex" href={`mailto:${contact.email}`}>
              Email
            </a>
            <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            {/* Mobile menu button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-100 bg-white md:hidden"
            >
              <div className="container py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.to} href={link.to} className="text-base font-semibold py-2 `${isActive ? 'text-brand-teal-800' : 'text-slate-700'}`" onClick={() => setMobileMenuOpen(false)}">
                {link.label}</a>
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a className="btn btn-secondary w-full text-center" href={`mailto:${contact.email}`}>
                  Email
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>

      <footer className="border-t border-slate-100 bg-white">
        <div className="container py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <img src="/tourland-logo.png" alt="Tourland" className="h-8 mb-2" />
              <p className="text-sm text-slate-600">
                Minimal, private Sri Lanka tours—7 days, 14 days, and special-interest trips.
              </p>
            </div>
            <div className="text-sm">
              <div className="font-bold text-slate-900">Quick links</div>
              <div className="mt-2 grid gap-2">
                <Link className="text-slate-600 hover:text-slate-900" to="/tours">Tours</Link>
                <Link className="text-slate-600 hover:text-slate-900" to="/specials">Specials</Link>
                <Link className="text-slate-600 hover:text-slate-900" to="/hotels">Hotels</Link>
                <Link className="text-slate-600 hover:text-slate-900" to="/contact">Contact</Link>
              </div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-slate-900">Contact</div>
              <div className="mt-2 grid gap-2 text-slate-600">
                <a className="hover:text-slate-900" href={`mailto:${contact.email}`}>{contact.email}</a>
                <a className="hover:text-slate-900" href={`https://wa.me/${contact.whatsappE164}`} target="_blank" rel="noreferrer">
                  {contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} Tourland. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}