import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./NumberWidget.scss"; // Custom styles if needed

const HappyClients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="container my-5" style={{
      // backgroundColor:'#7e2b26',
      backgroundColor:'#3B999F',
    padding:50,}}>
      <div className="row text-center">
        {/* First Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "white", color: "#7e2b26" }}
          >
            <div className="icon mb-2">
              <span role="img" aria-label="star" style={{ fontSize: "50px" }}>
                ⭐
              </span>
            </div>
            <h2>{inView && <CountUp start={0} end={97} duration={2} />}%</h2>
            <h6 style={{color:"black",fontFamily:'system-ui'}}>Of our clients recommend us</h6>
          </div>
        </div>

        {/* Second Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "white", color: "#7e2b26" }}
          >
            <div className="icon mb-2">
              <span role="img" aria-label="people" style={{ fontSize: "50px" }}>
                👥
              </span>
            </div>
            <h2>
              {inView && (
                <CountUp start={0} end={1000} duration={3} separator="," />
              )}
              +
            </h2>
            <h6 style={{color:"black",fontFamily:'system-ui'}}>Customers we have served</h6>
          </div>
        </div>

        {/* Third Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "white", color: "#7e2b26" }}
          >
            <div className="icon mb-2">
              <span
                role="img"
                aria-label="diamond"
                style={{ fontSize: "50px" }}
              >
                💎
              </span>
            </div>
            <h2>{inView && <CountUp start={0} end={30} duration={3} />}+</h2>
            <h6 style={{color:"black",fontFamily:'system-ui'}}>Years of meeting client needs</h6>
          </div>
        </div>
      </div>
    </div>


  //   <div ref={ref} className="container my-5">
  //   <div className="row text-center">
  //     {/* First Box */}
  //     <div className="col-md-6">
  //       <div
  //         className="p-3"
  //         // style={{ backgroundColor: "#7e2b26", color: "white" }}
  //       >
  //         <div className="icon mb-2">
  //           <span role="img" aria-label="star" style={{ fontSize: "50px" }}>
  //             ⭐
  //           </span>
  //         </div>
  //         <h2 style={{color:'black',fontFamily:'system-ui',fontSize:30}}>OUR CLIENT RECOMMENED US</h2>

  //         <h2 style={{color:'orange'}}>{inView && <CountUp start={0} end={97} duration={2} />}%</h2>
  //       </div>
  //     </div>

  //     {/* Second Box */}
  //     <div className="col-md-6">
  //       <div
  //         className="p-3"
  //         // style={{ backgroundColor: "#196f3d", color: "white" }}
  //       >
  //         <div className="icon mb-2">
  //           <span role="img" aria-label="people" style={{ fontSize: "50px" }}>
  //             👥
  //           </span>
  //         </div>
  //         <h2 style={{color:'black',fontFamily:'system-ui',fontSize:30}}>CUSTOMERS WE HAVE SERVES</h2>
  //         <h2 style={{color:'orange'}}>
  //           {inView && (
  //             <CountUp start={0} end={10000} duration={3} separator="," />
  //           )}
  //           +
  //         </h2>
         
  //       </div>
  //     </div>

  //     {/* Third Box */}
  //     {/* <div className="col-md-4">
  //       <div
  //         className="p-3"
  //         // style={{ backgroundColor: "#123e71", color: "white" }}
  //       >
  //         <div className="icon mb-2">
  //           <span
  //             role="img"
  //             aria-label="diamond"
  //             style={{ fontSize: "50px" }}
  //           >
  //             💎
  //           </span>
  //         </div>
  //         <h2 style={{color:'black',fontFamily:'system-ui',fontSize:30}}>YEARS OF MEETING CLIENT NEEDS</h2>

  //         <h2 style={{color:'orange'}}>{inView && <CountUp start={0} end={30} duration={3} />}+</h2>
  //       </div>
  //     </div> */}
  //   </div>
  // </div>

  );
};

export default HappyClients;
