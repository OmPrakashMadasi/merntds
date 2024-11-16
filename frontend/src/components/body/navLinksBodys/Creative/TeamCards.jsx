import React from 'react';
import './TeamCards.css'; // Import the CSS file for styles
import { teamMembers } from "../../services/services";
const TeamCards = () => {
  return (
    <div className="container" style={{ backgroundColor: 'whitesmoke', marginTop: 30, paddingTop: 20 }}>
      <h1 style={{ color: '#41999c', textAlign: 'center' }}>Meet our creative minds</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card custom-hover-card">
              <img
                src={member.imageSrc}
                alt="Profile"
                className="custom-card-img-top"
                style={{width:'100%',height:200, objectFit: "cover",}}
                
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text" style={{color:'#3B999F',fontFamily:'bold'}}>{member.designation}</p>
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
