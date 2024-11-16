import React from "react";
import styles from "./Servicepage.module.scss";
import { servicesNavData } from "../../services/services";
import {ArrowUp} from 'iconsax-react'

const Servicepage = () => {
  console.log(servicesNavData, "kl");
  return (
    <div className={`${styles.contentWrapper} ${styles.clearfix}`}>
      <div>
        <h1 className={styles.partnerContainer}></h1>
      </div>
      <section id="services">
        <div className={styles.serviceCards}>
          <div className={styles.card}>
            <div className={styles.serviceHeading} align="center">
              <br />

              <div>
                <u style={{ color: "black" }}>
                  <h1
                    className={styles.serviceheading}
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    }}
                  >
                    Welcome To Our Services
                  </h1>
                </u>
                <h6
                  style={{
                    paddingTop: "20px",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  Discover Tailored Solutions to Elevate Your Success
                </h6>
                <br />
                <p
                  style={{
                    fontSize: "large",
                    fontWeight: "200",
                    color: "black",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  You can Explore the best Digital & Marketing Portfolio
                  Services with TRISHOKA
                </p>
                <br />
              </div>

              <div
                className={`${styles.dInlineflex}  flex-row flex-wrap justify-content-center mb-3`}
              >
                <br />
                {/* <!-- Service Content Container --> */}
                <section id="service-content">
                  <div id="services">
                    {servicesNavData.map((serv, ind) => {
                      return (
                        <div
                          key={ind}
                          className={`${styles.servicecard} ${styles.serviceIndividual} d-flex flex-column justify-content-center`}
                          style={{
                            width: "100%", // Full width of each card
                            minHeight: "100vh", // Set full viewport height
                            padding: "20px", // Consistent padding
                            boxSizing: "border-box",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="row w-100 h-100" style={{ marginBottom: 100 }}>
                            <div
                              className="col-lg-6 col-md-12 d-flex flex-column justify-content-center"
                              style={{
                                padding: "0 10px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "74%",         // Adjust height based on content
                                minHeight: "50vh",      // Ensures a minimum height (50% of the viewport)
                                maxHeight: "100vh",
                                paddingTop:100
                                // paddingBottom:100
                               

                              }}
                            >
                              <h1 align="center" style={{ color: serv.color, fontFamily: 'Algerian, sans-serif',color:'#3b999f'}}>
                                {serv.title}
                              </h1>
                              {/* <h1 align="center">
  {serv.title.split('').map((char, index) => (
    <span
      key={index}
      style={{
        color: serv.color,
        // border: char === 'S' ? '3px solid black' : '3px double black',
        padding: '5px',
        margin: '2px',
        display: 'inline-block',
        borderRadius: char === 'S' ? '50%' : '0', // Special S-shape style
        fontFamily: 'Algerian, sans-serif', // Apply the Algerian font or fallback
      }}
    >
      {char}
    </span>
  ))}
</h1> */}


                              <h4 align="center">{serv.description}</h4>
                              <h6 align="center" style={{ color: '#3b999f' }}>{serv.description1}</h6>
                              <br />
                              <h2 align="center" style={{ color: serv.color1, marginLeft: "-60px",color:'#3b999f' }}>
                                Offerings:
                              </h2>
                              <ul className={styles.customUl}>
                                {serv.offerings.map((offer, index) => {
                                  return (
                                    <li key={index} style={{ textAlign: "left" }}>
                                      &#10148;<b>{offer}</b>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                              <img
                                src={serv.imageSrc}
                                alt={serv.imgalt}
                                style={{
                                  height: "80%",
                                  width: "100%",
                                  objectFit: "cover",
                                  //   maxHeight: "400px", // Set a maximum height for large screens
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>


              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{float:'right',marginRight:32,padding:5}}>
    <a href="#" class="back-to-top"><ArrowUp size="25" color="black" variant="Bold"/>Top</a>
    </div>
    </div>
  );
};
export default Servicepage;
