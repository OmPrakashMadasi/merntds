import React from "react";
import "../article.css";
import "../section.css";
import insideStorieImg from "../../../assets/cardsImages/insidecol1.png";
import insideS2 from "../../../assets/cardsImages/insidecol2.png";
import insideS3 from "../../../assets/cardsImages/insidecol3.png";
export default function Stories() {
  return (
    <div>
      <section class="inside-stories">
        <h2 style={{fontFamily:'system-ui'}}>Inside stories</h2>
        <div class="stories-container">
          <div class="story story-left">
            <img src={insideStorieImg} alt="" />

            <br />
            <h3 style={{fontFamily:'system-ui'}}>//New career, new you</h3>
            <h6 style={{fontFamily:'system-ui',color:'#3B999F',
            // textAlign:'left',
              width:'60%',marginLeft:'20%'}}>A career change can open doors to new opportunities and drive personal growth. It offers the chance to discover your passions, challenge yourself, and redefine success on your own terms. By joining us, you’ll embark on a rewarding career journey, embracing change and stepping confidently into a future that inspires you. </h6>
          </div>
          <div class="story-column">
            <div class="story">
              <img src={insideS2} alt="" />
              <h3 style={{fontFamily:'system-ui'}}>//A forum for sustainability</h3>
              <h6 style={{fontFamily:'system-ui',color:'#3B999F',
            // textAlign:'left',
              width:'80%',marginLeft:'10%'}}>We provide a platform to amplify sustainability efforts, driving impactful conversations that inspire action for a greener, more sustainable future.</h6>
          
            </div>
            <div class="story">
              <img src={insideS3} alt="" />
              <h3 style={{fontFamily:'system-ui'}}>//Driving innovation</h3>
              <h6 style={{fontFamily:'system-ui',color:'#3B999F',
            // textAlign:'left',
              width:'80%',marginLeft:'10%'}}>Driving innovation is the key to unlocking new possibilities and shaping the future. By embracing creativity and technology, we can solve today’s challenges and build a better tomorrow.</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
