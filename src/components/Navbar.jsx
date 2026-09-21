import { useEffect, useState } from 'react'
import Logo from './Logo'
import CalendlyButton from './CalendlyButton'
import { MenuIcon, XIcon } from '../lib/icons'

const links = [['Services', 'services'], ['How it works', 'process'], ['Your access', 'trust'], ['FAQ', 'faq']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const listen = () => setScrolled(window.scrollY > 8); listen(); window.addEventListener('scroll', listen, { passive: true }); return () => window.removeEventListener('scroll', listen) }, [])
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
    <div className={`mx-auto max-w-[1200px] rounded-2xl border border-white bg-white/95 px-3 shadow-[0_12px_28px_rgba(47,1,151,.11)] backdrop-blur-xl transition-shadow duration-200 sm:px-4 ${scrolled || open ? 'shadow-[0_16px_34px_rgba(47,1,151,.15)]' : ''}`}>
      <div className="flex h-14 items-center justify-between gap-3"><div className="flex items-center gap-5"><Logo tagline={false} /><span className="hidden h-7 w-px bg-[#ded9e7] md:block" />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`/#${id}`} className="rounded-full px-4 py-2 text-sm font-medium text-[#312749] transition-colors duration-200 hover:bg-[#edecff] hover:text-[#3e0079]">{label}</a>)}</nav></div>
        <div className="flex items-center gap-2"><CalendlyButton variant="outline" className="hidden px-4 py-2 text-sm sm:inline-flex">Book a call</CalendlyButton><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-plum-velvet transition-colors hover:bg-mist-violet md:hidden">{open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}</button></div>
      </div>
      {open && <div className="border-t border-mist py-3 md:hidden"><nav className="grid gap-1">{links.map(([label, id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-plum-velvet hover:bg-mist-violet">{label}</a>)}</nav><CalendlyButton className="mt-3 w-full px-4 py-3 text-sm" onClick={() => setOpen(false)}>Get a free audit</CalendlyButton></div>}
    </div>
  </header>
}
