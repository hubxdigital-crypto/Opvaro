import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CheckIcon, ActivityIcon, FileTextIcon, MessageIcon, MegaphoneIcon, LockIcon } from '../lib/icons'

const largeCardChecks = [
  'Account & Brand Registry Setup',
  'Listing Health Checks',
  'Policy Flag Alerts',
  'Inventory & Buy Box Monitoring',
]

const smallCards = [
  {
    icon: FileTextIcon,
    title: 'Listing Creation & Optimization',
    body: 'Titles, bullets, backend keywords, A+ Content — written to convert, not just to fill space.',
  },
  {
    icon: MessageIcon,
    title: 'Case Handling & Customer Support',
    body: 'Seller Support tickets, buyer messages, returns — we chase them down so you don\u2019t have to.',
  },
  {
    icon: MegaphoneIcon,
    title: 'PPC & Ads Management',
    body: 'Campaigns built, bids tuned, ACoS trimmed — weekly, not \u201Cwhenever we get to it.\u201D',
  },
  {
    icon: LockIcon,
    title: 'No Lock-In',
    body: 'Month-to-month. We earn the renewal, not lock you into one.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div
        className="pointer-events-none absolute right-[-8%] top-24 h-[380px] w-[380px] rounded-full bg-[#b99aff]/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Services"
          title="One team for the work nobody else has time to own."
          subtext="We take responsibility for the daily details that protect revenue, customer experience, and your peace of mind."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <Reveal className="md:col-span-2 lg:col-span-4 lg:row-span-2">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-mist bg-white p-6 shadow-[0_16px_24px_-18px_rgba(14,59,101,.18)] transition-all hover:-translate-y-1 sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#b99aff]/25 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mist-violet">
                  <ActivityIcon className="h-6 w-6 text-royal-amethyst" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium leading-none text-deep-iris">
                  Account Setup &amp; Management
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                  From Brand Registry to daily health checks — we keep your account compliant,
                  protected, and sellable, every single day.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {largeCardChecks.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist-violet">
                        <CheckIcon className="h-3.5 w-3.5 text-royal-amethyst" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-plum-velvet">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {smallCards.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i + 1) * 100} className="md:col-span-1 lg:col-span-2">
              <div className="group relative h-full overflow-hidden rounded-lg border border-mist bg-paper p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_24px_-18px_rgba(14,59,101,.18)]">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-600/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mist-violet">
                    <Icon className="h-5 w-5 text-royal-amethyst" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-medium leading-none text-deep-iris">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
