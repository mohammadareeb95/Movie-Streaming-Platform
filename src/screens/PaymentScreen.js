import React, { useState } from 'react';
import "./PaymentScreen.css";
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';


function PaymentScreen() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing or validation here
    alert('Payment submitted');
    navigate("/");
    // Reset form fields
    setEmail('');
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="paymentScreen">
      <Nav />

      <div className='paymentScreen-body'>
        <h2>Payment Page</h2>
        <div className='paymentScreen-form'>
          <form onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              {/* <div className='paymentScreen-details'> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              {/* </div> */}
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                pattern="[0-9]{16}"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter card number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="card-holder">Cardholder Name:</label>
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder="Enter cardholder name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                name="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="Enter CVV"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;
