// src/components/ExpenseForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ExpenseForm({ addExpense, categories, expenseToEdit }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Prefill the form when editing an expense
  useEffect(() => {
    if (expenseToEdit) {
      setName(expenseToEdit.name);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add or update the expense
    addExpense({ name, amount, category });
    // Clear the form fields
    setName('');
    setAmount('');
    setCategory('');
    // Redirect to the expense list page
    navigate('/expenses');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Expense Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter expense name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        {expenseToEdit ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
}

export default ExpenseForm;
