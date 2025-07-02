import React from 'react';
import './AboutHighlights.scss';
import PrimaryButton from '../../common/PrimaryButton';

const AboutHighlights = () => {
  return (
    <section className="about-highlights">
      <div className="container">
        <p className="intro">
          We’re more than just a tech company—we’re your innovation partner. At <span>Nexus,</span> we aim to blend creativity and strategy with cutting-edge solutions.
        </p>

        <div className="grid">
          <div className="item">
            <h3>What we do?</h3>
            <p>
              We bring together all the necessary technology and services to help our clients solve their business problems.
            </p>
            <PrimaryButton
            to="/pricing"
            textColor="#000000"
            bgColor="#fff"
            hoverTextColor="#fff"
            hoverBgColor="#3534FF"
            className='hero-highlight-btn'
          >
            Get In Touch
          </PrimaryButton>
          </div>

          <div className="item">
            <h3>Our Career</h3>
            <p>
              We bring together all the necessary technology and services to help our clients solve their business problems.
            </p>
            <PrimaryButton
            to="/pricing"
            textColor="#000000"
            bgColor="#fff"
            hoverTextColor="#fff"
            hoverBgColor="#3534FF"
            className='hero-highlight-btn'
          >
            Explore Career
          </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHighlights;
