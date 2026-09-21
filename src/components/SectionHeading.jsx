import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtext, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-3xl ${alignCls} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="mb-4 inline-flex rounded-full bg-mist-violet px-3 py-1.5 text-xs font-medium text-royal-amethyst">
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-3xl font-medium leading-none tracking-[-.035em] text-deep-iris md:text-4xl lg:text-[3rem]"
      >
        {title}
      </h2>
      {subtext && (
        <p
          className="mt-4 text-base leading-relaxed text-slate md:text-lg"
        >
          {subtext}
        </p>
      )}
    </Reveal>
  )
}
