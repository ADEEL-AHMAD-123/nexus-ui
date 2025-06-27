import React from 'react';
import './OverviewSection.scss';
import pattern from '../../../assets/images/pattern.png';


const OverviewSection = () => {
  return (
    <section className="overview">
      <div className="overview-content container">
        <h2>
          We have built a <span className="highlight">purpose‑driven</span> platform in the Metaverse
          to drive action and cooperation and to <span className="highlight">revolutionize</span> progress.
        </h2>
        <p className="overview-subtext">
          We have built a purpose‑driven platform in the Metaverse to drive action and cooperation and to revolutionize progress.
        </p>
      </div>
      <img src={pattern} alt="Pattern" className="overview-pattern" />
    </section>
  );
};

export default OverviewSection;
