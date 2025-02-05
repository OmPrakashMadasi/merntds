import React from "react";
import "../article.css"; // Keep this if you have global styles in article.css
import "../section.css"; // Keep this if you have global styles in section.css


import insideStorieImg from "../../../assets/cardsImages/insidecol1.png";
import insideS2 from "../../../assets/cardsImages/insidecol2.png";
import insideS3 from "../../../assets/cardsImages/insidecol3.png";

export default function Stories() {
  return (
    <div>
      <section className="inside-stories">
        <h2>Inside stories</h2>
        <div className="stories-container">
          <div className="story story-left">
            <img src={insideStorieImg} alt="insideStorieImg" />
            <h3>//New career, new you</h3>
            <h6>
              A career change can open doors to new opportunities and drive
              personal growth. It offers the chance to discover your passions,
              challenge yourself, and redefine success on your own terms. By
              joining us, you’ll embark on a rewarding career journey, embracing
              change and stepping confidently into a future that inspires you.
            </h6>
          </div>
          <div className="story-column">
            <div className="story">
              <img src={insideS2} alt="insideS2" />
              <h3>//A forum for sustainability</h3>
              <h6>
                We provide a platform to amplify sustainability efforts, driving
                impactful conversations that inspire action for a greener, more
                sustainable future.
              </h6>
            </div>
            <div className="story">
              <img src={insideS3} alt="insideS3" />
              <h3>//Driving innovation</h3>
              <h6>
                Driving innovation is the key to unlocking new possibilities and
                shaping the future. By embracing creativity and technology, we
                can solve today’s challenges and build a better tomorrow.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
