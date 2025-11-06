import { PieChart, LineChart, BarChart3, Clock, Database, Eye, TrendingUp, Shield } from 'lucide-react'

export default function DashboardBenefits() {
  const benefits = [
    { icon: Shield, title: 'Transparency & Accountability' },
    { icon: Clock, title: 'Time Efficiency' },
    { icon: Database, title: 'Centralized Data Management' },
    { icon: Eye, title: 'Real-time Monitoring' },
    { icon: TrendingUp, title: 'Better Financial Insight' },
  ]

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Comprehensive Insurance Dashboard</h2>
          <p className="mt-3 text-gray-600">KPI cards, charts, and milestones for actionable insights.</p>
        </div>

        {/* Mock dashboard */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Outstanding Claims</p>
                <p className="text-2xl font-semibold text-gray-900">126</p>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Loss Ratio</p>
                <p className="text-2xl font-semibold text-gray-900">38%</p>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Avg. Settlement Days</p>
                <p className="text-2xl font-semibold text-gray-900">21</p>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-900">Claim Statistics</h4>
                  <BarChart3 className="w-4 h-4 text-[#00A2B9]" />
                </div>
                <div className="flex items-end gap-2 h-28">
                  <span className="w-6 h-6 bg-sky-200 rounded" />
                  <span className="w-6 h-12 bg-sky-300 rounded" />
                  <span className="w-6 h-20 bg-sky-400 rounded" />
                  <span className="w-6 h-10 bg-sky-300 rounded" />
                  <span className="w-6 h-16 bg-sky-400 rounded" />
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-900">Loss Ratio Trends</h4>
                  <LineChart className="w-4 h-4 text-[#00A2B9]" />
                </div>
                <div className="h-28 w-full bg-gradient-to-r from-sky-100 via-white to-sky-100 rounded" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-900">Claim Progress</h4>
              <PieChart className="w-4 h-4 text-[#00A2B9]" />
            </div>
            <ol className="mt-4 space-y-3">
              {['Reported', 'Under Review', 'Negotiation', 'Settlement'].map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${i < 2 ? 'bg-[#00A2B9]' : 'bg-gray-300'}`} />
                  <span className="text-sm text-gray-700">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Why You Uses E-Insurance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-7 w-7 rounded-md bg-sky-50 text-[#00A2B9] flex items-center justify-center">
                      <b.icon className="w-4 h-4" />
                    </span>
                    {b.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
