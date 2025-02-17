import React from "react";
import "../article.css";  // Import the external CSS
import { Link } from "react-router-dom";

export default function FlipCards(props) {
  return (
    <div className="flipcard-container" key={props.index}>
      <div className="flipcard">
        <div className="flipcard-inner">
          <div className="flipcard-front">
            <br />
            <img
              src={props.service.image}
              width="80px"
              alt={props.service.title}
            />
            <h2>{props.service.title}</h2>
            <p>{props.service.description}</p>
          </div>
          <div className="flipcard-back">
            <br />
            <br />
            <ul>
              {props.service.details.map((detail, idx) => (
                <li key={idx}>
                  &#10148; {detail}
                </li>
              ))}
            </ul>

            <Link to="/Services">
              <button className="btn btn-primary" style={{marginBottom:30}}>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
