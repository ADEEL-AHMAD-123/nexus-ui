import React from 'react'
import AboutHero from '../../components/sections/about hero/AboutHero'
import AboutHighlights from '../../components/sections/about highlights/AboutHighlights'
import KeyBenefits from '../../components/sections/key benefits/KeyBenefits'
import ServicesSection from '../../components/sections/services section/ServicesSection'
import StatsSection from '../../components/sections/stats section/StatsSection'
const About = () => {
  return (
<>
<AboutHero/>
<StatsSection/>
<AboutHighlights/>
<KeyBenefits/>
<ServicesSection/>
</>
  )
}

export default About