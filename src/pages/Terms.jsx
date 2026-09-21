import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import { CONTACT_EMAIL } from '../lib/constants'

const sections = [
  {
    heading: '1. Service Description',
    body: [
      'Opvaro provides Amazon seller account management services, including listing health monitoring, inventory performance tracking, PPC spend monitoring, review and feedback monitoring, weekly performance reporting, and Seller Support case handling.',
    ],
  },
  {
    heading: '2. Month-to-Month Engagement',
    body: [
      `Our services are provided on a month-to-month basis. There are no long-term contracts and no lock-in. Either party may cancel at any time by providing written notice (email to ${CONTACT_EMAIL} is sufficient), with cancellation taking effect at the end of the current billing period.`,
    ],
  },
  {
    heading: '3. Billing',
    body: [
      'Fees are billed monthly in advance. We accept standard payment methods as communicated at onboarding. If a payment fails, we will notify you and pause non-critical services until payment is received.',
    ],
  },
  {
    heading: '4. Client Responsibilities',
    body: [
      "You are responsible for providing accurate account access through Amazon's official User Permissions system and for maintaining the accuracy of your account information. You must notify us promptly of any changes to your account, business, or product catalog that could affect our monitoring.",
    ],
  },
  {
    heading: '5. Limitations of Liability',
    body: [
      "Opvaro acts as a service provider only. We do not guarantee specific sales results, rankings, or revenue outcomes, and Amazon's decisions regarding your account (including policy actions) remain outside our control. To the maximum extent permitted by law, Opvaro's total liability for any claim arising from our services is limited to the fees you paid us in the three months preceding the claim.",
    ],
  },
  {
    heading: '6. Access & Ownership',
    body: [
      'Your Amazon account, listings, inventory, and data remain your property at all times. You may revoke our access at any time through Seller Central. We never store your login credentials.',
    ],
  },
  {
    heading: '7. Termination',
    body: [
      'Either party may terminate the engagement with written notice, effective at the end of the current billing period. Upon termination, we will return or delete any of your data within 60 days unless required by law to retain it, and our access to your account will be revoked.',
    ],
  },
  {
    heading: '8. Changes to These Terms',
    body: [
      'We may update these Terms from time to time. Material changes will be communicated by email at least 14 days before they take effect. Continued use of our services after changes take effect constitutes acceptance.',
    ],
  },
  {
    heading: '9. Contact',
    body: [`Questions about these Terms can be sent to ${CONTACT_EMAIL}.`],
  },
]

export default function Terms() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <Logo />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Legal</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-950 md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {sections.map(({ heading, body }, i) => (
            <Reveal key={heading} delay={Math.min(i * 60, 240)}>
              <h2 className="text-lg font-bold text-navy-950">{heading}</h2>
              {body.map((para, j) => (
                <p key={j} className="mt-3 text-sm leading-relaxed text-slate-600">
                  {para}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
