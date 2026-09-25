export default function Logo({ tagline = false }) {
  return <a href="/" className="inline-flex min-w-0 flex-col" aria-label="OPVARO — home">
    <img src="/opvaro-logo.png" alt="OPVARO" className="h-9 w-auto max-w-[150px] object-contain sm:h-10 sm:max-w-[170px]" />
    {tagline && <span className="mt-1 text-[10px] font-medium tracking-wide text-ash">Amazon Marketplace Management &amp; Growth</span>}
  </a>
}
