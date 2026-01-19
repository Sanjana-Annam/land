import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import "./chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi! I’m JIPH Furniture Assistant 😊 Ask me anything about our products, pricing, delivery or services.",
      type: "bot",
    },
  ]);

  const handleUserInput = (e) => {
    e.preventDefault();

    const input = e.target.message.value;

    if (!input) return;

    setMessages((prev) => [
      ...prev,
      { text: input, type: "user" },
      getBotReply(input),
    ]);

    e.target.reset();
  };

  const getBotReply = (input) => {
    input = input.toLowerCase();

    // COMPANY INFO
    if (input.includes("who are you") || input.includes("about")) {
      return {
        text: "We are JIPH Furniture Pvt. Ltd., a trusted manufacturer of premium institutional furniture for schools, colleges, offices and hostels across India.",
        type: "bot",
      };
    }

    // SCHOOL FURNITURE
    if (input.includes("school")) {
      return {
        text: "We provide complete School Furniture solutions: student desks, chairs, teacher tables, smart classroom furniture and lab furniture. Would you like a quotation?",
        type: "bot",
      };
    }

    // HOSTEL
    if (input.includes("hostel")) {
      return {
        text: "Our Hostel Furniture range includes bunk beds, wardrobes, study tables and storage units designed for durability and safety.",
        type: "bot",
      };
    }

    // OFFICE
    if (input.includes("office")) {
      return {
        text: "We offer modern Office Furniture like workstations, executive tables, chairs, conference tables and reception desks.",
        type: "bot",
      };
    }

    // LIBRARY
    if (input.includes("library") || input.includes("lab")) {
      return {
        text: "JIPH Furniture provides Library racks, reading tables, lab workbenches and customized educational furniture.",
        type: "bot",
      };
    }

    // PRICE OR QUOTATION
    if (input.includes("price") || input.includes("cost") || input.includes("quotation")) {
      return {
        text: "Prices depend on quantity and customization. Please share your requirement or contact us at +91-740-465-0000 for an instant quote.",
        type: "bot",
      };
    }

    // DELIVERY
    if (input.includes("delivery") || input.includes("time")) {
      return {
        text: "Standard delivery time is 10–15 working days depending on order size and location.",
        type: "bot",
      };
    }

    // WARRANTY
    if (input.includes("warranty")) {
      return {
        text: "All JIPH Furniture products come with quality assurance and warranty support.",
        type: "bot",
      };
    }

    // LOCATION
    if (input.includes("location") || input.includes("address")) {
      return {
        text: "We are located at: Near Liberty Shoe Factory, GT Road, Gharaunda, Karnal, Haryana – 132114, India.",
        type: "bot",
      };
    }

    // CONTACT
    if (input.includes("contact") || input.includes("phone") || input.includes("call")) {
      return {
        text: "You can reach us at +91-740-465-0000 or +91-989-678-0087. Our team will be happy to help!",
        type: "bot",
      };
    }

    // INSTALLATION
    if (input.includes("install")) {
      return {
        text: "Yes! We provide professional on-site delivery and installation services across India.",
        type: "bot",
      };
    }

    // BULK ORDER
    if (input.includes("bulk") || input.includes("large order")) {
      return {
        text: "We specialize in bulk institutional orders. Please share your requirement for a customized quote.",
        type: "bot",
      };
    }

    // DEFAULT FALLBACK
    return {
      text: "I can help you with products, pricing, delivery, warranty and contact details of JIPH Furniture. Please ask a related question 😊",
      type: "bot",
    };
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            JIPH Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
          </div>

          <form className="chatbot-footer" onSubmit={handleUserInput}>
            <input
              type="text"
              name="message"
              placeholder="Ask about products, pricing, delivery..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
