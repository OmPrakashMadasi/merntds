import React from "react";
import styles from "./Servicepage.module.scss";
import { servicesNavData } from "../../services/services";
import { ArrowUp } from "iconsax-react";

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
                <u className={styles.serviceheading}>
                  <h2 className={styles.serviceheading}>
                    Welcome To Our Services
                  </h2>
                </u>
                <h6 className={styles.serviceContent}>
                  Discover Tailored Solutions to Elevate Your Success
                </h6>
                <br />
                <p className={styles.serviceContent}>
                  You can Explore the best Digital & Marketing Portfolio
                  Services with TRISHOKA
                </p>
                <br />
              </div>

              <div className={`${styles.dInlineflex} ${styles.flexRow} ${styles.flexWrap} ${styles.justifyCenter} ${styles.mb3}`}>
                <br />
                {/* Service Content Container */}
                <section id="service-content">
                  <div id="services">
                    {servicesNavData.map((serv, ind) => {
                      return (
                        <div
                          key={ind}
                          className={`${styles.servicecard} ${styles.serviceIndividual}`}
                        >
                          <div className={`row ${styles.w100} ${styles.h100}`} style={{ marginBottom: 100 }}>
                            <div
                              className={`col-lg-6 col-md-12 ${styles.flexCol} ${styles.justifyCenter}`}
                              style={{
                                padding: "0 10px",
                                height: "74%",
                                minHeight: "50vh",
                                paddingTop: 100,
                              }}
                            >
                              <h2
                                className={styles.serviceTitle}
                                style={{ color: serv.color }}
                              >
                                {serv.title}
                              </h2>

                              <h4 className={styles.serviceDesc}>{serv.description}</h4>
                              <h6 className={styles.serviceDesc1}>{serv.description1}</h6>
                              <br />
                              <h2 className={styles.offeringsTitle} style={{ color: serv.color1 }}>
                                Offerings:
                              </h2>
                              <ul className={styles.customUl}>
                                {serv.offerings.map((offer, index) => {
                                  return (
                                    <li key={index}>
                                      &#10148; <b>{offer}</b>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                              <img
                                src={serv.imageSrc}
                                alt={serv.imgalt}
                                className={styles.serviceImage}
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

      <div className={styles.backToTop}>
        <a href="#" className={styles.backToTop}>
          <ArrowUp size="25" color="black" variant="Bold" />
          Top
        </a>
      </div>
    </div>
  );
};

export default Servicepage;
