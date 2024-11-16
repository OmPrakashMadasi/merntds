// import React, { useEffect, useState } from "react";
// import styles from "./Careers.module.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CareersForm from "../../../careersforms/Careersform";

// export const Careers = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Fetch jobs
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");

//         const data = await response.json();
//         setJobs(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleApplyClick = (job) => {
//     setSelectedJob(job);
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setSelectedJob(null);
//   };

//   if (loading)
//     return (
//       <div className="text-center my-5">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger text-center my-5" role="alert">
//         {error}
//       </div>
//     );

//   return (
//     <div>
//       <header className={styles.header}>
//         <marquee className={styles.marquee}>
//           Come let's build Something of great Value
//         </marquee>
//       </header>

//       <div className={styles.CareeresBg}>
//         <section className="text-center">
//           <h2 className={styles.sectionTitle}>CAREERS</h2>
//         </section>

//         <div className="container my-5">
//           <div className="row">
//             {jobs.map((job) => (
//               <div key={job._id} className="col-md-6 col-lg-4 mb-4">
//                 <div
//                   className={`card p-3 shadow-sm h-100 ${styles.animatedCard} ${
//                     isVisible ? styles.visible : ""
//                   }`}
//                 >
//                   <h5 className="mb-2 job-title" style={{ fontFamily: "system-ui" }}>
//                     {job.title}
//                   </h5>
//                   <p className="job-detail">
//                     <strong>Location:</strong> {job.location}
//                   </p>
//                   <p className="job-detail">
//                     <strong>Availability:</strong> {job.availability}
//                   </p>
//                   <p className="job-detail">
//                     <strong>Experience:</strong> {job.experience}
//                   </p>
//                   <p className="job-detail">
//                     <strong>Qualification:</strong> {job.qualification}
//                   </p>
//                   <p className="job-detail">
//                     <strong>Description:</strong> {job.description}
//                   </p>
//                   <p className="text-muted">
//                     <small>Posted on: {new Date(job.createdAt).toLocaleDateString()}</small>
//                   </p>
//                   <div className="d-flex justify-content-end">
//                     <button
//                       className={`btn btn-sm ${styles.applyButton}`}
//                       onClick={() => handleApplyClick(job)}
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Single Modal for Applying */}
//         {showModal && (
//           <div
//             className="modal fade show"
//             style={{ display: "block" }}
//             tabIndex="-1"
//             role="dialog"
//             aria-labelledby="applyModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog" role="document" style={{ marginTop: "6%" }}>
//               <div className="modal-content">
//                 <CareersForm job={selectedJob} onClose={handleModalClose} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="container text-center my-4">
//         <h2 className="mb-4" style={{ color: '#3b999f' }}>
//           What People are Saying About Us!
//         </h2>
//         <div className="row justify-content-center">
//           {/* Sample reviews */}
//           <div className="col-12 col-md-6 mb-4">
//             <div className="review-card p-3 border rounded">
//               <h5 className="review-author" style={{ color: '#3b999f' }}>Priyanshika Reddy</h5>
//               <p className="review-text" style={{ color: 'black' }}>
//                 "Great service and support! Highly recommended."
//               </p>
//               <div className="stars mb-2" style={{ color: "#f5b042" }}>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//               </div>
//               <span className="text-muted">Posted on Google</span>
//             </div>
//           </div>

//           <div className="col-12 col-md-6 mb-4">
//             <div className="review-card p-3 border rounded">
//               <h5 className="review-author" style={{ color: '#3b999f' }}>Maheshwari Kamal</h5>
//               <p className="review-text" style={{ color: 'black' }}>
//                 "Excellent customer care and timely response."
//               </p>
//               <div className="stars mb-2" style={{ color: '#f5b042' }}>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="fas fa-star checked"></i>
//                 <i className="far fa-star"></i>
//               </div>
//               <span className="text-muted">Posted on Google</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careers;
