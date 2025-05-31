import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CodeThrive</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><a href="https://github.com/gonela0526" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
