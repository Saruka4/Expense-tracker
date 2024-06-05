import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseInput, setExpenseInput] = useState({
    description: '',
    amount: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpenseInput({
      ...expenseInput,
      [name]: value
    });
  };

  const handleAddExpense = () => {
    if (expenseInput.description && expenseInput.amount) {
      setExpenses([...expenses, { ...expenseInput, amount: parseFloat(expenseInput.amount) }]);
      setExpenseInput({ description: '', amount: '' });
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={expenseInput.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expenseInput.amount}
        onChange={handleChange}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
