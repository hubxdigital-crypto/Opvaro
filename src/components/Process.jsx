import Reveal from './Reveal'

const steps = [
  ['01', 'Audit the account', 'We identify immediate risk and the operations that need attention first.'],
  ['02', 'Agree the handover', 'You grant only the Amazon permissions needed. Your account stays yours.'],
  ['03', 'Take over the work', 'We resolve urgent issues, then manage listings, ads, support, and daily health.'],
  ['04', 'Report and improve', 'You receive a clear weekly view of what changed and what comes next.'],
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#090c13] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,.13),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-7 border-b border-white/10 pb-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[.18em] text-accent-300">A considered handover</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl">Structured from day one. Quietly managed after that.</h2></div>
          <p className="max-w-md text-base leading-relaxed text-slate-400 lg:justify-self-end">No improvised access changes. No handoffs between vendors. Just a clear operating rhythm from the first review onward.</p>
        </Reveal>
        <div className="grid md:grid-cols-2">
          {steps.map(([number, title, body], index) => (
            <Reveal key={number} delay={index * 80}>
              <article className={`group border-b border-white/10 py-8 md:px-8 md:py-10 ${index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}>
                <p className="text-5xl font-black tracking-tighter text-white/[.09] transition-colors group-hover:text-accent-400/35">{number}</p>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-400">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
