import React, { useState } from 'react';

const Invoicing = () => {
  // State for storing invoice data
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    invoiceNumber: '',
    clientName: '',
    amount: 0,
  });

  // Function to handle form submission and add a new invoice
  const addInvoice = (e) => {
    e.preventDefault();
    if (newInvoice.invoiceNumber && newInvoice.clientName && newInvoice.amount > 0) {
      setInvoices([...invoices, newInvoice]);
      setNewInvoice({
        invoiceNumber: '',
        clientName: '',
        amount: 0,
      });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div>
      <h1>Invoicing</h1>
      <form onSubmit={addInvoice}>
        <label>
          Invoice Number:
          <input
            type="text"
            value={newInvoice.invoiceNumber}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, invoiceNumber: e.target.value })
            }
          />
        </label>
        <label>
          Client Name:
          <input
            type="text"
            value={newInvoice.clientName}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, clientName: e.target.value })
            }
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newInvoice.amount}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, amount: parseFloat(e.target.value) })
            }
          />
        </label>
        <button type="submit">Add Invoice</button>
      </form>

      <h2>Existing Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Client Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.clientName}</td>
              <td>{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoicing;
