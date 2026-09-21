import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { CONTACT_EMAIL } from '../../lib/constants'
import { LinkedinIcon, XTwitterIcon } from '../../lib/icons'

const explore = [['Services', '/#services'], ['How it works', '/#process'], ['Your access', '/#trust'], ['FAQ', '/#faq']]
const company = [['Contact', '/#contact'], ['Privacy policy', '/privacy'], ['Terms & conditions', '/terms']]

function Tape({ className = '' }) {
  return <svg className={className} viewBox="0 0 95 80" fill="none" aria-hidden="true"><path d="M1 45 70.3 5l18 31.2L19 76.2 1 45Z" fill="#26114a"/><path d="m9 46 61-35 3 5-61 35-3-5Zm8 14 61-35 3 5-61 35-3-5Z" fill="#fff" opacity=".09"/></svg>
}

function FooterColumn({ title, items }) {
  return <div><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-ash">{title}</h3><ul className="mt-4 space-y-2.5">{items.map(([label, href]) => <li key={label}><Link to={href} className="text-sm font-medium text-slate transition-colors hover:text-royal-amethyst">{label}</Link></li>)}</ul></div>
}

export function TapedFooter() {
  const currentYear = new Date().getFullYear()
  return <footer className="border-t border-mist bg-[#f1eff6] px-4 py-8 text-plum-velvet sm:px-6 sm:py-10">
    <div className="relative mx-auto max-w-[1200px] rounded-3xl border border-white/80 bg-white px-5 py-10 shadow-[0_20px_50px_rgba(38,17,74,.10)] sm:px-8 md:py-12 lg:px-12">
      <Tape className="pointer-events-none absolute -left-7 -top-5 hidden h-16 w-20 -rotate-3 md:block" />
      <Tape className="pointer-events-none absolute -right-7 -top-5 hidden h-16 w-20 rotate-[87deg] md:block" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_.7fr_.7fr_.55fr] lg:gap-12">
        <div><Logo /><p className="mt-4 max-w-sm text-base leading-relaxed text-slate">Full Amazon account management—from listings and daily operations to advertising and organic ranking.</p><a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex text-sm font-semibold text-royal-amethyst hover:text-deep-iris">{CONTACT_EMAIL}</a></div>
        <FooterColumn title="Explore" items={explore} />
        <FooterColumn title="Company" items={company} />
        <div><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-ash">Follow</h3><div className="mt-4 flex gap-2"><a href="https://www.linkedin.com/company/opvaro" target="_blank" rel="noopener noreferrer" aria-label="Opvaro on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-violet text-royal-amethyst transition-transform hover:-translate-y-0.5"><LinkedinIcon className="h-4 w-4" /></a><a href="https://x.com/opvaro" target="_blank" rel="noopener noreferrer" aria-label="Opvaro on X" className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-violet text-royal-amethyst transition-transform hover:-translate-y-0.5"><XTwitterIcon className="h-4 w-4" /></a></div></div>
      </div>
    </div>
    <div className="mx-auto mt-5 flex max-w-[1200px] flex-col gap-3 px-1 text-xs text-ash sm:flex-row sm:items-center sm:justify-between sm:px-4"><p>© {currentYear} Opvaro. All rights reserved.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/privacy" className="hover:text-royal-amethyst">Privacy Policy</Link><Link to="/terms" className="hover:text-royal-amethyst">Terms &amp; Conditions</Link><span>Amazon account management, done with clear boundaries.</span></div></div>
  </footer>
}
