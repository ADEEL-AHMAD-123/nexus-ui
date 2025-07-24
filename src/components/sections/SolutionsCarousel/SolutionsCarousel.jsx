import React from 'react';
import './SolutionsCarousel.scss';
import { Server, Cloud, Shield, Activity, Code2 } from 'lucide-react';

const solutions = [
  { icon: <Server size={28} />, title: 'Cloud Hosting' },
  { icon: <Cloud size={28} />, title: 'Cloud Migration' },
  { icon: <Shield size={28} />, title: 'Cybersecurity' },
  { icon: <Activity size={28} />, title: 'Monitoring' },
  { icon: <Code2 size={28} />, title: 'API Integrations' },
  { icon: <Server size={28} />, title: 'DevOps' },
  { icon: <Shield size={28} />, title: 'Firewall Setup' },
];

// Duplicate items for seamless loop
const duplicatedSolutions = [...solutions, ...solutions];

const SolutionsCarousel = () => {
  return (
    <section className="carousel-section">
      <div className="container">
        <h3 className="carousel-heading">Explore Our Solutions</h3>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {duplicatedSolutions.map((item, index) => (
              <div className="carousel-card" key={index}>
                <div className="icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel;
