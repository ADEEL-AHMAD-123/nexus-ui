import React from 'react'
import BlogsSection from '../../components/sections/blogs section/BlogsSection';
import ConsultationSection from '../../components/sections/consultation section/ConsultationSection'
const Blog = () => {
  return (
<>
<BlogsSection limit={6}/>
<ConsultationSection/>
</>
  )
}

export default Blog