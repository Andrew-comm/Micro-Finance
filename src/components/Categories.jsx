// Categories.jsx
import React, { useState } from 'react';

function Categories({ categories, addCategory }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <div className="container mt-4">
      <h2>Manage Categories</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New category"
        className="form-control mb-3"
      />
      <button onClick={handleAddCategory} className="btn btn-secondary">Add Category</button>
      <ul className="mt-3">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
