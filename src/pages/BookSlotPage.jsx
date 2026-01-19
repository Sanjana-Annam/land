import React, { useState } from "react";
import "../pages/bookingPages.css";

const BookSlotPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [mode, setMode] = useState("Call");

  const confirmBooking = async () => {
    const formData = JSON.parse(localStorage.getItem("leadData"));

    const finalData = { ...formData, date, time, mode };

    await fetch("http://localhost:5000/api/book-meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });

    window.location.href = "/thank-you";
  };

  return (
    <div className="booking-page-wrapper">

      <div className="booking-card">

        <h2>Select Your Preferred Slot</h2>
        <p>Choose a convenient time for our expert to connect with you</p>

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <select onChange={(e) => setTime(e.target.value)}>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
          <option>01:00 PM</option>
          <option>02:00 PM</option>
          <option>03:00 PM</option>
          <option>04:00 PM</option>
          <option>05:00 PM</option>
        </select>

        <select onChange={(e) => setMode(e.target.value)}>
          <option>Call</option>
          <option>Online Meeting</option>
        </select>

        <button className="primary-btn" onClick={confirmBooking}>
          Confirm Booking
        </button>

        <a href="/" className="secondary-link">
          ← Back to Home
        </a>

      </div>
    </div>
  );
};

export default BookSlotPage;
