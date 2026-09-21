import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import { CONTACT_EMAIL } from '../lib/constants'

const sections = [
  {
    heading: '1. Data We Collect',
    body: [
      'When you engage Opvaro, we collect the information needed to deliver our account management services:',
      'Contact details you provide (name and email address) when you book an audit or contact us.',
      "Amazon Seller Central access granted through Amazon's official User Permissions system, limited to the minimum permissions needed to monitor and manage your account.",
      'Account performance data from your Seller Central account, including listing status, inventory levels, PPC spend, customer reviews, and support cases.',
    ],
  },
  {
    heading: '2. How We Use Your Data',
    body: [
      'We use the data we collect solely to provide, maintain, and improve our account management services. This includes monitoring your account health, opening and managing Seller Support cases, preparing your weekly reports, and flagging issues that could affect your revenue.',
      'We never use your data for advertising, and we never sell, rent, or trade your data to third parties.',
    ],
  },
  {
    heading: '3. Access & Security',
    body: [
      "You remain the owner of your Amazon account. Access is granted exclusively through Amazon's official User Permissions system, and you can revoke it at any time. We never store your Amazon login credentials or password.",
      'We apply industry-standard safeguards, including restricted internal access, least-privilege permissions, and confidentiality obligations on all team members.',
    ],
  },
  {
    heading: '4. Data Retention',
    body: [
      'We retain account performance data for as long as you are a client, so we can provide accurate reporting and continuity of service. After you cancel, we remove or anonymize your data within 60 days unless we are required by law to retain it longer.',
    ],
  },
  {
    heading: '5. Third-Party Sharing',
    body: [
      'We do not sell your personal data. We share data only with service providers we rely on to run our business (such as email and scheduling tools), each bound by confidentiality and data-protection obligations, and only to the extent necessary to provide our services.',
    ],
  },
  {
    heading: '6. Your Rights',
    body: [
      `You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it at any time by emailing ${CONTACT_EMAIL}. We respond to all requests within 30 days.`,
    ],
  },
  {
    heading: '7. GDPR Notice (EU Users)',
    body: [
      'If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, and port your data, as well as the right to restrict or object to processing. You also have the right to lodge a complaint with your local supervisory authority. Where our processing of your data is based on consent, you may withdraw that consent at any time. We act as a data processor for your account performance data and a data controller for the contact information you provide us.',
    ],
  },
  {
    heading: '8. Contact Us',
    body: [
      `For any privacy question or request — including deletion of your data — email ${CONTACT_EMAIL}. We'll confirm receipt and act promptly.`,
    ],
  },
]

export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <Logo />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Legal</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-950 md:text-4xl">
            Privacy Policy
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
