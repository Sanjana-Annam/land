import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/bookingpages.css";

// Correct import matching the export
import { sendEmails } from "../utils/emailService";

const BookSlotPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [mode, setMode] = useState("Call");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const confirmBooking = async () => {
    try {
      setLoading(true);

      const stored = localStorage.getItem("leadData");

      if (!stored) {
        alert("Session expired. Please fill the form again.");
        navigate("/");
        return;
      }

      const formData = JSON.parse(stored);

      const finalData = {
        ...formData,
        date,
        time,
        mode,
      };

      console.log("Sending to API:", finalData);

      // Call backend (Google Sheet + WhatsApp only)
      try {
        await fetch(
          "https://landbackend-q5xj.onrender.com/api/book-meeting",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
          }
        );
      } catch (apiError) {
        console.log("API call failed but continuing:", apiError);
      }

      // Trigger emails from frontend (do NOT await)
      try {
        console.log("Triggering EmailJS...");
        sendEmails(finalData);
      } catch (emailError) {
        console.log("Email sending error:", emailError);
      }

      // Immediately redirect user
      navigate("/thank-you");

    } catch (error) {
      console.log("Booking error:", error);
      navigate("/thank-you");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page-wrapper">
      <div className="booking-card">

        <h2>Select Your Preferred Slot</h2>
        <p>Choose a convenient time for our expert to connect with you</p>

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          required
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

        <button
          className="primary-btn"
          onClick={confirmBooking}
          disabled={!date || loading}
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

        <a href="/" className="secondary-link">
          ← Back to Home
        </a>

      </div>
    </div>
  );
};

export default BookSlotPage;
