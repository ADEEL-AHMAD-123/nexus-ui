import React from 'react';
import './ContactInfo.scss';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="info-grid">
          <div className="info-item">
            <Phone className="icon" />
            <div className="info-text">
              <h4>+92 344 8751152</h4>
              <p>Hotline 24/7</p>
            </div>
          </div>
          <div className="info-item">
            <Mail className="icon" />
            <div className="info-text">
              <h4>support@nexus-technologies.net</h4>
              <p>Free Consult</p>
            </div>
          </div>
          <div className="info-item">
            <MapPin className="icon" />
            <div className="info-text">
              <h4>Johar Town, Lahore</h4>
              <p>Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
