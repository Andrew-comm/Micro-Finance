// Categories.jsx
import React, { useState } from 'react';
import '../styles/Categories.css';

function Categories({ categories, addCategory, updateCategory, deleteCategory }) {
  const [newCategory, setNewCategory] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCategory, setEditingCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  const handleEditCategory = (index) => {
    setEditingIndex(index);
    setEditingCategory(categories[index]);
  };

  const handleUpdateCategory = () => {
    if (editingCategory.trim()) {
      updateCategory(editingIndex, editingCategory);
      setEditingIndex(null);
      setEditingCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    deleteCategory(index);
  };

  return (
    <div className="categories-container container mt-4">
      <h2 className="categories-title">Manage Categories</h2>
      
      <div className="input-group mb-3">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category"
          className="form-control"
        />
        <button onClick={handleAddCategory} className="btn btn-primary">Add</button>
      </div>

      <ul className="category-list mt-3">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {editingIndex === index ? (
              <div className="input-group">
                <input
                  type="text"
                  value={editingCategory}
                  onChange={(e) => setEditingCategory(e.target.value)}
                  className="form-control"
                />
                <button onClick={handleUpdateCategory} className="btn btn-success">Save</button>
                <button onClick={() => setEditingIndex(null)} className="btn btn-secondary">Cancel</button>
              </div>
            ) : (
              <div className="category-text">
                {category}
                <div className="action-buttons">
                  <button onClick={() => handleEditCategory(index)} className="btn btn-outline-info btn-sm">Edit</button>
                  <button onClick={() => handleDeleteCategory(index)} className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
