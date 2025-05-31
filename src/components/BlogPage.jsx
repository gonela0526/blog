import React from 'react';
import './BlogPage.css';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <>
    <div className="sticky-navbar">
        <Navbar />
      </div>
    <div className="blog-container">
      <article className="blog-post">
        <h1>Mastering Spring Boot REST APIs</h1>
        <p className="meta">By John Doe · Published on May 24, 2025 · 7 min read</p>

        <div className="blog-content">
          <p>Welcome to CodeThrive! In this post, we dive into REST APIs using Spring Boot. You'll learn how to build robust APIs with practical code examples and best practices.</p>

          <h2>Getting Started</h2>
          <p>Here’s a quick overview of what you’ll need before starting...</p>

          <h2>Conclusion</h2>
          <ul>
            <li>✅ Learn how to set up endpoints with @RestController</li>
            <li>✅ Handle JSON requests/responses properly</li>
            <li>✅ Use DTOs and Services for clean structure</li>
          </ul>

          <p className="feedback">👋 Got questions or feedback? Leave a comment below — I read and reply to every one.</p>
        </div>
      </article>
    </div>
    <Footer />
    </>
  );
};

export default BlogPage;
