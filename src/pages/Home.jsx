import Hero from '../components/Hero'
import AuditPromise from '../components/AuditPromise'
import Services from '../components/Services'
import Process from '../components/Process'
import Trust from '../components/Trust'
import FinalCta from '../components/FinalCta'
import { Management, Audience, WhyOpvaro, Capabilities } from '../components/MarketplaceSections'

export default function Home() {
  return (
    <>
      <Hero />
      <AuditPromise />
      <Services />
      <Management />
      <Audience />
      <Process />
      <WhyOpvaro />
      <Capabilities />
      <Trust />
      <FinalCta />
    </>
  )
}
