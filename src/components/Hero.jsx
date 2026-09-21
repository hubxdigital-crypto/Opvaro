import Reveal from './Reveal'
import CalendlyButton from './CalendlyButton'
import { ArrowRightIcon, CheckIcon } from '../lib/icons'

export default function Hero() {
  return <section className="relative overflow-hidden bg-[linear-gradient(145deg,#fff_8%,#edecff_52%,#fff_92%)] pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
    <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#b99aff]/35 blur-3xl" /><div className="pointer-events-none absolute right-[-8rem] top-12 h-80 w-80 rounded-full bg-[#ffad74]/20 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6"><Reveal><div className="mx-auto max-w-3xl text-center"><p className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold text-royal-amethyst shadow-[0_2px_5px_rgba(38,17,74,.08)]">Amazon operations, handled end to end</p><h1 className="mt-6 font-display text-[2.45rem] font-medium leading-[.98] tracking-[-.045em] text-deep-iris sm:text-5xl md:text-6xl">Listings to Organic Ranking — Full Amazon Account Management.</h1><p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:mt-6 sm:text-lg">Opvaro handles the listings, cases, ads, and account health work that steals your attention—so you can get back to building the business.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row"><CalendlyButton className="w-full sm:w-auto">Get a free account audit</CalendlyButton><a href="#services" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-deep-iris px-5 py-3 text-base font-medium text-deep-iris transition-colors hover:bg-white sm:w-auto">See what we manage <ArrowRightIcon className="h-4 w-4" /></a></div></div></Reveal>
      <Reveal delay={120}><AuditTable /></Reveal>
    </div>
  </section>
}

function AuditTable() {
  const rows = [['Account health', 'Policy risk review'], ['Listings & catalog', 'Conversion gaps'], ['Cases & support', 'Open case triage']]
  return <div className="relative mx-auto mt-10 max-w-5xl rounded-lg border border-mist bg-white p-2.5 shadow-[0_32px_24px_-12px_rgba(14,59,101,.10)] sm:mt-14 sm:p-5">
    <div className="flex flex-col items-start gap-3 border-b border-mist px-3 pb-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-royal-amethyst">Free account audit</p><h2 className="mt-1 font-display text-xl font-medium leading-tight text-deep-iris sm:text-2xl">Your operational snapshot</h2></div><span className="shrink-0 rounded-full bg-mist-violet px-3 py-1.5 text-xs font-bold text-royal-amethyst">Delivered in 48h</span></div>
    <div className="mt-3 overflow-hidden rounded-lg border border-mist"><div className="hidden grid-cols-[1.2fr_1fr_auto] gap-4 bg-paper px-4 py-3 text-xs font-bold uppercase tracking-[.12em] text-ash sm:grid"><span>Area</span><span>What we review</span><span>Status</span></div>{rows.map(([area, task], i) => <div key={area} className={`grid gap-2 px-3 py-4 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center sm:gap-4 sm:px-4 ${i % 2 ? 'bg-paper' : 'bg-white'}`}><span className="font-semibold text-deep-iris">{area}</span><span className="text-sm text-slate">{task}</span><span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-mist-violet px-2.5 py-1 text-xs font-bold text-royal-amethyst"><CheckIcon className="h-3 w-3" strokeWidth={3} /> Ready</span></div>)}</div>
  </div>
}
