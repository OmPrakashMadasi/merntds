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
        <h5 className="about-heading">
          Trishoka Digital Services Crafts <b style={{ color: '#257e81' }}>The Best Digital Marketing Strategies</b> To Elevate Your Brand's Online Presence.
        </h5>
        <div className="about-subheading">
          <span>"Our team blends creativity, strategic insight, and advanced technology. We aim to deliver results that help your business stand out."</span>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div>
              <h3 style={{ textAlign: 'center', color: '#257e81' }}>Transform Your Business With Trishoka</h3>
            </div>
            {technologies1.map((tech, index) => (
              <div key={index} className="col-12 col-md-4 mb-4 mt-4">
                <div className="card box-shadow smaller-card hover-card">
                  <div className="card-body">
                    <div className="count-icon-container">
                      <h2>{tech.count}</h2>
                      <img
                        src={tech.imageSrc}
                        alt={tech.title}
                        className="img-fluid"
                      />
                    </div>
                    <h4 className="tech-title">
                      {tech.title}
                    </h4>
                    <p className="tech-description">
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

      <div className="contact-card">
        <div className="contact-card-content">
          <Link
            to="/ContactUs"
            className="btn btn-contact"
          >
           Contact Me More Information
          </Link>
        </div>
      </div>
    </div>
  );
}
