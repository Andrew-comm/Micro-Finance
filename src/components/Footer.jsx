// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p>© 2024 Financial Organizer. All rights reserved.</p>
        <ul className="footer-links list-inline">
          <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
          <li className="list-inline-item"><a href="/preferences" className="text-white">Preferences</a></li>
          <li className="list-inline-item"><a href="/documentation" className="text-white">Documentation</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
