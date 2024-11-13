// Preferences.jsx
import React from 'react';

function Preferences({ darkMode, setDarkMode, currency, setCurrency }) {
  return (
    <div className="container mt-4">
      <h2>Preferences</h2>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="darkModeSwitch" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <label className="form-check-label" htmlFor="darkModeSwitch">Enable Dark Mode</label>
      </div>
      <div className="mt-3">
        <label>Currency:</label>
        <select className="form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
  );
}

export default Preferences;
