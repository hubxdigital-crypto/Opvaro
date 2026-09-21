export default function Logo({ tagline = true, dark = false }) {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Opvaro — home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b99aff] to-[#7d43ff] shadow-[0_2px_8px_rgba(62,0,121,.18)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white" aria-hidden="true">
          <polyline points="4,17 9,11 12,14 20,5" />
          <polyline points="20,5 14,5 20,5 20,11" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-lg font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy-900'}`}>
          Opvaro
        </span>
        {tagline && (
          <span className={`text-[11px] font-medium ${dark ? 'text-slate-400' : 'text-slate-400'}`}>
            Amazon Account Management
          </span>
        )}
      </span>
    </a>
  )
}
