import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../../data/blogsData';
import './BlogDetails.scss';
import ConsultationSection from '../../components/sections/consultation section/ConsultationSection'

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="container">
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  return (
    <>
    <div className="blog-details-page">
      {/* Hero Image */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${blog.image})` }}
      />

      {/* Content */}
      <section className="blog-content">
        <div className="container">
          <div className="heading-area">
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-subtitle">{blog.description}</p>
          </div>

          <div className="author-meta">
            <div>
              <p className="author-name">{blog.author.name}</p>
              <p className="author-date">{blog.author.date}</p>
            </div>
          </div>

          <div className="paragraphs">
            {blog.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
    <ConsultationSection/>
    </>
  );
};

export default BlogDetails;
