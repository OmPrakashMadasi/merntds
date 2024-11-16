import React from "react";
import "../article.css";
import "../section.css";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="article" style={{paddingBottom:30}}>
        {/* Add your testimonials here */}
        <div className="testimonialcard" style={{paddingTop:30}}>
          <article className="information">
            <span className="tag" style={{fontFamily:'system-ui',color:'#3B999F'}}>Testimonial</span>
            <h2 className="title" style={{fontFamily:'system-ui'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;"Amazing Service and Support!"
            </h2>
            <p className="info" style={{fontFamily:'system-ui'}}>
              "TRISHOKA has transformed our digital presence, and their team has
              been incredibly responsive to all our needs."
            </p>
            <Link
                  className="nav-link active"
                  aria-current="page"
                  to="AboutUs"
                 
                >
                 <button className="button">
                <span style={{ color: "black" ,fontFamily:'system-ui',borderColor:'#3B999F'}}>Read More</span>
              </button>
                </Link>
          </article>
        </div>
        <div className="testimonialcard" style={{paddingTop:30}}>
          <article className="plan">
            <div className="inner">
              <h2 className="title" style={{fontFamily:'system-ui',color:'#3B999F'}}>Client: SriSvsPearls</h2>
              <p className="info" style={{ color: "#0f1113",fontFamily:'system-ui' }}>
                "Our business grew by 30% after implementing TRISHOKA's
                strategies. Highly recommended!"
              </p>
              <ul className="features">
                <li>
                  <span>
                    <strong style={{fontFamily:'system-ui',color:'#3B999F'}}>Dedicated Support</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong style={{fontFamily:'system-ui',color:'#3B999F'}}>Custom Solutions</strong>
                  </span>
                </li>
              </ul>
              <a href="contact.html">

              <Link
                  className="nav-link active"
                  aria-current="page"
                  to="ContactUs"
                 
                >
                 <button
                  className="button"
                  style={{ backgroundColor: "#69bec5",fontFamily:'system-ui' }}
                >
                  Our Clients
                </button>
                </Link>

                
              </a>
            </div>
          </article>
        </div>
        {/* <div className="testimonialcard" style={{paddingTop:30}}>
          <article className="information">
            <h2 className="title" style={{fontFamily:'system-ui'}}>"Best Investment for Our Growth"</h2>
            <p className="info" style={{fontFamily:'system-ui'}}>
              "Partnering with TRISHOKA was the best decision we made. Their
              expertise in digital marketing is unmatched."
            </p>
            <dl className="details">
            <div>
              <dt style={{color:' #ca9562',fontFamily:'system-ui'}}>Satisfaction</dt>
              <dd style={{color:' #ca9562',fontFamily:'system-ui'}}>99%</dd>
            </div>
            <div>
              <dt style={{color:' #ca9562',fontFamily:'system-ui'}}>Happy Clients</dt>
              <dd style={{color:' #ca9562',fontFamily:'system-ui'}}>5K+</dd>
            </div>
            </dl>
           
          </article>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
