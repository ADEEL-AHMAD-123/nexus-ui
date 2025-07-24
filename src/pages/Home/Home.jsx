import React from 'react';
import CaseStudiesSection from '../../components/sections/CaseStudiesSection/CaseStudiesSection'
import ConsultationSection from '../../components/sections/ConsultationSection/ConsultationSection'
import HeroSection from '../../components/sections/HeroSection/HeroSection'
import Overview from '../../components/sections/OverviewSection/Overview'
import SolutionsSection from '../../components/sections/SolutionsSection/SolutionsSection'
import StatsSection from '../../components/sections/StatsSection/StatsSection'
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection'
import BlogsSection from '../../components/sections/BlogsSection/BlogsSection';

const Home = () => {
  return (
<>
<HeroSection/>
<Overview/>
<SolutionsSection/>
<StatsSection/>
<CaseStudiesSection/>
<TestimonialsSection/>
<BlogsSection/>
<ConsultationSection/>
</>
  )
}

export default Home