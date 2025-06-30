import React from 'react';
import './CaseStudiesSection.scss';
import PrimaryButton from '../../common/PrimaryButton';
import case1 from '../../../assets/images/case1.webp';
import case2 from '../../../assets/images/case2.webp';
import case3 from '../../../assets/images/case3.webp';
import case4 from '../../../assets/images/case4.webp';
import pattern from '../../../assets/images/pattern.png';

const caseStudies = [
  {
    img: case1,
    title: 'NodeJS Development, Security',
    subtitle: 'Rocken SaaS App',
    link: '#',
  },
  {
    img: case2,
    title: 'ReactJS, UI/UX Design',
    subtitle: 'Startup Platform',
    link: '#',
  },
  {
    img: case3,
    title: 'Security Audit, Backend',
    subtitle: 'Enterprise Security Suite',
    link: '#',
  },
  {
    img: case4,
    title: 'Fullstack Development',
    subtitle: 'Ecommerce Revamp',
    link: '#',
  },
];

const CaseStudiesSection = () => (
  <section className="case-studies">
    <img src={pattern} alt="pattern" className="pattern-top-left" />
    <div className="container">
      <h2>Case Studies</h2>
      <p className="intro">Here are our featured projects that empower businesses.</p>

      <div className="grid">
        {caseStudies.map((cs, idx) => (
          <div className="card" key={idx}>
            <div className="card-img">
              <img src={cs.img} alt={cs.title} />
            </div>
            <div className="card-body">
              <p>{cs.title}</p>
              <h3>{cs.subtitle}</h3>
              <PrimaryButton
            to="/pricing"
            textColor="#000000"
            bgColor="#fff"
            hoverTextColor="#fff"
            hoverBgColor="#3534FF"
          >
            View Soloutions
          </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
