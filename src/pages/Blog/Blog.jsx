import React from 'react'
import BlogsSection from '../../components/sections/BlogsSection/BlogsSection';
import ConsultationSection from '../../components/sections/ConsultationSection/ConsultationSection'
const Blog = () => {
  return (
<>
<BlogsSection limit={6}/>
<ConsultationSection/>
</>
  )
}

export default Blog