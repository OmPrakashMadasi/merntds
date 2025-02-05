import React, { useState } from "react";
import "./ContactUsform.css"; // Import external CSS file
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
        await axios.post(`${process.env.REACT_APP_API_URL}/api/contactus`, formData);

        setModalMessage("Message sent successfully!");
        setIsModalVisible(true);
        resetForm();
      } catch (error) {
        console.error("Error submitting the form:", error);
        setModalMessage("There was an issue submitting the form. Please try again.");
        setIsModalVisible(true);
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
    setIsFormValid(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
    if (isFormVisible) resetForm();
  };

  const closeModal = () => {
    setIsModalVisible(false);
    resetForm();
  };

  return (
    <div>
      <button onClick={toggleFormVisibility} className="toggleButton">
        <span className="toggleButtonIcon">✉️</span>
      </button>

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

      {isFormVisible && (
        <div className="formSection" role="dialog" aria-modal="true">
          <h2 className="formTitle">Write us</h2>
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
            >
              SEND MESSAGE
            </button>
          </form>
          <button type="button" className="closeButton" onClick={toggleFormVisibility} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
