import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LandingPage.css';

const blogs = [
  {
    slug: '/java8-features-explained-with-examples',
    title: 'Java 8 Features Explained with Examples',
    description: 'A deep dive into Java 8’s most important features, with clear explanations and code samples.',
  },
  {
    slug: '/streams-vs-loops-in-java:performance-and-readability',
    title: 'Streams vs Loops in Java: Performance and Readability',
    description: 'A comprehensive comparison of Java Streams and traditional loops focusing on performance, readability, and best use cases with real-world examples.',
  },
//   {
//     slug: '/Sampleblog',
//     title: 'Mastering Spring Boot REST APIs',
//     description: 'Learn how to build robust REST APIs with Spring Boot, including best practices and code examples.',
//   },
  
  // Add more blog objects here as you create more posts
];

const AllBlogs = () => (
  <>
    <Navbar />
    <div className="landing-container">
      <header className="hero-section">
        <h1>All Blogs</h1>
        <p>Browse all CodeThrive blog posts on Java, Spring Boot, and backend mastery.</p>
      </header>
      <section>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {blogs.map((blog) => (
            <li key={blog.slug} style={{ marginBottom: '32px' }}>
              <div className="blog-card">
                <h2 style={{ marginBottom: '8px' }}>{blog.title}</h2>
                <p style={{ marginBottom: '12px' }}>{blog.description}</p>
                <Link to={blog.slug} className="btn">Read More →</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <Footer />
  </>
);

export default AllBlogs;