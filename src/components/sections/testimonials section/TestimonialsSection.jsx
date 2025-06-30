import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.scss';
import client1 from '../../../assets/images/client.webp';
import client2 from '../../../assets/images/client2.webp';

const testimonials = [
  {
    avatar: client1,
    name: 'Jane Doe',
    role: 'CEO, Acme Corp',
    quote: 'Working with NEXUS Technologies transformed our product vision into reality—we’ve seen 150% growth.'
  },
  {
    avatar: client2,
    name: 'John Smith',
    role: 'CTO, BetaSoft',
    quote: 'Their agile delivery and expert guidance improved our security and performance across all platforms.'
  },
  {
    avatar: client1,
    name: 'Sarah Lynn',
    role: 'PM, NovaApp',
    quote: 'NEXUS delivered on time, with high quality. Our app’s UX is better than ever.'
  },
  {
    avatar: client2,
    name: 'Tom Hanks',
    role: 'Founder, Startly',
    quote: 'Great team, great results! Highly recommended for any SaaS startup.'
  },
  {
    avatar: client1,
    name: 'Sarah Lynn',
    role: 'PM, NovaApp',
    quote: 'NEXUS delivered on time, with high quality. Our app’s UX is better than ever.'
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef();
  const [visibleCards, setVisibleCards] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const scrollTo = (idx) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.offsetWidth / visibleCards;
    containerRef.current.scrollTo({
      left: cardWidth * idx,
      behavior: 'smooth',
    });
    setIndex(idx);
  };

  const prev = () => scrollTo(Math.max(index - 1, 0));
  const next = () => scrollTo(Math.min(index + 1, maxIndex));

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">Trusted by businesses worldwide for delivering exceptional digital products.</p>

        <div className="carousel-wrapper">
          <div className="carousel" ref={containerRef}>
            {testimonials.map((t, i) => (
              <div
                className="card"
                key={i}
                style={{
                    '--visible-cards': visibleCards,
                  }}
                  
              >
                <img src={t.avatar} alt={t.name} className="avatar" />
                <p className="quote">“{t.quote}”</p>
                <p className="client-name">{t.name}</p>
                <p className="client-role">{t.role}</p>
              </div>
            ))}
          </div>

          {testimonials.length > visibleCards && (
            <div className="arrows">
              <button onClick={prev} disabled={index === 0}>‹</button>
              <button onClick={next} disabled={index === maxIndex}>›</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
