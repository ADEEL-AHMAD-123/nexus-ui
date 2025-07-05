import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/service details/ServiceDetails';
import CaseStudiesPage from './pages/case studies/CaseStudies';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogDetails from './pages/blog details page/BlogDetails'
import CaseStudyDetails from './pages/Case study details/CaseStudyDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
<Route path="/case-studies/:caseId" element={<CaseStudyDetails />} />



      </Routes>
      <Footer />
    </>
  );
}

export default App;
