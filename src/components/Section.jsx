export function Section({ eyebrow, title, desc, children }) {
  return (
    <section className="py-14">
      <div className="container">
        {eyebrow ? <div className="badge">{eyebrow}</div> : null}
        {title ? <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h2> : null}
        {desc ? <p className="mt-3 max-w-2xl text-slate-600">{desc}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
