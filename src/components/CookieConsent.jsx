import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LockIcon } from '../lib/icons'

const STORAGE_KEY = 'opvaro-cookie-consent'

function readChoice() {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeChoice(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* Storage unavailable — the banner simply shows again next visit. */
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!readChoice())
  }, [])

  if (!visible) return null

  const choose = (value) => {
    writeChoice(value)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-40 sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-xl sm:-translate-x-1/2"
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-card p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6)] sm:flex-row sm:items-center sm:p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-400">
            <LockIcon className="h-4 w-4" />
          </span>
          <p className="text-sm leading-relaxed text-slate-300">
            We use cookies to improve your experience and keep the site running smoothly.{' '}
            <Link
              to="/privacy"
              className="font-semibold text-white underline underline-offset-2 hover:text-accent-400"
            >
              Read our Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:flex-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="flex-1 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:from-accent-400 hover:to-accent-500 sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
