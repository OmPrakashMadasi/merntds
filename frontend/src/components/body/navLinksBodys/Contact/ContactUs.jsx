import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.scss";
import svs from "../../../../assets/blogImages/svslogo.jpg";
import teamslogo from "../../../../assets/blogImages/team9logo.jpg";
import bhonchesaraLogo from "../../../../assets/blogImages/bhonchesara.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsForm from "../../../forms/ContactUsForm";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show cards with delay
    const showCards = () => {
      setTimeout(() => {
        document.getElementById("card1").style.opacity = "1";
        document.getElementById("card1").style.transform = "translateY(0)";
      }, 500);

      setTimeout(() => {
        document.getElementById("card2").style.opacity = "1";
        document.getElementById("card2").style.transform = "translateY(0)";
      }, 1000);

      setTimeout(() => {
        document.getElementById("card3").style.opacity = "1";
        document.getElementById("card3").style.transform = "translateY(0)";
      }, 1500);
    };

    showCards();

    // Show modal after 5 minutes (300,000 ms)
    const showModalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 5 minutes

    return () => clearTimeout(showModalTimeout); // Cleanup the timeout on component unmount
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
    aria-hidden="true"
  >
    <div
      className="modal-dialog"
      role="document"
      style={{ 
        marginTop: "6%", 
        position: "fixed", 
        right: "0", 
        top: "16%", 
        transform: "translateX(0)" 
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
              <h1 className={styles.sectionHeader}>Our Clients</h1>
              <h6 className="px-3 mt-2" style={{ fontFamily: "system-ui", color: "black" }}>
                We are happy to assist you in providing comprehensive services, a dedicated team of professionals who are committed to going the extra mile for you, around the clock, to enhance your experience with unwavering efficiency.
              </h6>
            </div>

            <div className="col-md-4 mb-4 mt-4" >
              <div className={`d-flex flex-column align-items-center justify-content-center p-4 rounded-lg ${styles.projectCard}`} id="card1">
                <h6 className={styles.projectName}>Sri SVS Pearls & Jewellers</h6>
                <img className="img-fluid" src={svs} alt="Sri SVS Pearls & Jewellers" style={{ width: '100%', height: 250 }} />
              </div>
            </div>
            <div className="col-md-4 mb-4 mt-4 ml-3" >
              <div className={`d-flex flex-column align-items-center justify-content-center p-4  rounded-lg ${styles.projectCard}`} id="card2">
                <h6 className={styles.projectName}>Bhonchesara</h6>
                <img className="img-fluid" src={bhonchesaraLogo} alt="Bhonchesara" style={{ width: '100%', height: 250 }} />
              </div>
            </div>
            <div className="col-md-4 mb-4 mt-4" >
              <div className={`d-flex flex-column align-items-center justify-content-center p-4  rounded-lg ${styles.projectCard}`} id="card3">
                <h6 className={styles.projectName}>Team 9 Infra</h6>
                <img className="img-fluid" src={teamslogo} alt="Team 9 Infra" style={{ width: '100%', height: 250 }} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className={styles.locationText}>Location</h1>
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