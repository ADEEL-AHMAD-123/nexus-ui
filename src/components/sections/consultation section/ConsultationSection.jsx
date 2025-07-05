import React from 'react';
import './ConsultationSection.scss';
import pattern from '../../../assets/images/pattern2.png';
import PrimaryButton from '../../common/PrimaryButton';
const ConsultationSection = () => (
  <section className="consultation-section">
    <div className="container">
      <div className="content">
        <h2>Book a Free Consultation</h2>
        <p>Schedule a no-obligation consultation to discuss your unique needs and how Luminous can elevate your business technology.</p>
        <PrimaryButton
            to="/contact"
            textColor="#fff"
            bgColor="#3534FF"
            hoverTextColor="#3534FF"
            hoverBgColor="#fff"
          >
            Schedule Now
          </PrimaryButton>
      </div>
    
      <img src={pattern} alt="Pattern" className="pattern" />

    </div>
  </section>
);

export default ConsultationSection;
