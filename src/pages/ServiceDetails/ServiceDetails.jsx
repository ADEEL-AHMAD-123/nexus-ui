import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";
import ServiceFAQs from "../../components/sections/ServiceFAQs/ServiceFAQs";
import { serviceFaqs } from "../../data/serviceFaqs";


import KeyBenefits from "../../components/sections/KeyBenefits/KeyBenefits";
import SolutionsCarousel from "../../components/sections/SolutionsCarousel/SolutionsCarousel";
import TestimonialsSection from "../../components/sections/TestimonialsSection/TestimonialsSection";
import ConsultationSection from "../../components/sections/ConsultationSection/ConsultationSection";
import "./ServiceDetails.scss";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  console.log("URL slug:", serviceSlug);
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    console.error("No service found for slug:", serviceSlug);
    return (
      <div className="container">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="service-details-page">
        {/* Hero Image */}
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />

        {/* Content */}
        <section className="service-content">
          <div className="container">
            <div className="heading-area">
              <h1 className="service-title">{service.title}</h1>
              <p className="service-subtitle">{service.subtitle}</p>
            </div>

            <div className="paragraphs">
              {service.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ServiceFAQs faqs={serviceFaqs[serviceSlug] || []} />
      <SolutionsCarousel />
      <KeyBenefits />
      <TestimonialsSection />
      <ConsultationSection />
    </>
  );
};

export default ServiceDetails;
