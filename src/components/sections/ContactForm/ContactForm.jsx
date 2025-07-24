import React from 'react';
import './ContactForm.scss';
import PrimaryButton from '../../common/PrimaryButton';
const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-header">
          <h2>Get in touch</h2>
          <p>We’d love to hear from you. Please fill out this form.</p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..."></textarea>
          </div>

          <div className="form-check">
            <input type="checkbox" id="privacy" name="privacy" />
            <label htmlFor="privacy">
              You agree to our friendly <a href="/privacy">privacy policy</a>.
            </label>
          </div>

          <PrimaryButton
            textColor="#fff"
            bgColor="#3534FF"
            hoverTextColor="#3534FF"
            hoverBgColor="#fff"
            className='submit-btn'
          >
            Send Message
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
