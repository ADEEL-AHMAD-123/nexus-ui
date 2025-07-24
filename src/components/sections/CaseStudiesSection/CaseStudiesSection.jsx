import React from 'react';
import './CaseStudiesSection.scss';
import PrimaryButton from '../../common/PrimaryButton';
import { caseStudies } from '../../../data/caseStudiesData';
import pattern from '../../../assets/images/pattern.png';
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => (
  <section className="case-studies">
    <img src={pattern} alt="pattern" className="pattern-top-left" />
    <div className="container">
      <h2>Case Studies</h2>
      <p className="intro">Here are our featured projects that empower businesses.</p>

      <div className="grid">
        {caseStudies.map((cs) => (
          <div className="card" key={cs.id}>
            <div className="card-img">
              <Link to={`/case-studies/${cs.id}`}>
                <img src={cs.image} alt={cs.title} />
              </Link>
            </div>
            <div className="card-body">
              <p>{cs.title}</p>
              <h3>{cs.subtitle}</h3>
              <PrimaryButton
                to={`/case-studies/${cs.id}`}
                textColor="#000000"
                bgColor="#fff"
                hoverTextColor="#fff"
                hoverBgColor="#3534FF"
              >
                View More
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
