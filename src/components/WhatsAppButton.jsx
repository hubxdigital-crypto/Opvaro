import { WHATSAPP_LINK } from '../lib/constants'
import { WhatsAppIcon } from '../lib/icons'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Opvaro on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
