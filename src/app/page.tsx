

import Hero from '@/components/sections/Hero'
import Navbar2 from '@/components/sections/Navbar'
import { NetworkSection } from '@/components/sections/Network'
import { TalentLabSection } from '@/components/sections/TalentLabSectionTemp'
import { Footer } from '@/components/sections/Footer'
import FAQ from '@/components/sections/faq'
import { InterviewSection } from '@/components/sections/InterviewSection'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4f0fc20_1px,transparent_1px),linear-gradient(to_bottom,#d4f0fc20_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-white/60" />
      </div>
      
      <Navbar2 />

      <main className="relative">
        {/* Hero Section */}
        <Hero /> 

        
        {/* Features Section */}
        {/* <Features/> */}

        {/* <WorldMapDemo /> */}

        <NetworkSection/>

        {/* TalentLab Section */}
        <TalentLabSection/>


        <InterviewSection/>


        

        {/* <UserTypeCards/> */}

        <FAQ/>

      </main>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

