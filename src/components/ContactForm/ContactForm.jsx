import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    category: "",
    quantity: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store data for next page
    localStorage.setItem("leadData", JSON.stringify(formData));

    // Redirect to slot selection page
    window.location.href = "/book-slot";
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <h3>Get Free Consultation</h3>

      <input
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        required
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
      />

      {/* ===== NEW DROPDOWN FOR PRODUCT CATEGORY ===== */}

      <select
        name="category"
        required
        onChange={handleChange}
      >
        <option value="">Select Product Category</option>
        <option value="School Furniture">School Furniture</option>
        <option value="Office Furniture">Office Furniture</option>
        <option value="Hostel Furniture">Hostel Furniture</option>
        <option value="Hospital Furniture">Hospital Furniture</option>
        <option value="Laboratory Furniture">Laboratory Furniture</option>
        <option value="Computer Lab Furniture">Computer Lab Furniture</option>
        <option value="Custom Requirement">Custom Requirement</option>
      </select>

      <input
        name="quantity"
        placeholder="Quantity"
        onChange={handleChange}
      />

      <input
        name="budget"
        placeholder="Budget (Approx)"
        onChange={handleChange}
      />

      <button type="submit">
        Next – Select Slot
      </button>

    </form>
  );
};

export default ContactForm;
