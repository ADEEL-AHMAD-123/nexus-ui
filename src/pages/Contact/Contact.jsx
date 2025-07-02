import React from 'react';
import './Contact.scss';
import ContactInfo from '../../components/sections/contact info/ContactInfo';
import ContactForm from '../../components/sections/contact form/ContactForm';
import MapSection from '../../components/sections/map section/MapSection';

const Contact = () => {
  return (
    <>
      <div className="contact-hero"></div>
      <ContactForm />
      <MapSection/>
      <ContactInfo />

    </>
  );
};

export default Contact;
