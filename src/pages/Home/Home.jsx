import React from 'react';
import CaseStudiesSection from '../../components/sections/case studies section/CaseStudiesSection'
import ConsultationSection from '../../components/sections/consultation section/ConsultationSection'
import HeroSection from '../../components/sections/hero section/HeroSection'
import Overview from '../../components/sections/overview section/Overview'
import SolutionsSection from '../../components/sections/solutions section/SolutionsSection'
import StatsSection from '../../components/sections/stats section/StatsSection'
import TestimonialsSection from '../../components/sections/testimonials section/TestimonialsSection'
import BlogsSection from '../../components/sections/blogs section/BlogsSection';

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