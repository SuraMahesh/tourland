import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { contact } from '../data/tours'

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-brand-teal-800' : 'text-slate-700 hover:text-slate-900'
  }`

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const whatsappHref = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I want to plan a Sri Lanka tour.\n\nTrip length: 7 days / 14 days\nTravel dates: \nNumber of people: \nInterests: wildlife / beach / culture / tea country\n'
  )}`

  const navLinks = [
    { to: '/tours', label: 'Tours' },
    { to: '/specials', label: 'Specials' },
    { to: '/compare', label: 'Compare' },
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

        {/* Mobile Nav overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/20 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* Menu panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-16 left-0 right-0 z-50 md:hidden"
              >
                <div className="border-t border-slate-100 bg-white p-4 shadow-lg">
                  <div className="container flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `py-3 px-4 rounded-lg ${
                            isActive
                              ? 'bg-brand-teal-50 text-brand-teal-800 font-semibold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                    <a
                      className="btn btn-secondary w-full text-center mt-2"
                      href={`mailto:${contact.email}`}
                    >
                      Email
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
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
                <Link className="text-slate-600 hover:text-slate-900" to="/compare">Compare</Link>
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

      {/* Sticky WhatsApp button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition hover:bg-green-600 md:bottom-8 md:right-8"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  )
}