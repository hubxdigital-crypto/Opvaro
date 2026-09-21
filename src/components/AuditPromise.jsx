import Reveal from './Reveal'
import { ActivityIcon, FileTextIcon, MessageIcon, ArrowRightIcon } from '../lib/icons'

const signals = [
  { icon: ActivityIcon, label: 'Account health', detail: 'Flags, policy risks, and unresolved priorities.' },
  { icon: FileTextIcon, label: 'Listings & catalog', detail: 'Conversion gaps, content issues, and inventory friction.' },
  { icon: MessageIcon, label: 'Cases & support', detail: 'Open cases and buyer issues that need a clear owner.' },
]

export default function AuditPromise() {
  return (
    <section id="audit-briefing" className="relative overflow-hidden bg-[#080b12] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[8%] top-0 h-px w-[84%] bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent-600/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-10 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-300">Your first 48 hours</p>
          <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl">Start with a clear view of what is costing you attention.</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Before anything changes, we map the operational issues sitting inside your account and tell you exactly what deserves action first.</p>
          <a href="#services" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent-300 transition-colors hover:text-white">Explore the scope <ArrowRightIcon className="h-4 w-4" /></a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e1420] shadow-[0_24px_60px_rgba(0,0,0,.28)]">
            <div className="flex flex-col items-start gap-2 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /><span className="text-sm font-semibold text-white">Audit briefing</span></div>
              <span className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">Delivered in 48h</span>
            </div>
            <div className="divide-y divide-white/[.08]">
              {signals.map(({ icon: Icon, label, detail }, index) => (
                <div key={label} className="group flex gap-3 px-4 py-5 sm:gap-4 sm:px-6">
                  <span className="text-sm font-black text-slate-600">0{index + 1}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-accent-300 transition-colors group-hover:bg-accent-500/15"><Icon className="h-4 w-4" /></span>
                  <div><h3 className="font-bold text-white">{label}</h3><p className="mt-1 text-sm leading-relaxed text-slate-400">{detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
