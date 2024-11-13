import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Categories from './components/Categories';
import Preferences from './components/Preferences';
import Documentation from './components/Documentation';
import './styles/App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(['Food', 'Transport', 'Bills']);
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [editingExpense, setEditingExpense] = useState(null); // Stores index of editing expense

  // Load data from localStorage on initial load
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || ['Food', 'Transport', 'Bills'];
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    const storedCurrency = localStorage.getItem('currency') || 'USD';

    setExpenses(storedExpenses);
    setCategories(storedCategories);
    setDarkMode(storedDarkMode);
    setCurrency(storedCurrency);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('currency', currency);
  }, [expenses, categories, darkMode, currency]);

  // Add or update an expense
  const addExpense = (expense) => {
    if (editingExpense !== null) {
      const updatedExpenses = expenses.map((exp, index) =>
        index === editingExpense ? expense : exp
      );
      setExpenses(updatedExpenses);
      setEditingExpense(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  // Delete an expense
  const deleteExpense = (index) => setExpenses(expenses.filter((_, i) => i !== index));

  // Clear all expenses
  const clearExpenses = () => setExpenses([]);

  // Add a new category
  const addCategory = (category) => setCategories([...categories, category]);

  // Set the index of the expense being edited
  const editExpense = (index) => setEditingExpense(index);

  return (
    <Router>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <ExpenseForm
                  addExpense={addExpense}
                  categories={categories}
                  expenseToEdit={editingExpense !== null ? expenses[editingExpense] : null}
                  darkMode={darkMode}
                />
              }
            />
            <Route
              path="/expenses"
              element={
                <ExpenseList
                  expenses={expenses}
                  deleteExpense={deleteExpense}
                  clearExpenses={clearExpenses}
                  editExpense={editExpense}
                  darkMode={darkMode}
                />
              }
            />
            <Route
              path="/categories"
              element={<Categories categories={categories} addCategory={addCategory} />}
            />
            <Route
              path="/preferences"
              element={
                <Preferences
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  currency={currency}
                  setCurrency={setCurrency}
                />
              }
            />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
