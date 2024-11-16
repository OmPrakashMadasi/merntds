// AdminDashboard.js
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Admin from './admin'; // Component for Contact Form Submissions
import Adminadd from './adminadd'; // Component for Adding Jobs

const AdminDashboard = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Admin Dashboard</h1>

      {/* Navigation Links */}
      <div className="d-flex justify-content-center mb-4">
        <Link to="/jobs" className="btn btn-primary mx-2">Manage Jobs</Link>
        <Link to="/contact-forms" className="btn btn-secondary mx-2">Contact Form Submissions</Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/jobs" element={<Adminadd />} />
        <Route path="/contact-forms" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
