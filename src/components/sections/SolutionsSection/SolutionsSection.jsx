import React from 'react';
import './SolutionsSection.scss';
import pattern from '../../../assets/images/pattern.png';
import PrimaryButton from '../../common/PrimaryButton';
import {
  FaBolt,
  FaDatabase,
  FaShieldAlt,
  FaBalanceScale,
  FaCloudUploadAlt,
  FaUsersCog,
  FaArrowRight,
} from 'react-icons/fa';

const features = [
  {
    title: 'Fast and Reliable',
    desc: 'Whether you have a team of 2 or 200, we deliver with speed and stability.',
    icon: <FaBolt className="feature-icon" />,
  },
  {
    title: 'Discover Data Everywhere',
    desc: 'Your data is unified and accessible anytime, from anywhere.',
    icon: <FaDatabase className="feature-icon" />,
  },
  {
    title: 'Risk Management',
    desc: 'Identify and manage risks in real-time with our smart tools.',
    icon: <FaShieldAlt className="feature-icon" />,
  },
  {
    title: 'Compliance & Privacy',
    desc: 'Stay compliant with ever-evolving global data regulations.',
    icon: <FaBalanceScale className="feature-icon" />,
  },
  {
    title: 'Cloud Migration',
    desc: 'We make your transition to the cloud seamless and secure.',
    icon: <FaCloudUploadAlt className="feature-icon" />,
  },
  {
    title: 'Third‑Party Management',
    desc: 'Manage your vendors and third-party relationships with confidence.',
    icon: <FaUsersCog className="feature-icon" />,
  },
];

const SolutionsSection = () => (
  <section className="solutions-section">
    <div className="container">
      <h2>Innovative solutions from experts!</h2>
      <p className="subtitle">
        Offers a unified platform that fosters innovation while providing end-to-end data management.
        See how we help your team solve today’s biggest challenges.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={pattern} alt="pattern" className="pattern" />
            {feature.icon}
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
            <a href="#" className="feature-link">
              Service Details <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>

      <PrimaryButton
            to="#"
            textColor="#000000"
            bgColor="#fff"
            hoverTextColor="#3534FF"
            hoverBgColor="#fff"
          >
            More Soloutions
          </PrimaryButton>
    </div>
  </section>
);

export default SolutionsSection;
