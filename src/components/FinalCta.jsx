import Reveal from './Reveal'
import CalendlyButton from './CalendlyButton'

export default function FinalCta() {
  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#edecff,#fff_48%,#fbefff)] px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="mx-auto max-w-4xl rounded-lg border border-mist bg-white p-6 text-center shadow-[0_32px_24px_-12px_rgba(14,59,101,.08)] sm:p-10 lg:p-14">
        <span className="rounded-full bg-mist-violet px-3 py-1.5 text-xs font-medium text-royal-amethyst">Ready when you are</span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium leading-none text-deep-iris sm:text-5xl">Give your account the operational cover it deserves.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate">Start with a focused audit, then decide whether Opvaro is the right team to take the work forward.</p>
        <div className="mt-8 flex justify-center"><CalendlyButton className="w-full sm:w-auto">Get your free account audit</CalendlyButton></div>
        <p className="mt-4 text-sm text-ash">Official Amazon permissions. No password sharing.</p>
      </Reveal>
    </section>
  )
}
