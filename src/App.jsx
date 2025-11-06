import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesModules from './components/FeaturesModules'
import DashboardBenefits from './components/DashboardBenefits'
import AboutTestimonialsFooter from './components/AboutTestimonialsFooter'

export default function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutTestimonialsFooter />
        <FeaturesModules />
        <DashboardBenefits />
      </main>
    </div>
  )
}
