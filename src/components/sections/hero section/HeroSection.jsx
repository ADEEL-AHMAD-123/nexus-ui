import React, { useEffect, useState } from 'react';
import './HeroSection.scss';

import hero1 from '../../../assets/images/hero1.webp';
import hero2 from '../../../assets/images/hero2.webp';
import pattern from '../../../assets/images/pattern.png';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-container ${animate ? 'animate' : ''}`}>
        {/* LEFT: Text */}
        <div className="hero-left">
          <h1>
            Transforming Ideas <br />
            Into <span>Digital Products</span>
          </h1>
          <p>
            We build human-centric, innovative digital experiences that inspire and perform.
          </p>
          <button className="hero-btn">Let’s Build Together</button>
        </div>

        {/* RIGHT: Images & Patterns */}
        <div className="hero-right">
          <div className="hero-images">
            <img src={hero2} alt="Hero 2" className="hero-img hero-img2" />
            <img src={hero1} alt="Hero 1" className="hero-img hero-img1" />
            <img src={pattern} alt="Pattern" className="pattern pattern-bottom-right" />
            <img src={pattern} alt="Pattern" className="pattern pattern-left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
