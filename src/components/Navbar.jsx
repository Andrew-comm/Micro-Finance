import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'primary'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Financial Organizer</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/expenses">Expenses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preferences">Preferences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentation">Documentation</Link>
            </li>
          </ul>
        </div>
        <div className="dark-mode-switch">
          <input
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="darkModeSwitch">🌙</label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
