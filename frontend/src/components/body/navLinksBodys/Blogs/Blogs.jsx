import React, { useState } from "react";
import { technologies } from "../../services/services";
import "./Blog.css";  // Import the external CSS file

export default function Blogs() {
  const [showCards, setShowCards] = useState(false);

  const handleRevealCards = () => {
    setShowCards(true);
  };

  return (
    <div>
      {/* Partnership Section */}
      <div>
        <h1 className="partnership-containers"></h1>
      </div>

      <div className="container mt-5">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h2 className="text-center">We are Introducing Our Technologies</h2>
          </div>
        </div>

        {/* Initial "Click Here" Card */}
        {!showCards && (
          <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card text-center p-4">
                <h4>Click Here</h4>
                <p>Explore the diverse technologies we utilize to create innovative and impactful solutions.</p>
                <button
                  className="btn"
                  onClick={handleRevealCards}
                  style={{backgroundColor:'#3b999f'}}
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
          <div className="row mt-4 card-container">
            {/* Map through technologies array to render each card */}
            {technologies.map((tech, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    {/* Image Section */}
                    <img
                      src={tech.imageSrc}
                      alt={tech.title}
                      className="img-fluid"
                    />
                    {/* Title and Description */}
                    <h5>{tech.title}</h5>
                    <p>{tech.description}</p>
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
