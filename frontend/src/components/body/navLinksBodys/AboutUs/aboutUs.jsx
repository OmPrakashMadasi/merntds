import React from "react";
import "./aboutUs.css";
import HappyClients from "../../testimonilas/HappyClintsCountingWidget";
import { technologies1 } from "../../services/services";
import TeamCards from "../Creative/TeamCards";
import { Link } from "react-router-dom";

export default function AboutUsScreen() {
  const text = "Our Partnerships";
  return (
    <div>
      <div className="partnership-container">
      </div>

      <div style={{ marginTop: 20 }}>
        <h5 style={{ textAlign: 'center', marginLeft: '15%', width: '70%', fontFamily: 'system-ui', fontSize: 40 }}>Trishoka Digital Services Crafts <b style={{ color: '#257e81' }}>The Best Digital Marketing Strategies</b> To Elevate Your Brand's Online Presence.</h5>
        <div style={{ textAlign: 'center', marginLeft: '20%', width: '55%', fontFamily: 'system-ui', marginTop: 20 }}>
          <span>"Our team blends creativity, strategic insight, and advanced technology. We aim to deliver results that help your business stand out."</span>
        </div>
      </div>

      <div>
        <div className="container" style={{ paddingTop: "30px", backgroundColor: 'whitesmoke', marginTop: 30 }}>
          <div className="row">
            <div>
              <h3 style={{ textAlign: 'center', color: '#257e81' }}>Transform Your Business With Trishoka</h3>
            </div>
            {/* Right column (3 by 3 cards) */}
            {technologies1.map((tech, index) => (
              <div key={index} className="col-12 col-md-4 mb-4 mt-4">
                <div
                  className="card box-shadow smaller-card hover-card"
                  style={{
                    borderRadius: "15px",
                    height: '100%',
                    transition: 'background-color 0.2s, color 0.2s',
                  }}
                >
                  <div className="card-body" style={{ textAlign: "left", position: "relative", zIndex: 1 }}>
                    <div className="count-icon-container" style={{ display: 'flex', alignItems: 'center' }}>
                      <h2 style={{ marginRight: '10px', color: 'black' }}>{tech.count}</h2>
                      <img
                        src={tech.imageSrc}
                        alt={tech.title}
                        className="img-fluid"
                        style={{
                          width: "30%",
                          height: "60px",
                          objectFit: "cover",
                          marginBottom: "20px",
                          borderRadius: '50%',

                        }}
                      />
                    </div>
                    <h4
                      style={{
                        fontSize: "24px",
                        fontFamily: "system-ui",
                        fontWeight: "bold",
                        // color: 'whitesmoke',
                        marginBottom: '10px',
                      }}
                    >
                      {tech.title}
                    </h4>
                    <p className="tech-description" style={{ color: 'black' }}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TeamCards />

      <HappyClients />

      <div
      style={{
        display: 'flex',               // Center the card
        justifyContent: 'center',      // Center horizontally
        alignItems: 'center',          // Center vertically             // Full viewport height
      }}
    >
      <div
        style={{
          backgroundColor: 'white',    // Card background color
          borderRadius: '8px',         // Rounded corners
          padding: '10px',             // Inner padding
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow
          transition: 'box-shadow 0.3s', // Smooth shadow transition
          border: '1px solid rgba(0, 0, 0, 0.1)', // Light border
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Reset shadow
        }}
      >
        <Link
            to="/ContactUs"
            className="btn"
            style={{ backgroundColor: "rgb(92, 171, 202)",
              color: "white",
              fontFamily:'system-ui'}}
          >
           Contact Me More Information
          </Link>
      </div>
    </div>

    </div>
  );
}
