import {useEffect} from "react";
import "../body/article.css";
import "../body/section.css";
import "../header/Header.css";
import "./footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
      
    // alert('footer component mountain')
   }, []);

  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-light py-4 w-100">
      <div className="container">
        <div className="row">
          {/* <!-- About Company --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: 'Algerian, sans-serif',
              }}
            >
              Company
            </h5>
            <p className="reuseClass">
              TRISHOKA Digital Services
            </p>
            <div className="social_box">
              <a href="https://www.facebook.com/Trishoka/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f social-icon" aria-hidden="true" style={{ color: 'white' }}></i>
              </a>
              <a href="https://www.instagram.com/trishoka_digital_services/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram social-icon" aria-hidden="true" style={{ color: "white" }}></i>
              </a>
              <a href="https://www.linkedin.com/company/96662799/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in social-icon" aria-hidden="true" style={{ color: "white" }}></i>
              </a>
              <a href="https://x.com/TrishokaDigital" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter social-icon" aria-hidden="true" style={{ color: "white" }}></i>
              </a>

            </div>
          </div>

          {/* <!-- Services Section --> */}
          <div
            className="col-md-3 col-sm-6 footer-col"
            style={{ lineHeight: "2rem" }}
          >
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: 'Algerian, sans-serif',
              }}
            >
              Our Services
            </h5>
            <span className="reuseClass">Web Development</span>
            <br />
            <span className="reuseClass">Mobile App Development</span>
            <br />
            <span className="reuseClass">Digital Marketing</span>
            <br/>
            <Link
            to="/conditionspage">
            <span className="reuseClass">Terms & Conditions</span>
          </Link>
          </div>

          {/* <!-- Contact Details --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                // fontFamily: 'system-ui',
                fontFamily: 'Algerian, sans-serif',
              }}
            >
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li className="reuseClass">
                <strong className="reuseClass">Email:</strong>
                trishokadigiservices@gmail.com
              </li>
              <li className="reuseClass">
                <strong className="reuseClass">Phone:</strong>
                +91 9493401014
              </li>
            </ul>
            {/* <Call size="25" color="white" /> */}
          </div>

          {/* <!-- Address --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: 'Algerian, sans-serif',
              }}
            >
              Address
            </h5>
            <address className="reuseClass">
              Off. No: 1014, 10th Floor, Prajay Princeton Towers,
              <br />
              Saroornagar, L.B. Nagar, Hyderabad - 500074
            </address>
          </div>
        </div>

      </div>
      <div style={{ background: "bisque" }}>
        <p className="contentright">
          © {currentYear} TRISHOKA. All Rights Reserved.
        </p>
      </div>

      {/* <!-- whatsapp live chat --> */}
      {/* <div class="whatsapp-button-container" style="position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;">
    <a href="https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20offer%20for%20sale" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#25D366" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>

    </a>
</div> */}

    </footer>
  );
}
