import { Quote, Mail } from 'lucide-react'

export default function AboutTestimonialsFooter() {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is E-Insurance?</h2>
            <p className="text-gray-600 leading-relaxed">
              E-Insurance helps PLN manage policies, endorsements, claims, payments, and insurer performance efficiently in one centralized platform. Built for scale and governance, it ensures consistent processes, reliable records, and timely reporting across all PLN entities.
            </p>
          </div>
          <div>
            {/* Data management illustration */}
            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 rounded-xl border border-gray-200 p-4">
                    <div className="h-3 w-24 bg-[#00A2B9] rounded" />
                    <div className="mt-3 h-20 rounded bg-sky-50" />
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <div className="h-3 w-20 bg-sky-200 rounded" />
                    <div className="mt-3 space-y-2">
                      <div className="h-2 bg-gray-200 rounded" />
                      <div className="h-2 bg-gray-200 rounded" />
                      <div className="h-2 bg-gray-200 rounded" />
                    </div>
                  </div>
                  <div className="col-span-3 rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-24 bg-gray-200 rounded" />
                      <div className="h-2 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="mt-3 h-10 rounded bg-sky-50" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-3 -bottom-3 h-16 w-16 rounded-xl bg-sky-100 border border-sky-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#00A2B9]">
            <Quote className="w-5 h-5" />
            <span className="text-sm font-medium">Testimonial</span>
          </div>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            “E-Insurance has unified insurance management across PLN entities, improving efficiency and governance transparency.”
          </p>
          <p className="mt-2 text-sm text-gray-500">— PLN Official</p>
        </div>
      </section>

      <footer id="contact" className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-md shadow-sm">
                <rect x="0" y="0" width="32" height="32" rx="6" fill="#00A2B9" />
                <path d="M14 6 L10 16 H16 L12 26 L22 12 H16 L20 6 Z" fill="white" opacity="0.95" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">E-Insurance</p>
                <p className="text-xs text-gray-500">Empowering Reliable Insurance Management</p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#modules" className="hover:text-gray-900">Modules</a></li>
              <li><a href="#dashboard" className="hover:text-gray-900">Dashboard</a></li>
              <li><a href="#support" className="hover:text-gray-900">Support</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Use</a></li>
            </ul>
            <a href="mailto:support@pln.co.id" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Mail className="w-4 h-4 text-[#00A2B9]" />
              support@pln.co.id
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} PLN. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
