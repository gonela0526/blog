import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <header className="hero-section">
          <h1>Welcome to CodeThrive</h1>
          <p>Thrive in your backend journey with Java & Spring Boot mastery.</p>
          <div className="hero-buttons">
            <Link to="/blogs" className="btn primary">📚 Browse Blogs</Link>
          </div>
        </header>

        <section className="about-section">
          <h2>What is CodeThrive?</h2>
          <p>
            CodeThrive is your developer hub for hands-on Java and Spring Boot content.
            Learn by building, explore backend principle, and thrive in your software career.
          </p>
        </section>

        <section className="why-section">
          <h3>Why Choose CodeThrive?</h3>
          <ul>
            <li>✅ Beginner-friendly and expert-approved tutorials</li>
            <li>✅ Clean code and scalable architecture</li>
            <li>✅ Real-world projects and production-ready examples</li>
          </ul>
        </section>

        <section className="featured-section">
          <h4>🔥 Featured Blogs</h4>
          <div className="blog-card">
            <h5>Java 8 Features Explained with Examples</h5>
            <p>A deep dive into Java 8’s most important features, with clear explanations and code samples.</p>
            <Link to="/java8-features-explained-with-examples">Read More →</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
