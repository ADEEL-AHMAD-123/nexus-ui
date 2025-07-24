import React from 'react'
import AboutHero from '../../components/sections/AboutHero/AboutHero'
import AboutHighlights from '../../components/sections/AboutHighlights/AboutHighlights'
import KeyBenefits from '../../components/sections/KeyBenefits/KeyBenefits'
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection'
import StatsSection from '../../components/sections/StatsSection/StatsSection'
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