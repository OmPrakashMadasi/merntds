import React, { useState } from "react";
import "./Careersform.css";

const CareersForm = ({ selectedJob }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone_number", formData.phoneNumber);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("job_id", selectedJob); // Assuming serialno is the ID you want to send

    try {
      const response = await fetch("http://127.0.0.1:8000/applications/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");
      window.location.reload(); // Reloads the page after submission
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="contactContainer1">
      <div className="formSection1">
        <h2>Reach Out to Our Team</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup1">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup1">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup1">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter 10 digits"
              value={formData.phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              maxLength="10"
              required
            />
          </div>
          <div className="formGroup1">
            <input
              name="resume"
              type="file"
              placeholder="Upload Resume"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submitButton1" data-bs-dismiss="modal">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareersForm;
