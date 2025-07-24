import React from 'react';
import './Contact.scss';
import ContactInfo from '../../components/sections/ContactInfo/ContactInfo';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import MapSection from '../../components/sections/MapSection/MapSection';

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
