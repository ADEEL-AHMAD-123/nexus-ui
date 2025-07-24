import React from 'react';
import './ServicesSection.scss';
import pattern from '../../../assets/images/pattern.png';

const services = [
  {
    title: 'Software Development',
    description:
      "We specialize in building custom software for your business goals — whether it's an internal system, customer platform, or full-scale digital product",
  },
  {
    title: 'Custom Website Development',
    description:
      'We design and develop modern, responsive websites that not only look great but are optimized for performance, SEO, and conversions',
  },
  {
    title: 'Mobile App Development',
    description:
      'From concept to launch, we create high-quality mobile apps using React Native or native tech. we deliver smooth, and scalable apps.',
  },
  {
    title: 'SaaS Product Development',
    description:
      'We help startups and businesses turn SaaS ideas into reality — building cloud platforms with subscriptions, dashboards, and user systems ready to launch and scale.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <img src={pattern} alt="Pattern" className="pattern" />
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
        We deliver full-cycle development with startup agility and enterprise precision
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
