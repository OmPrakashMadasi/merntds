import React from "react";
import "../section.css";
import "../article.css";
import { servicesData } from "./services";
import FlipCards from "./FlipCards";
import { Link } from "react-router-dom";

export default function ServiceCards() {

  // const navigate = useNavigate(); // Get the navigate function

  // const handleContactClick = () => {
  //   navigate('/ContactUs'); // Navigate to the Contact Us page
  // };

  return (
    <div className="fontfamily">
      <div className="service-heading">
        <br />
        <br />
        <div className="service-content">
          <div className="service-title">
            <h4 align="center" style={{ color: "#3B999F",fontFamily:'system-ui'}}>
              Explore Our Services!!!
            </h4>
            <p style={{fontFamily:'system-ui'}} >Learn more about how our services can help you succeed.</p>
          </div>
          <div className="service-description">
            <br />
            <p align="center" style={{fontFamily:'system-ui'}}>
              We provide a wide range of services to cater to your needs,
              ensuring High Performance, Scalability and Security.
            </p>
          </div>
        </div>
      </div>

      <div className="flipservices">
        {servicesData.map((service, index) => (
          <FlipCards service={service} index={index} />
        ))}
        <div className="col-lg-4">
          <div className="card consultation-card">
            <div className="card-body">
              <h2 style={{ color: "#3B999F",fontFamily:'system-ui' }}>
                Need Expert Guidance for Digital Success
              </h2>
              <p style={{fontFamily:'system-ui'}}>We're always available to answer your questions!!!</p>
              <a href="contact.html">
                 <button style={{border:'none'}}>
                 <Link
            to="/ContactUs"
            className="btn"
            style={{ backgroundColor: "rgb(92, 171, 202)",
              color: "white",
              fontFamily:'system-ui'}}
          >
            Contact Us
          </Link>
                 </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function ServiceCards() {
//   return (
//     <div className="flipmain">
//       {/* <!-- Title and Description Before Cards --> */}
//       <div className="service-heading">
//         <br />
//         <br />
//         <div className="service-content">
//           <div className="service-title">
//             <h4 align="center" style={{ color: "#ca9562" }}>
//               Explore Our Services!!!
//             </h4>
//             <p>Learn more about how our services can help you succeed.</p>
//           </div>
//           <div className="service-description">
//             <br />
//             <p align="center">
//               We provide a wide range of services to cater to your needs,
//               ensuring High Performance, Scalability and Security.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Existing Flip Cards --> */}

//       <div className="flipservices">
//         {/* <!-- Card 1 --> */}

//         <div className="flipcard-container">
//           <div className="flipcard">
//             <div className="flipcard-inner">
//               <div className="flipcard-front">
//                 <br />
//                 <img src="images/digitalmarketinglogo.png" width="80px" />
//                 <h2>Digital Marketing</h2>
//                 <p>Expand your online presence</p>
//               </div>
//               <div className="flipcard-back">
//                 <br />
//                 <br />
//                 {/* <!-- <p>Maximize your reach with our marketing services.</p> --> */}
//                 <ul>
//                   <li>Social Media Marketing</li>
//                   <li>Pay-Per-Click Advertising</li>
//                   <li>E-Mail Marketing</li>
//                   <li>Content Creation</li>
//                 </ul>
//                 <a href="services.html">
//                   {" "}
//                   <button className="btn btn-primary">Learn More</button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Card 2 --> */}
//         <div className="flipcard-container">
//           <div className="flipcard">
//             <div className="flipcard-inner">
//               <div className="flipcard-front">
//                 <br />
//                 <img src="images/seologo.png" width="80px" />
//                 <h2>SEO Services</h2>
//                 <p>Boost your search rankings</p>
//               </div>
//               <div className="flipcard-back">
//                 <br />
//                 <br />
//                 {/* <!-- <p>Improve website visibility with our SEO expertise.</p> --> */}
//                 <ul>
//                   <li>Onpage SEO</li>
//                   <li>Off Page SEO</li>
//                   <li>Technical SEO</li>
//                   <li>Keyword Research</li>
//                 </ul>
//                 <a href="services.html">
//                   {" "}
//                   <button className="btn btn-primary">Learn More</button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Card 3 --> */}

//         <div className="flipcard-container">
//           <div className="flipcard">
//             <div className="flipcard-inner">
//               <div className="flipcard-front">
//                 <br />
//                 <img src="images/weblogo.png" width="80px" />
//                 <h2>Web Development</h2>
//                 <p>Build responsive websites</p>
//               </div>
//               <div className="flipcard-back">
//                 <br />
//                 <br />
//                 {/* <!-- <p>Offering custom web development services.</p> --> */}
//                 <ul>
//                   <li>custome Websites</li>
//                   <li>E-Commerce Solutions</li>
//                   <li>Content Management System</li>
//                   <li>Responsive Design</li>
//                 </ul>
//                 <a href="http://127.0.0.1:5500/Trishoka/NavBar/services.html">
//                   {" "}
//                   <button className="btn btn-primary">Learn More</button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Card 4 --> */}

//         <div className="flipcard-container">
//           <div className="flipcard">
//             <div className="flipcard-inner">
//               <div className="flipcard-front">
//                 <br />
//                 <img src="images/applicationlogo.png" width="80px" />
//                 <h2>App Development</h2>
//                 <p>Create custom mobile apps</p>
//               </div>
//               <div className="flipcard-back">
//                 <br />
//                 <br />
//                 {/* <!-- <p>Get cross-platform mobile apps tailored to your needs.</p> --> */}
//                 <ul>
//                   <li>IOS & Android App</li>
//                   <li>Cross-Platform Solutions</li>
//                   <li>User Experience Design</li>
//                   <li>Maintanence & Support</li>
//                 </ul>
//                 <a href="services.html">
//                   {" "}
//                   <button className="btn btn-primary">Learn More</button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- Card 5 --> */}
//         <div className="flipcard-container" align="left">
//           <div className="flipcard">
//             <div className="flipcard-inner">
//               <div className="flipcard-front">
//                 <br />
//                 <img src="images/datanalysislogo.png" width="80px" />
//                 <h2>Data Analysis</h2>
//                 <p>Scale your business with data</p>
//               </div>
//               <div className="flipcard-back">
//                 <br />
//                 <br />
//                 <br />
//                 <p>Leverage Data Analysis for your business growth.</p>
//                 <a href="services.html">
//                   {" "}
//                   <button className="btn btn-primary">Learn More</button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- Consultation Card - No flip effect --> */}
//         <div className="col-lg-4 ">
//           <div className="card consultation-card">
//             <div className="card-body">
//               <h2 style={{ color: "#ca9562" }}>
//                 Need Expert Guidance for Digital Success
//               </h2>
//               <p>We're always available to answer your questions!!!</p>
//               <a href="contact.html">
//                 <button
//                   className="btn"
//                   style={{
//                     backgroundColor: "rgb(92, 171, 202)",
//                     color: "white",
//                   }}
//                 >
//                   Contact Us
//                 </button>{" "}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
