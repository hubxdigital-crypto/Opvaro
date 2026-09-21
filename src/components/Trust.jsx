import { useState } from 'react'
import Reveal from './Reveal'
import { KeyIcon, UnlockIcon, XCircleIcon, ChevronDownIcon, CheckIcon } from '../lib/icons'

const principles = [
  [KeyIcon, 'No password sharing', 'We work through Amazon’s official User Permissions system.'],
  [UnlockIcon, 'You retain ownership', 'Your account, catalog, and data stay under your control.'],
  [XCircleIcon, 'No lock-in contract', 'Stay month to month because the work continues to earn its place.'],
]
const faqs = [
  ['How do I grant Opvaro access to my account?', 'Through Amazon’s official User Permissions feature in Seller Central. We receive only the access required, while you retain full ownership.'],
  ['What does the free audit include?', 'A practical review of account health, listings, inventory, policy exposure, and any priority issues we can identify from the information available.'],
  ['Can I cancel anytime?', 'Yes. Engagements are month to month, with no long-term lock-in.'],
  ['What happens if my account gets a policy flag?', 'We assess the issue, prepare the necessary actions, and manage communication with Seller Support as appropriate.'],
]

export default function Trust() {
  return (
    <section id="trust" className="bg-[#101724] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-accent-300">Access without anxiety</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl">A partner should make your account feel safer—not less yours.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Our operating model is built around the boundaries that matter to a seller: control, visibility, and an easy exit if we are not the right fit.</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-300"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10"><CheckIcon className="h-3.5 w-3.5 text-emerald-300" strokeWidth={3} /></span> You remain the account owner, always.</div>
          </Reveal>
          <div className="border-t border-white/10">
            {principles.map(([Icon, title, body], index) => <Reveal key={title} delay={index * 90}><article className="flex gap-5 border-b border-white/10 py-6 sm:gap-6"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/12 text-accent-300"><Icon className="h-5 w-5" /></span><div><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-1.5 text-base leading-relaxed text-slate-400">{body}</p></div></article></Reveal>)}
          </div>
        </div>
        <div id="faq" className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-16 lg:mt-24">
          <Reveal><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-accent-300">Questions, answered</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Before we work together.</h2></div><p className="max-w-sm text-base leading-relaxed text-slate-400">A few practical details sellers usually want to understand first.</p></div></Reveal>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">{faqs.map(([question, answer], index) => <FaqItem key={question} question={question} answer={answer} defaultOpen={index === 0} />)}</div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return <div className="rounded-xl border border-white/10 bg-[#0c111a] transition-colors hover:border-white/20"><button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left" aria-expanded={open} onClick={() => setOpen(!open)}><span className="text-sm font-semibold text-white sm:text-base">{question}</span><ChevronDownIcon className={`h-5 w-5 shrink-0 text-accent-300 transition-transform ${open ? 'rotate-180' : ''}`} /></button><div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{answer}</p></div></div></div>
}
