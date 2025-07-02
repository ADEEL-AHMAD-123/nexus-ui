import React from 'react';
import './MapSection.scss';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-wrapper">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13614.00816020464!2d74.26615595!3d31.467297299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de524ec0b9%3A0x8db90e1669b39f61!2sJohar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
