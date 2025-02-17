import React from "react";
import "../article.css"; 
import "../section.css"; 

import insideStorieImg from "../../../assets/cardsImages/insidecol1.png";
import insideS2 from "../../../assets/cardsImages/insidecol2.png";
import insideS3 from "../../../assets/cardsImages/insidecol3.png";

export default function Stories() {
  return (
    <div className="main-content">
      <section className="inside-stories">
        <h2 className="inside-stories-heading">Inside Stories</h2>
        <div className="stories-container">
          
          {/* Left Side Story */}
          <div className="story story-left">
            <img src={insideStorieImg} alt="Inside Story" />
            <h3>// New Career, New You</h3>
            <p style={{color:'rgb(59, 153, 159)'}}>
              A career change can open doors to new opportunities and drive personal growth. 
              Discover your passions, challenge yourself, and redefine success on your own terms.
            </p>
          </div>

          {/* Right Side (Two Smaller Stories) */}
          <div className="story-column">
            <div className="story small-story">
              <img src={insideS2} alt="Forum for Sustainability" />
              <h3>// A Forum for Sustainability</h3>
              <p style={{color:'rgb(59, 153, 159)'}}>
                We provide a platform to amplify sustainability efforts, inspiring 
                action for a greener future.
              </p>
            </div>
            <div className="story small-story">
              <img src={insideS3} alt="Driving Innovation" />
              <h3>// Driving Innovation</h3>
              <p style={{color:'rgb(59, 153, 159)'}}>
                Innovation unlocks new possibilities. Embracing creativity and 
                technology helps shape a better future.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
