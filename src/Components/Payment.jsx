import React, { useState } from 'react';

const Payment = () => {
  // State for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    amount: 0,
  });

  // Function to handle form submission and simulate payment
  const processPayment = (e) => {
    e.preventDefault();
    // Simulate payment processing (you would typically integrate with a payment gateway here)
    if (paymentDetails.cardNumber && paymentDetails.expirationDate && paymentDetails.cvv && paymentDetails.amount > 0) {
      alert(`Payment of $${paymentDetails.amount} processed successfully!`);
      // Reset payment details after successful payment (in a real scenario, you would handle this differently)
      setPaymentDetails({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        amount: 0,
      });
    } else {
      alert('Please fill in all payment details correctly.');
    }
  };

  return (
    <div>
      <h1>Payment Processing</h1>
      <form onSubmit={processPayment}>
        <label>
          Card Number:
          <input
            type="text"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            placeholder="MM/YY"
            value={paymentDetails.expirationDate}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value })}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={paymentDetails.cvv}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={paymentDetails.amount}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: parseFloat(e.target.value) })}
          />
        </label>
        <button type="submit">Process Payment</button>
      </form>
    </div>
  );
};

export default Payment;
