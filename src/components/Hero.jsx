import { ArrowRight, Info } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[90vh] pt-20 pb-16 sm:pt-24 sm:pb-24 bg-gradient-to-b from-white via-sky-50 to-white flex items-center">
      {/* Decorative abstract shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -top-24 right-[-10%] opacity-20" width="560" height="560" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="260" stroke="#00A2B9" strokeWidth="2" />
          <circle cx="300" cy="300" r="180" stroke="#00A2B9" strokeWidth="2" />
          <circle cx="300" cy="300" r="100" stroke="#00A2B9" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-[-80px] left-[-40px] opacity-10" width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="280" height="280" rx="24" stroke="#111827" strokeWidth="1.5" />
          <path d="M40 160H320M160 40V320" stroke="#111827" strokeOpacity="0.8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Transforming Insurance Management for PLN
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            E-Insurance is a centralized digital platform that streamlines insurance policy management, claims processing, and financial reporting across all PLN entities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-md bg-[#00A2B9] text-white px-5 py-3 text-sm font-medium shadow-sm hover:shadow transition-all">
              Explore Dashboard
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-gray-300 text-gray-700 px-5 py-3 text-sm font-medium hover:bg-gray-50">
              <Info className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
        {/* Abstract dashboard illustration */}
        <div className="relative z-10">
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-3 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-lg bg-sky-50 border border-sky-100 p-3">
                  <div className="h-2 w-16 bg-[#00A2B9] rounded" />
                  <div className="mt-2 h-3 w-24 bg-sky-200 rounded" />
                </div>
                <div className="h-20 rounded-lg bg-sky-50 border border-sky-100 p-3">
                  <div className="h-2 w-16 bg-[#00A2B9] rounded" />
                  <div className="mt-2 h-3 w-24 bg-sky-200 rounded" />
                </div>
                <div className="h-20 rounded-lg bg-sky-50 border border-sky-100 p-3">
                  <div className="h-2 w-16 bg-[#00A2B9] rounded" />
                  <div className="mt-2 h-3 w-24 bg-sky-200 rounded" />
                </div>
              </div>
              <div className="col-span-2 h-40 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white flex items-end p-4">
                <div className="flex gap-2 items-end w-full">
                  <div className="h-12 w-8 bg-sky-200 rounded" />
                  <div className="h-20 w-8 bg-sky-300 rounded" />
                  <div className="h-28 w-8 bg-sky-400 rounded" />
                  <div className="h-16 w-8 bg-sky-300 rounded" />
                  <div className="h-24 w-8 bg-sky-400 rounded" />
                </div>
              </div>
              <div className="h-40 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4">
                <div className="h-28 w-full rounded bg-sky-100" />
                <div className="mt-3 h-3 w-24 bg-gray-200 rounded" />
              </div>
              <div className="col-span-3 h-28 rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Claim Statistics</p>
                  <p className="text-sm font-medium text-gray-800">Outstanding Claims</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2 w-16 rounded bg-sky-200" />
                  <span className="h-2 w-10 rounded bg-sky-300" />
                  <span className="h-2 w-6 rounded bg-sky-400" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500 text-center">Mock dashboard preview — KPI, charts, and progress</p>
        </div>
      </div>
    </section>
  )
}
