import { useTranslation } from 'react-i18next'
import { destinations } from '../data/seasons'

export default function WeatherWidget() {
  const { t } = useTranslation()

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b pb-3">
        <span className="text-xl">🌤️</span>
        <h3 className="text-sm font-bold text-slate-900">{t('weather.title')}</h3>
      </div>
      <div className="mt-4 grid gap-3">
        {destinations.slice(0, 3).map(dest => (
          <div key={dest.name} className="flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold text-slate-900">{dest.name}</div>
              <div className="text-xs text-slate-500">{dest.condition}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">{dest.temp}</div>
              <div className="text-xs text-slate-400">{dest.forecast}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-slate-400">
        Forecast based on typical April conditions.
      </div>
    </div>
  )
}
