import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Adminadd() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [jobData, setJobData] = useState({
        title: "",
        location: "",
        availability: "",
        experience: "",
        qualification: "",
        description: ""
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/addjob`, jobData);
            alert("Job added successfully!");
            setJobData({
                title: "",
                location: "",
                availability: "",
                experience: "",
                qualification: "",
                description: ""
            });
        } catch (error) {
            console.error("There was an error adding the job!", error);
        }
    };

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
        <div className="container mt-5">
            <div className="card p-4 shadow-lg">
                <h3 className="text-center mb-4">Add Job Posting</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Job Title"
                            value={jobData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Location"
                            value={jobData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="availability" className="form-label">Availability</label>
                        <input
                            type="text"
                            name="availability"
                            className="form-control"
                            placeholder="Availability"
                            value={jobData.availability}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="experience" className="form-label">Experience</label>
                        <input
                            type="text"
                            name="experience"
                            className="form-control"
                            placeholder="Experience"
                            value={jobData.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="qualification" className="form-label">Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            className="form-control"
                            placeholder="Qualification"
                            value={jobData.qualification}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Job Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            placeholder="Job Description"
                            value={jobData.description}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Add Job</button>
                </form>
            </div>
        </div>
    );
}

export default Adminadd;
