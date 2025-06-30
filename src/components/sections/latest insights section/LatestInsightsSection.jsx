import React from 'react';
import './LatestInsightsSection.scss';
import pattern from '../../../assets/images/pattern.png';
import blog1 from '../../../assets/images/blog1.webp';
import blog2 from '../../../assets/images/blog2.webp';
import blog3 from '../../../assets/images/blog3.webp';
import authorAvatar from '../../../assets/images/client2.webp'; 
import PrimaryButton from '../../common/PrimaryButton';

const articles = [
  {
    image: blog1,
    title: 'The Future of Digital Health',
    description: 'Exploring AI and data in revolutionizing global health platforms.',
    category: 'Healthcare',
    author: {
      name: 'Jane Doe',
      avatar: authorAvatar,
      date: 'June 25, 2025',
    }
  },
  {
    image: blog2,
    title: 'FinTech Disruption in 2025',
    description: 'How new technologies are reshaping financial ecosystems.',
    category: 'Finance',
    author: {
      name: 'John Smith',
      avatar: authorAvatar,
      date: 'June 20, 2025',
    }
  },
  {
    image: blog3,
    title: 'Web3 & the Decentralized Web',
    description: 'The opportunities and challenges of decentralization.',
    category: 'Web3',
    author: {
      name: 'Alice Carter',
      avatar: authorAvatar,
      date: 'June 15, 2025',
    }
  },
];

const LatestInsightsSection = () => (
  <section className="latest-insights-section">
    <img src={pattern} alt="Pattern" className="pattern" />
    <div className="container">
      <h2 className="heading">Latest Insights</h2>
      <p className="subheading">Stay updated with the latest trends and insights from our experts.</p>

      <div className="grid">
        {articles.map((article, idx) => (
          <div className="card" key={idx}>
            <img src={article.image} alt={article.title} className="card-img" />
            <div className="card-body">
              <p className="category">{article.category}</p>
              <h3>{article.title}</h3>
              <p className="desc">{article.description}</p>

              <div className="author-info">
                <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
                <div>
                  <p className="author-name">{article.author.name}</p>
                  <p className="author-date">{article.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PrimaryButton
            to="/pricing"
            textColor="#000000"
            bgColor="#fff"
            hoverTextColor="#3534FF"
            hoverBgColor="#fff"
          >
            View More Blogs
          </PrimaryButton>
    </div>
  </section>
);

export default LatestInsightsSection;
