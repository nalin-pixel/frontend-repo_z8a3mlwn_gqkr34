import { useState, useEffect } from 'react'
import { LogIn } from 'lucide-react'

const PLN_BLUE = '#00A2B9'

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      {/* Simple vector mark evoking PLN lightning within a grid */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-md shadow-sm">
        <rect x="0" y="0" width="32" height="32" rx="6" fill={PLN_BLUE} />
        <path d="M14 6 L10 16 H16 L12 26 L22 12 H16 L20 6 Z" fill="white" opacity="0.95" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-gray-900 font-semibold tracking-tight">E-Insurance</span>
        <span className="text-xs text-gray-500">by PLN</span>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-white/60 backdrop-blur'} border-b border-gray-100`}> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="#features" className="hover:text-gray-900">Features</a></li>
            <li><a href="#modules" className="hover:text-gray-900">Modules</a></li>
            <li><a href="#dashboard" className="hover:text-gray-900">Dashboard</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <a href="#dashboard" className="inline-flex items-center gap-2 rounded-md bg-[#00A2B9] text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-shadow">
            <LogIn className="w-4 h-4" />
            Login
          </a>
        </div>
      </nav>
    </header>
  )
}
