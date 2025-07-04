import React, { useState, useEffect, useRef } from "react";
import "./TestimonialsSection.scss";

const testimonials = [
  {
    name: "DERRICK W.",
    role: "Real Estate Broker",
    quote:
      "We needed a custom CRM to manage real estate operations and Nexus nailed it. They built exactly what we envisioned intuitive, clean, and built to scale. Communication was smooth and deadlines were always met.",
      rating:5,
  },
  {
    name: "JULIA DOЕ",
    role: "Businesswoman",
    quote:
      "Working with Nexus Technologies felt like having an in-house tech partner.They helped us develop a subscription-based mobile app from scratch, including a backend dashboard. Revenue started coming in 2 weeks after launch",
      rating:4,
  },
  {
    name: "SARAH DOE",
    role: "Businesswoman",
    quote:
      "We brought Nexus on to rescue a half-built project and it was the best decision we made. He restructured the entire app and got us back on track for a successful launch. Reliable, strategic, and truly committed to quality",
      rating:5,
  },
  {
    name: "EMILY R.",
    role: "SaaS Founder",
    quote:
      "From concept to launch, Nexxus Technologies delivered exactly what we needed and more. The team understood our vision, guided us through the MVP phase, and helped us go to market in record time. We've already seen a spike in user retention.",
      rating:5,
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const scrollTo = (idx) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.offsetWidth / visibleCards;
    containerRef.current.scrollTo({
      left: cardWidth * idx,
      behavior: "smooth",
    });
    setIndex(idx);
  };

  const prev = () => scrollTo(Math.max(index - 1, 0));
  const next = () => scrollTo(Math.min(index + 1, maxIndex));

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">
          Trusted by businesses worldwide for delivering exceptional digital
          products.
        </p>

        <div className="carousel-wrapper">
          <div className="carousel" ref={containerRef}>
            {testimonials.map((t, i) => (
         <div
         className="card"
         key={i}
         style={{ "--visible-cards": visibleCards }}
       >
         <p className="quote">“{t.quote}”</p>
       
         {/* ⭐️ Star Ratings */}
         <div className="stars">
           {Array.from({ length: 5 }, (_, i) => (
             <span key={i} className={i < t.rating ? 'filled' : 'empty'}>
               ★
             </span>
           ))}
         </div>
       
         <p className="client-name">{t.name}</p>
         <p className="client-role">{t.role}</p>
       </div>
       
            ))}
          </div>

          {testimonials.length > visibleCards && (
            <div className="arrows">
              <button onClick={prev} disabled={index === 0}>
                ‹
              </button>
              <button onClick={next} disabled={index === maxIndex}>
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
