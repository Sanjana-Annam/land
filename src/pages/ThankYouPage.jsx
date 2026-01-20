import React from "react";
import "../pages/bookingpages.css";

const ThankYouPage = () => {
  return (
    <div className="booking-page-wrapper">

      <div className="booking-card">

        <div className="success-icon">✅</div>

        <h2>Booking Confirmed!</h2>

        <p>
          Thank you for your interest in Jiph Furniture.  
          Your slot has been successfully booked.
        </p>

        <p>
          You will receive confirmation details on  
          <strong> Email.</strong>
        </p>

        <a href="/" className="primary-btn">
          Back to Home
        </a>

      </div>

    </div>
  );
};

export default ThankYouPage;
