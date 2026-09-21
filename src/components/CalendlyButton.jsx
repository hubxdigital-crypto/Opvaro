import { openCalendly } from '../lib/calendly'
import SpecularButton from './SpecularButton'

export default function CalendlyButton({ children, className = '', variant = 'brand', onClick }) {
  const handleClick = (event) => { onClick?.(event); openCalendly(event) }

  if (variant === 'outline') {
    return <button type="button" onClick={handleClick} className={`inline-flex items-center justify-center gap-2 rounded-lg border border-[#ddd5eb] bg-white px-5 py-3 text-base font-semibold text-[#26114a] shadow-[0_2px_4px_rgba(18,55,105,.08),0_1px_1px_rgba(18,55,105,.04)] transition-all duration-200 ease-out hover:-translate-y-px hover:border-[#b99aff] hover:shadow-[0_4px_12px_rgba(47,1,151,.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d43ff] focus-visible:ring-offset-2 ${className}`}>{children}</button>
  }

  return <SpecularButton
    size="md"
    radius={8}
    tint="#2f0d63"
    tintOpacity={1}
    textColor="#ffffff"
    lineColor="#c9b3ff"
    baseColor="#5c28a8"
    intensity={1.35}
    shineSize={14}
    shineFade={34}
    thickness={1.25}
    proximity={280}
    onClick={handleClick}
    className={className}
  >{children}</SpecularButton>
}
