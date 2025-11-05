import React, { useState } from "react";
import axios from "axios";
import './portfolio.css';

const Contact = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const clearErrors = () => {
    setErrors({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrors();

    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const companyInput = document.querySelector(".company");
    const messageInput = document.querySelector(".message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();
    const message = messageInput.value.trim();

    const newErrors = {};

    if (name === "") {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name must not contain special characters or numbers";
    }

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (message === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const payload = {
          name: name,
          email: email,
          company: company,
          message: message
        };

        await axios.post('http://localhost:8081/api/portfolio/contact/send', payload, {
          headers: {
            'X-API-KEY': '123456'
          }
        });

        await axios.post('http://localhost:8081/api/portfolio/create', payload, {
          headers: {
            'X-API-KEY': '123456'
          }
        });

        alert("Message sent and data saved successfully!");

        nameInput.value = '';
        emailInput.value = '';
        companyInput.value = '';
        messageInput.value = '';

      } catch (error) {
        console.error("Failed to send message or save data:", error);
        alert("Failed to process request. Please try again.");
      }
    }
  };

  return (
    <div className="contact">
      <div className="contitle">
        <h1>Contact</h1>
        <hr />
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <input type="text" className="name" placeholder="Name" />
        {errors.name && <p className="error">{errors.name}</p>}

        <input type="email" className="email" placeholder="Email" />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="text" className="company" placeholder="Company" />

        <textarea className="message" placeholder="Message" rows="4" />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
