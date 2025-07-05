import React from 'react';
import './BlogsSection.scss';
import pattern from '../../../assets/images/pattern.png';
import PrimaryButton from '../../common/PrimaryButton';
import { blogs } from '../../../data/blogsData';
import { Link } from 'react-router-dom';  

const BlogsSection = ({ limit = 3 }) => {
  const displayedBlogs = blogs.slice(0, limit);

  return (
    <section className="latest-insights-section">
      <img src={pattern} alt="Pattern" className="pattern" />
      <div className="container">
        <h2 className="heading">Latest Insights</h2>
        <p className="subheading">
          Stay updated with the latest trends and insights from our experts.
        </p>


        <div className="grid">
          {displayedBlogs.map((article) => (
            <div className="card" key={article.id}>
              <Link to={`/blogs/${article.id}`} className="card-link">
                <img src={article.image} alt={article.title} className="card-img" />
              </Link>
              <div className="card-body">
                <p className="category">{article.category}</p>
                <h3>{article.title}</h3>
                <p className="desc">{article.description}</p>

                <div className="author-info">
  <div>
    <p className="author-name">{article.author.name}</p>
    <p className="author-date">{article.author.date}</p>
  </div>
</div>


                <Link to={`/blogs/${article.id}`} className="view-more-btn">
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton
          to="/blogs"
          textColor="#000000"
          bgColor="#fff"
          hoverTextColor="#3534FF"
          hoverBgColor="#fff"
        >
          View All Blogs
        </PrimaryButton>
      </div>
    </section>
  );
};

export default BlogsSection;
