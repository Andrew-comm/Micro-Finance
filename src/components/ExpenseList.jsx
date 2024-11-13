// src/components/ExpenseList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses, deleteExpense, clearExpenses, editExpense }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (index) => {
    editExpense(index);
    navigate('/'); // Redirect to the ExpenseForm route
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Expense List</h2>
      <div className="d-flex justify-content-between mb-3 action-bar">
        <input
          type="text"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control search-input"
        />
        <button className="btn btn-primary add-button" onClick={() => navigate('/')}>
          Add Expense
        </button>
        <button className="btn btn-danger clear-button" onClick={clearExpenses}>
          Clear All
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteExpense(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
