import React, { useState } from 'react';

const Expenses = () => {
  
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: 0,
  });

 
  const addExpense = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount !== 0) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({
        description: '',
        amount: 0,
      });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div>
      <h1>Expenses Page</h1>
      <form onSubmit={addExpense}>
        <label>
          Description:
          <input
            type="text"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })
            }
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
