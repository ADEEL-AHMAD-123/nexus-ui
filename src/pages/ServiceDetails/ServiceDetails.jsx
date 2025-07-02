import React from 'react';
import KeyBenefits from '../../components/sections/key benefits/KeyBenefits';
import SolutionsCarousel from '../../components/sections/solutions carousel/SolutionsCarousel';
import './ServiceDetails.scss';
import TestimonialsSection from '../../components/sections/testimonials section/TestimonialsSection'
import ConsultationSection from '../../components/sections/consultation section/ConsultationSection';
const ServiceDetails = () => {
  return (
    <>
    <div className="service-details-page">
      {/* Hero Image */}
      <div className="hero-image" />

      {/* Content */}
      <section className="service-content">
        <div className="container">
          <div className="heading-area">
            <h1 className="service-title">Management Service</h1>
            <p className="service-subtitle">
              Management Service involves training models using data to enable machines to make decisions and predictions autonomously.
            </p>
          </div>

          <div className="paragraphs">
            <p>
              We're your strategic partners in digital transformation. With over a decade of experience and a team of certified experts, we deliver tailored solutions that drive growth, enhance efficiency, and secure your digital assets.
            </p>
            <p>
              Luminous works with businesses of all sizes, from small startups to large enterprises. We tailor our solutions to meet the specific needs and budget of each client, offering a wide range of IT services.
            </p>
            <p>
              We invest heavily in ongoing training and professional development for our team. We also participate in industry conferences, maintain partnerships with leading technology providers, and conduct internal research and development projects.
            </p>
          </div>
        </div>

        
      </section>
      {/* vertical carousel to display more soloutions */}
      
    </div>
    <SolutionsCarousel/>
    <KeyBenefits/>
    <TestimonialsSection/>
    <ConsultationSection/>
    </>
  );
};

export default ServiceDetails;
