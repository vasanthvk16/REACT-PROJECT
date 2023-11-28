import React, { useState, useEffect } from 'react';

const Report = () => {
  const [financialData, setFinancialData] = useState([
    { month: 'January', income: 5000, expenses: 3000 },
    { month: 'February', income: 6000, expenses: 3500 },
    { month: 'March', income: 5500, expenses: 4000 },
  ]);

  const totalIncome = financialData.reduce((acc, data) => acc + data.income, 0);
  const totalExpenses = financialData.reduce((acc, data) => acc + data.expenses, 0);

  const netIncome = totalIncome - totalExpenses;

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Financial Reporting</h1>
      <div>
        <h2>Summary</h2>
        <p>Total Income: ${totalIncome}</p>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Net Income: ${netIncome}</p>
      </div>

      <div>
        <h2>Monthly Report</h2>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Income</th>
              <th>Expenses</th>
            </tr>
          </thead>
          <tbody>
            {financialData.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>${data.income}</td>
                <td>${data.expenses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
