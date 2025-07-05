import React from 'react';
import { useParams } from 'react-router-dom';
import ConsultationSection from '../../components/sections/consultation section/ConsultationSection';
import { caseStudies } from '../../data/caseStudiesData';
import './CaseStudyDetails.scss';

const CaseStudyDetails = () => {
  const { caseId } = useParams();
  const cs = caseStudies.find((c) => c.id === caseId);

  if (!cs) {
    return (
      <div className="container">
        <h2>Case Study Not Found</h2>
      </div>
    );
  }

  return (
    <> 
    <div className="case-study-details-page">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${cs.image})` }}
      />

      <section className="case-content">
        <div className="container">
          <div className="heading-area">
            <h1 className="case-title">{cs.subtitle}</h1>
            <p className="case-subtitle">{cs.intro}</p>
          </div>

          <div className="paragraphs">
            {cs.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
    <ConsultationSection/>
    </>
  );
};

export default CaseStudyDetails;
