import React from "react";
import "../section.css";
import "../article.css";
import { Link } from "react-router-dom";

export default function FlipCards(props) {
  return (
    <div class="flipcard-container" key={props.index}>
      <div class="flipcard">
        <div class="flipcard-inner">
          <div class="flipcard-front" style={{color:"white"}}>
            <br />
            <img
              src={props.service.image}
              width="80px"
              alt={props.service.title}
              style={{fontFamily:'system-ui'}}
            />
            <h2 style={{fontFamily:'system-ui'}}>{props.service.title}</h2>
            <p style={{fontFamily:'system-ui'}}>{props.service.description}</p>
          </div>
          <div class="flipcard-back">
            <br />
            <br />
            {/* <!-- <p>Maximize your reach with our marketing services.</p> --> */}
            <ul style={{ color: "white", fontFamily: 'system-ui', textAlign: 'left', listStyleType: 'none',marginLeft:30}}>
  {props.service.details.map((detail, idx) => (
    <li key={idx}>
      &#10148; {detail}
    </li>
  ))}
</ul>

            {/* <a href="services.html">
              <button className="btn btn-primary" style={{fontFamily:'system-ui'}}>Learn More</button>
            </a>{" "} */}
            <Link to="/Services">
              <button className="btn btn-primary"  style={{fontFamily:'system-ui'}}>Learn More</button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
