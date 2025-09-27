import Navbar from '@/components/Navbar'
import ServicesHero from '@/components/ServicesHero'
import BathroomKitchenRenovations from '@/components/BathroomKitchenRenovations'
import Regrouting from '@/components/Regrouting'
import FixLeakingShowers from '@/components/FixLeakingShowers'
import Waterproofing from '@/components/Waterproofing'
import KitchenSplashbacks from '@/components/KitchenSplashbacks'
import Footer from '@/components/Footer'
import { Contact, FAQ, Process } from '@/components'
import AboutUsHero from '@/components/AboutUsHero'
import AboutUsDesc from '@/components/AboutUsDesc'
import OurMissionValues from '@/components/OurMissionValues'

export default function ServicesPage() {
  return (
    <main className='bg-white'>
      <Navbar />
      <AboutUsHero />
      <AboutUsDesc />
      <OurMissionValues />
      <FAQ />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}