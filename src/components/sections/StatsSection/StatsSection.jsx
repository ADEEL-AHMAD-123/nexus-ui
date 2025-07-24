import React from 'react';
import './StatsSection.scss';

const stats = [
  { value: '+46%', label: 'Community users' },
  { value: '24M', label: 'Enhance Security' },
  { value: '89%', label: 'Reduce Costs' },
  { value: '720+', label: 'Accelerate Growth' },
];

const StatsSection = () => (
  <section className="stats-section">
    <div className="container">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
