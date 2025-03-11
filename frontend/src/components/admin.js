import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import dotenv from "dotenv";


// Load environment variables
//dotenv.config();

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [contacts, setContacts] = useState([]);

  // Handle login input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (
      email === process.env.REACT_APP_ADMIN_EMAIL &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect email or password");
    }
  };

  // Fetch contact data when component mounts and user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      async function fetchContacts() {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contactus`, {
            headers: {
              'x-api-key': process.env.REACT_APP_API_KEY,
            },

        });
          setContacts(response.data);
        } catch (error) {
          console.error("Error fetching contact data:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
          });
          alert("Failed to fetch contacts. Check console for details.");
        }
      }
      fetchContacts();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mb-4">Admin Login :-</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Contact Form Submissions</h2>
      {contacts.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobile_number}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted">No contact form submissions found.</p>
      )}
    </div>
  );
}

export default Admin;
