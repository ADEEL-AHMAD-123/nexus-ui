import React, { useState } from "react";
import "./ServiceFAQs.scss";

const ServiceFAQs = ({ faqs }) => {
const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
};

return (
<section className="service-faqs">
<div className="container">
<h2 className="faq-heading">Frequently Asked Questions</h2>
<div className="faq-list">
{faqs.map((faq, index) => (

<div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)} > <div className="faq-question"> <span>{faq.question}</span> <span className="faq-icon"> {activeIndex === index ? "–" : "+"} </span> </div> <div className="faq-answer"> <p>{faq.answer}</p> </div> </div> ))}
</div>
</div>
</section>
);
};

export default ServiceFAQs;