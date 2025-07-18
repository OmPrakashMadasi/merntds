import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.scss";
import svs from "../../../../assets/blogImages/svslogo.jpg";
import teamslogo from "../../../../assets/blogImages/team9logo.jpg";
import bhonchesaraLogo from "../../../../assets/blogImages/bhonchesara.webp";
import powertoolslogo from "../../../../assets/blogImages/powertools.jpg";
import coolidgelogo from "../../../../assets/blogImages/coolidgefoundation.png";
import picklesplatterlogo from "../../../../assets/blogImages/pickelsplatter.jpg";
import orisonlogo from "../../../../assets/blogImages/orison.png";
import cinematicmandilogo from "../../../../assets/blogImages/cinematicmandi.jpg";
import forestmandilogo from "../../../../assets/blogImages/forestmandi.jpg";
import i20feverlogo from "../../../../assets/blogImages/i20fever.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsForm from "../../../forms/ContactUsForm";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const showModalTimeout = setTimeout(() => {
    setShowModal(true);
  }, 3000);

  return () => clearTimeout(showModalTimeout);
}, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      <div>
        <h1 className={styles.helpSection}>
        
        </h1>
      </div>


      {/* Modal */}
{showModal && (
  <div
    className="modal show d-block"
    id="contactModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="contactModalLabel"
    aria-hidden={!showModal}
    style={{ pointerEvents: "none" }} // Allow background interaction
  >
    <div
      className="modal-dialog"
      role="document"
      style={{
        marginTop: "10%",
        position: "fixed",
        right: "0",
        top: "15%",
        transform: "translateX(0)",
        pointerEvents: "none", // Enable interaction inside modal
      }}
    >
      <div className="modal-content border-0 bg-transparent">
        <ContactUsForm closeModal={closeModal} />
      </div>
    </div>
  </div>
)}


      {/* Main Content */}
      <div style={{ backgroundColor: "#f0f1f2" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="container text-center d-flex flex-column align-items-center justify-content-center" style={{ marginTop: 30 }}>
              <h2 className={styles.sectionHeader}>Our Clients</h2>
              <h6 className="px-3 mt-2" style={{ fontFamily: "system-ui", color: "black" }}>
              We are happy to assist you in providing comprehensive services, a dedicated team of professionals who are committed to going the extra mile for you, around the clock, to enhance your experience with unwavering efficiency.  
Our goal is to ensure seamless support tailored to your needs, delivering excellence at every step.  
With our expertise and dedication, we strive to exceed expectations and build lasting relationships.  

              </h6>
            </div>
            <div className={styles.sliderWrapper}>
  <div className={styles.sliderTrack}>
    {[svs, bhonchesaraLogo, teamslogo, orisonlogo, coolidgelogo, picklesplatterlogo, powertoolslogo, forestmandilogo, cinematicmandilogo, i20feverlogo].map((logo, idx) => (
      <div key={idx} className={styles.slide}>
        <img src={logo} alt={`Client logo ${idx + 1}`} />
      </div>
    ))}
    {/* Repeat once more for seamless loop */}
    {[svs, bhonchesaraLogo, teamslogo, orisonlogo, coolidgelogo, picklesplatterlogo, powertoolslogo, forestmandilogo, cinematicmandilogo, i20feverlogo].map((logo, idx) => (
      <div key={`duplicate-${idx}`} className={styles.slide}>
        <img src={logo} alt={`Client logo duplicate ${idx + 1}`} />
      </div>
    ))}
  </div>
</div>
            
          </div>
        </div>

        <div>
          <h2 className={styles.locationText}>Location</h2>
          <div style={{ display: 'flex' }}>
            <div className={`container shadow ${styles.locationContainer}`}>
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    src="https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg"
                    alt="Charminar"
                    className={styles.locationImg}
                    style={{ width: "70%", height: "70%" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <h2 style={{ textAlign: "center", marginBottom: "20px", marginLeft: -30, fontFamily: "system-ui" }}>
                    TRISHOKA DIGITAL SERVICES
                  </h2>
                  <u>
                    <p style={{ textAlign: "center", color: "#3b999f", fontFamily: "system-ui" }}>
                      Off. No: 1014, 10th Floor, Prajay Princeton Towers, Saroornagar, Doctors Colony, Opp NTR Market, L.B. Nagar, Hyderabad - 500074
                    </p>
                  </u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 