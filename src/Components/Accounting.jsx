import React, { useState } from 'react';

const Accounting = () => {
  // Initial account balance
  const initialBalance = 0;

  // State for managing transactions
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: 0,
    type: 'expense',
  });

  // Function to handle form submission and add a new transaction
  const addTransaction = (e) => {
    e.preventDefault();
    if (newTransaction.description && newTransaction.amount !== 0) {
      setTransactions([...transactions, newTransaction]);
      setNewTransaction({
        description: '',
        amount: 0,
        type: 'expense',
      });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  // Function to calculate account balance
  const calculateBalance = () => {
    return transactions.reduce((acc, curr) => {
      if (curr.type === 'income') {
        return acc + curr.amount;
      } else {
        return acc - curr.amount;
      }
    }, initialBalance);
  };

  return (
    <div>
      <h1>Accounting Application</h1>
      <form onSubmit={addTransaction}>
        <label>
          Description:
          <input
            type="text"
            value={newTransaction.description}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, description: e.target.value })
            }
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })
            }
          />
        </label>
        <label>
          Type:
          <select
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <button type="submit">Add Transaction</button>
      </form>

      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Account Balance: {calculateBalance()}</h2>
    </div>
  );
};

export default Accounting;
