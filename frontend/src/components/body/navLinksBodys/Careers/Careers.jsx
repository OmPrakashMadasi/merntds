import React, { useEffect, useState } from "react";
import styles from "./Careers.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CareersForm from "../../../careersforms/Careersform";
import { jobs } from "../../services/services";
const Careers = () => {
  const [jobs, setJobs] = useState([]); // State to store job data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isVisible, setIsVisible] = useState(false); // Visibility for animation
  const [selectedJob, setSelectedJob] = useState(null); // Selected job for modal
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Delayed visibility effect for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch jobs data from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/jobs`);
        if (!response.ok) throw new Error("Failed to fetch jobs");

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Show apply form modal with the selected job details
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Close modal and reset selected job
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div>
      <header className={styles.header}>
        <marquee className={styles.marquee}>
          Come let's build Something of great Value
        </marquee>
      </header>

      <div className={styles.CareeresBg}>
        <section className="text-center">
          <h2 className={styles.sectionTitle}>CAREERS</h2>
        </section>

        <div className="container">
          {/* Display job listings */}
          {jobs.map((job) => (
            <div key={job._id} className="d-flex justify-content-center align-items-center my-4">
              <div
                className={`card p-3 ${styles.animatedCard} ${isVisible ? styles.visible : ""}`}
                style={{ width: "100%", maxWidth: "800px" }}
              >
                <h4 className="mb-2" style={{ fontFamily: "system-ui" }}>
                  {job.title}
                </h4>
                <div className="d-flex flex-wrap mb-2" style={{ gap: "20px" }}>
                  <p className={styles.tag}>{job.experience}</p>
                  <p className={styles.tag}>{job.location}</p>
                  <p className={styles.tag}>{job.availability}</p>
                </div>
                <hr />
                <h4 className="mb-3" style={{ fontFamily: "system-ui" }}>
                  Minimum Qualification
                </h4>
                <ul style={{ fontFamily: "system-ui" }}>
                  <li><b>{job.qualification}</b></li>
                  <li>{job.description}</li>
                </ul>
                <div className="d-flex justify-content-between">
                {/*  <button
                    className={`btn btn-sm ${styles.applyButton}`}
                    style={{ fontFamily: 'system-ui' }}
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply Now
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apply Modal */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="applyModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document" style={{ marginTop: "6%" }}>
              <div className="modal-content">
                <CareersForm job={selectedJob} onClose={handleModalClose} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Customer Reviews Section */}
      <div className="container text-center my-4">
        <h2 className="mb-4" style={{ color: '#3b999f' }}>
          What People are Saying About Us!
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 mb-4">
            <div className="review-card p-3 border rounded">
              <h5 className="review-author" style={{ color: '#3b999f' }}>Priyanshika Reddy</h5>
              <p className="review-text" style={{ color: 'black' }}>
                "Great service and support! Highly recommended."
              </p>
              <div className="stars mb-2" style={{ color: "#f5b042" }}>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
              </div>
              <span className="text-muted">Posted on Google</span>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="review-card p-3 border rounded">
              <h5 className="review-author" style={{ color: '#3b999f' }}>Maheshwari Kamal</h5>
              <p className="review-text" style={{ color: 'black' }}>
                "Excellent customer care and timely response."
              </p>
              <div className="stars mb-2" style={{ color: '#f5b042' }}>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="far fa-star"></i>
              </div>
              <span className="text-muted">Posted on Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
