import { ShieldCheck, FileSpreadsheet, Banknote, BarChart3, Database, Building2, Building, Landmark, Scale, Search, FileText, Layers, LineChart, PieChart } from 'lucide-react'

export default function FeaturesModules() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Policy & Agreement Management',
      desc: 'Manage PKS, policies, and endorsements in one place.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Claims Processing',
      desc: 'Monitor and track claim progress with transparency.',
    },
    {
      icon: Banknote,
      title: 'Premium & Payment Tracking',
      desc: 'Automate premium calculations and payment records.',
    },
    {
      icon: BarChart3,
      title: 'Financial & Risk Reporting',
      desc: 'Analyze insurer performance and loss ratios.',
    },
  ]

  const modules = [
    { icon: Database, title: 'Asset Database', note: 'Central asset registry.' },
    { icon: Building2, title: 'Insurance Company', note: 'Manage insurers.' },
    { icon: Building, title: 'Insurance Broker', note: 'Coordinate placements.' },
    { icon: Landmark, title: 'Reinsurance Company', note: 'Reinsurance partners.' },
    { icon: Scale, title: 'Loss Adjuster', note: 'Assessment partners.' },
    { icon: Search, title: 'Forensic Consultant', note: 'Incident analysis.' },
    { icon: FileText, title: 'PKS & Policy', note: 'Agreements & policies.' },
    { icon: Layers, title: 'Endorsement', note: 'Adjust policy terms.' },
    { icon: ShieldCheck, title: 'Insurance Claim', note: 'Submit and track.' },
    { icon: LineChart, title: 'Financial Performance', note: 'KPIs and trends.' },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Core Features</h2>
          <p className="mt-3 text-gray-600">Designed for clarity, accountability, and digital transformation.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-md bg-sky-50 text-[#00A2B9] flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="modules" className="mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">System Modules</h2>
            <p className="mt-3 text-gray-600">Comprehensive modules to manage end-to-end insurance lifecycle.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {modules.map((m, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-sky-50 text-[#00A2B9] flex items-center justify-center">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{m.title}</h4>
                    <p className="text-xs text-gray-600">{m.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
