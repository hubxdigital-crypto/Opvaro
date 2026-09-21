import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { HomeIcon } from '../lib/icons'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-mist via-white to-white">
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <Link to="/" className="inline-block" aria-label="Opvaro — home">
          <Logo />
        </Link>
        <p className="mt-10 text-7xl font-extrabold tracking-tight text-navy-900">404</p>
        <h1 className="mt-3 text-2xl font-extrabold text-navy-950">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-card-hover"
        >
          <HomeIcon className="h-4 w-4" />
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
