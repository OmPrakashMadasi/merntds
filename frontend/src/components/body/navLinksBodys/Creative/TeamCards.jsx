import React from 'react';
import './TeamCards.css'; // Import the CSS file for styles
import { teamMembers } from "../../services/services";

const TeamCards = () => {
  return (
    <div className="container maindiv">
      <h1 className="tag">Meet our creative minds</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card custom-hover-card">
              <img
                src={member.imageSrc}
                alt="Profile"
                className="custom-card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text designation">{member.designation}</p>
                <p className="custom-additional-info">{member.additionalInfo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
