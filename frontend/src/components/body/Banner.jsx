
import videoSrc from "../../assets/vedios/vedio.mp4";
import "./section.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="image-caption">
      <video
        autoPlay
        muted
        loop
        playsinline
        className="responsive"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="path-to-your-video.webm" type="video/webm" />
        <source src="path-to-your-video.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      
      <div className="carousel-caption d-block d-md-block" 
      style={{marginBottom:-40}}
      >
        {/* <p>Transform your online presence with </p>
        <h1>Cutting-Edge Digital Marketing & IT services</h1> */}
         {showContent && (
        <><h5 style={{ fontFamily: 'system-ui' }}>!!We Create Unique and Efficient Digital Service</h5>
        <h1>
            <Link
              to="/Services"
              className="btn"
              style={{ backgroundColor: "rgb(77, 156, 187)", color: "white" }}
            >
              Learn More
            </Link>
          </h1></>
         )}
      </div>
    </div>
  );
};

export default Banner;
