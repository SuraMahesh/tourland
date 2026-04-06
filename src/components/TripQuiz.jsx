import { useState } from 'react'
import { Link } from 'react-router-dom'

const questions = [
  {
    q: "How much time can you spend in Sri Lanka?",
    options: [
      { label: "5-7 days", value: "short", scores: { classic: 3, grand: 1 } },
      { label: "10-14 days", value: "medium", scores: { classic: 1, grand: 3 } },
      { label: "14+ days", value: "long", scores: { classic: 0, grand: 5 } },
    ],
  },
  {
    q: "What's your ideal pace?",
    options: [
      { label: "Fast — I want to see everything", value: "fast", scores: { classic: 3, grand: 1 } },
      { label: "Moderate — A mix of must-see and relaxation", value: "moderate", scores: { classic: 1, grand: 3 } },
      { label: "Relaxed — Linger in each place", value: "slow", scores: { classic: 1, grand: 5 } },
    ],
  },
  {
    q: "What excites you most?",
    options: [
      { label: "Culture & heritage sites", value: "culture", scores: { classic: 2, grand: 4 } },
      { label: "Wildlife & nature", value: "wildlife", scores: { classic: 2, grand: 5 } },
      { label: "Beach & surf", value: "beach", scores: { classic: 3, grand: 3 } },
      { label: "A bit of everything", value: "everything", scores: { classic: 1, grand: 5 } },
    ],
  },
  {
    q: "Traveling with",
    options: [
      { label: "Solo", value: "solo", scores: { classic: 3, grand: 2 } },
      { label: "Couple", value: "couple", scores: { classic: 2, grand: 3 } },
      { label: "Family with kids", value: "family", scores: { classic: 3, grand: 4 } },
    ],
  },
]

export default function TripQuiz({ onClose }) {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({ classic: 0, grand: 0 })
  const [done, setDone] = useState(false)

  const select = (optionScores) => {
    const next = { classic: scores.classic + optionScores.classic, grand: scores.grand + optionScores.grand }
    setScores(next)
    if (step + 1 >= questions.length) {
      setDone(true)
    } else {
      setStep(step + 1)
    }
  }

  const recommendation = scores.grand >= scores.classic ? 'grand' : 'classic'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900">Trip Planner Quiz</h2>
          {onClose && <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>}
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="mb-6 h-2 rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-brand-teal-600 transition-all"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="mb-6 text-lg font-bold text-slate-800">{questions[step].q}</h3>

            <div className="grid gap-3">
              {questions[step].options.map((o, i) => (
                <button
                  key={i}
                  onClick={() => select(o.scores)}
                  className="rounded-2xl border-2 border-slate-100 p-4 text-left hover:border-brand-teal-300 hover:bg-brand-teal-50 transition"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-brand-teal-50 px-6 py-3 text-lg font-bold text-brand-teal-800">
              We recommend the {recommendation === 'grand' ? '14-day Grand' : '7-day Classic'} tour!
            </div>

            <p className="mb-6 text-slate-600">
              {recommendation === 'grand'
                ? "You want a deeper experience — more time to explore Sri Lanka's diverse offerings."
                : "You want a focused, high-impact trip — all the highlights packed in."
              }
            </p>

            <div className="grid gap-4">
              <Link
                to={`/tours/sri-lanka-${recommendation === 'grand' ? '14-days-grand' : '7-days-classic'}`}
                className="btn btn-primary w-full text-center"
                onClick={() => onClose && onClose()}
              >
                View {recommendation === 'grand' ? '14-Day Great' : '7-Day Classic'} tour
              </Link>
              <Link
                to="/compare"
                className="btn btn-secondary w-full text-center"
                onClick={() => onClose && onClose()}
              >
                Compare both tours
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
