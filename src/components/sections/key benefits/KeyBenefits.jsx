import React from 'react';
import './KeyBenefits.scss';
import pattern from '../../../assets/images/pattern.png'; 
import { Rocket, Settings, Users, DollarSign, Network, Globe, Shield, Monitor } from 'lucide-react';

const benefits = [
  { icon: <Rocket size={32} />, title: 'Accelerate Growth' },
  { icon: <Settings size={32} />, title: 'Boost Efficiency' },
  { icon: <Users size={32} />, title: 'Collaboration' },
  { icon: <DollarSign size={32} />, title: 'Reduce Costs' },
  { icon: <Network size={32} />, title: 'Networking' },
  { icon: <Globe size={32} />, title: 'Global Translations' },
  { icon: <Shield size={32} />, title: 'Enhance Security' },
  { icon: <Monitor size={32} />, title: 'In-house Techs' },
];

const KeyBenefits = () => {
  return (
    <section className="key-benefits-section">
      <img src={pattern} alt="Pattern" className="pattern-top-left" />
      <div className="container">
        <h2 className="section-title">Key Benefits</h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
