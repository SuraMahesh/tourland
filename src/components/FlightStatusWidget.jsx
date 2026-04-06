import { useTranslation } from 'react-i18next'

export default function FlightStatusWidget() {
  const { t } = useTranslation()

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b pb-3">
        <span className="text-xl">✈️</span>
        <h3 className="text-sm font-bold text-slate-900">Flight Status</h3>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Bandaranaike Int'l (CMB)</span>
          <span className="text-green-600 font-semibold">Normal</span>
        </div>
        <div className="text-xs text-slate-500">
          Avg delay: 12 min
        </div>
        <div className="text-xs text-slate-500">
          Immigration wait: 45-60 min
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-600">
            24/7 Airport transfers available. Your driver will meet you at arrivals with a name sign.
          </p>
        </div>
      </div>
    </div>
  )
}
