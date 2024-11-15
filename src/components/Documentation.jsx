// Documentation.jsx
import React from 'react';
import '../styles/Documentation.css';

function Documentation() {
  return (
    <div className="documentation container mt-4">
      <h2 className="doc-title">Financial Organizer Documentation</h2>
      <p className="doc-welcome">Welcome to the Financial Organizer! Here’s how to use the application to organize and track your finances:</p>
      
      <div className="doc-section">
        <h3>📊 Expenses</h3>
        <p>Add, view, and categorize your expenses for better tracking:</p>
        <ul>
          <li>Navigate to the <strong>Expenses</strong> page to add a new expense.</li>
          <li>Fill in details like <em>amount</em>, <em>name</em>, and <em>category</em> to track expenses accurately.</li>
          <li>Filter expenses </li>
        </ul>
      </div>

      <div className="doc-section">
        <h3>🔍 Categories</h3>
        <p>Manage your expense categories for easier organization:</p>
        <ul>
          <li>Navigate to the <strong>Categories</strong> page to view all categories.</li>
          <li>Add, edit, or remove categories to fit your specific needs.</li>
        </ul>
      </div>

      <div className="doc-section">
        <h3>⚙️ Preferences</h3>
        <p>Customize your user experience:</p>
        <ul>
          <li>Change your <strong>currency</strong> preference to match your region.</li>
          <li>Switch between <strong>light and dark mode</strong> for a personalized theme.</li>
        </ul>
      </div>
      
      <p className="doc-footer">Thank you for using Financial Organizer! Manage your finances easily and efficiently.</p>
    </div>
  );
}

export default Documentation;
