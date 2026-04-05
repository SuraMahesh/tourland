import { Link, NavLink, Outlet } from 'react-router-dom'
import { contact } from '../data/tours'

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-brand-teal-800' : 'text-slate-700 hover:text-slate-900'
  }`

export default function Layout() {
  const whatsappHref = `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(
    'Hi Tourland! I want to plan a Sri Lanka tour.\n\nTrip length: 7 days / 14 days\nTravel dates: \nNumber of people: \nInterests: wildlife / beach / culture / tea country\n'
  )}`

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-teal-700 to-brand-olive-600" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">Tourland</div>
              <div className="text-xs font-semibold text-slate-500">Sri Lanka tours</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="/tours" className={navLinkClass}>
              Tours
            </NavLink>
            <NavLink to="/specials" className={navLinkClass}>
              Specials
            </NavLink>
            <NavLink to="/hotels" className={navLinkClass}>
              Hotels
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn btn-secondary hidden sm:inline-flex" href={`mailto:${contact.email}`}>
              Email
            </a>
            <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-100 bg-white">
        <div className="container py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-extrabold text-slate-900">Tourland</div>
              <p className="mt-2 text-sm text-slate-600">
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
