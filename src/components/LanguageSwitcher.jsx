import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <div className="relative group inline-block">
      <button className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-200 transition">
        {current.label}
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-1 hidden w-36 group-hover:block rounded-xl bg-white shadow-lg border border-slate-100 z-50">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 ${lang.code === current.code ? 'font-bold text-brand-teal-800' : 'text-slate-600'}`}
          >
            <span className="font-bold">{lang.label}</span>
            <span className="ml-1 text-slate-400 text-xs">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
