import React, { useState } from "react";
import "./ContactUsform.css"; // Ensure this file exists for styling
import { ArrangeVerticalCircle } from 'iconsax-react';
import axios from 'axios';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true); // Start with the form visible
  const [modalMessage, setModalMessage] = useState(""); // Message to show in the modal
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility

  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    return (
      data.name.trim() &&
      emailRegex.test(data.email) &&
      phoneRegex.test(data.mobile_number) &&
      data.message.trim()
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setIsFormValid(validateForm(updatedData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        // Send form data to backend API
        await axios.post(`${process.env.REACT_APP_API_URL}/api/contactus`, formData);

        // Set success message and show modal
        setModalMessage("Message sent successfully!");
        setIsModalVisible(true);
  
        // Reset the form after submission
        resetForm();
      } catch (error) {
        console.error("There was an error sending the message:", error);
        setModalMessage("There was an issue submitting the form. Please try again.");
        setIsModalVisible(true); // Show modal on error
      }
    }
  };
  
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile_number: "",
      message: "",
    });
    setIsFormValid(false); // Disable the submit button until the form is valid
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
    if (isFormVisible) {
      resetForm(); // Reset form when closing
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Close the modal and reset form
    resetForm(); // Refresh the form after closing the modal
  };

  return (
    <div>
      {/* Button to toggle form visibility */}
      <button
        onClick={toggleFormVisibility}
        className="toggleButton"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3B999F',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span style={{ color: '#fff', fontSize: '25px' }}>✉️</span>
      </button>

      {/* Full-screen Modal for success/error messages */}
      {isModalVisible && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>{modalMessage}</h2>
            <button onClick={closeModal} className="modalCloseButton">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {isFormVisible && (
        <div className="formSection shadow" role="dialog" aria-modal="true">
          <h2 style={{ fontFamily: "Algerian, sans-serif" }}>Write us</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="inputFields"
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="inputFields"
              />
            </div>
            <div className="formGroup">
              <input
                type="text"
                name="mobile_number"
                placeholder="Phone Number"
                maxLength={10}
                value={formData.mobile_number}
                onChange={handleChange}
                required
                className="inputFields"
              />
            </div>
            <div className="formGroup">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="inputFields"
              />
            </div>
            <button
              type="submit"
              className={`submitButton ${isFormValid ? "enabled" : "disabled"}`}
              disabled={!isFormValid}
              style={{ cursor: "pointer" }}
            >
              SEND MESSAGE
            </button>
          </form>
          <button
            type="button"
            className="closeButton"
            onClick={toggleFormVisibility}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
