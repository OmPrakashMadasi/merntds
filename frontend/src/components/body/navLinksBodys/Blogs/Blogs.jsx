import React, { useState } from "react";
import { technologies } from "../../services/services";
import "./Blog.css";


export default function Blogs() {
  const [showCards, setShowCards] = useState(false);

  const handleRevealCards = () => {
    setShowCards(true);
  };


  return (
    <div>
      <div>
        <h1 className="partnership-containers"></h1>
      </div>

      <div className="container mt-5">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h2 className="text-center" style={{ color: "#333", fontWeight: "bold" }}>
              We are Introducing Our Technologies
            </h2>
          </div>
        </div>

        {/* Initial "Click Here" Card */}
        {!showCards && (
          <div className="row mt-4 ">
            <div className="col-md-3"></div>
            <div className="col-md-6 border">
              <div className="card text-center p-4" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <h4 style={{ color: '#3b999f', fontFamily: 'system-ui' }}>Click Here</h4>
                <p style={{ color: 'black', fontFamily: 'system-ui' }}>Explore the diverse technologies we utilize to create innovative and impactful solutions.</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#3b999f", border: "none" }}
                  onClick={handleRevealCards}
                >
                  Click to Reveal Cards
                </button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        )}

        {/* All Cards will be shown once the button is clicked */}
        {showCards && (
         <div className="row mt-4 overflow-auto">
         {/* Map through technologies array to render each card */}
         {technologies.map((tech, index) => (
           <div className="col-md-6 mb-4" key={index}>
             <div
               className="card h-100 text-center"
               style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.5s ease" }}
             >
               <div className="card-body">
                 {/* Image Section */}
                 <img
                   src={tech.imageSrc}
                   alt={tech.title}
                   className="img-fluid"
                   style={{
                     width: "70%",
                     height: "240px",
                     objectFit: "cover",
                     marginBottom: "20px",
                   }}
                 />
                 {/* Title and Description */}
                 <h5 style={{ fontSize: "24px", fontFamily: "system-ui", color: '#3b999f', textDecoration: 'underline' }}>{tech.title}</h5>
                 <p style={{ fontFamily: "system-ui", color: "#666", marginTop: "10px", color: 'black' }}>
                   {tech.description}
                 </p>
               </div>
             </div>
           </div>
         ))}
       </div>
       
        )}
      </div>
    </div>
  );
}
