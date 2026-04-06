import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-200 transition"
      >
        {current.label}
        <svg className={`h-3 w-3 transition ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop to close */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 w-40 rounded-xl bg-white shadow-xl border border-slate-100 z-50 overflow-hidden">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code)
                  setOpen(false)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 ${lang.code === current.code ? 'font-bold text-brand-teal-800 bg-brand-teal-50/50' : 'text-slate-600'}`}
              >
                <span className="font-bold">{lang.label}</span>
                <span className="ml-2 text-slate-400 text-xs">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
