import React from "react";

// Register required Chart.js modules

const Roas = () => {
  // Sample data: Replace with your actual ROAS data


  return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {/* Header */}
        <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "25px" }}>
        Maximize Your ROAS (Return on Ad Spend) with Expert Strategies
        </h1>
  
        {/* Graph and Headlines */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          
          <div
            style={{
              flex: "1 1 300px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h2 style={{ color: "#3B999F" }}>What is Return on Ad Spend (ROAS)?</h2>
            <p style={{ color: "black", lineHeight: "1.6" }}>
            Return on Advertising Spend (ROAS) measures the revenue generated
            for every rupee spent on advertising. It is a key metric to evaluate
            the effectiveness of marketing campaigns in driving revenue and achieving
            business growth.
            </p>
            <h3>Key Strategies to Optimize ROAS</h3>
            <ul style={{ color: "black", lineHeight: "1.6" }}>
    <li>Enhance Ad targeting to reach the right audience.</li>
    <li>Optimize Ad creatives for better engagement.</li>
    <li>Utilize A/B testing to identify High-Performing ads.</li>
    <li>Allocate budget to campaigns with proven performance.</li>
    <li>Analyze campaign data regularly and adjust strategies accordingly.</li>
  </ul>
          </div>
        </div>
  
        <div
    style={{
      display: "flex",
      flexDirection: "row",  // Align items horizontally (side by side)
      gap: "20px",  // Space between content and image
      flexWrap: "wrap",  // Allow wrapping on smaller screens
    }}
  >
    {/* Content Section */}
    <div
      style={{
        flex: "1 1 300px",  // Content takes up at least 300px but can grow
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h3 style={{ color: "#3B999F", marginBottom: "10px" }}>Why is ROAS Important?</h3>
      <p style={{ color: "black", lineHeight: "1.6" }}>
      ROAS is essential for understanding the effectiveness of your advertising efforts. It helps in:      </p>
      <ul style={{ color: "black", lineHeight: "1.8", listStyleType: "→", margin: 0, padding: "0 0 0 20px" }}>
        <li><strong>Budget Allocation:</strong>Determining which campaigns are most profitable and deserve more investment.</li>
        <li><strong>Performance Evaluation:</strong> Assessing the success of advertising strategies and making necessary adjustments.</li>
        <li><strong>Strategic Planning:</strong>Guiding future marketing decisions based on past performance.</li>
        </ul>
      <p style={{ color: "black", lineHeight: "1.6", marginTop: "10px" }}>
        By Incorporating these strategies, businesses can achieve significant growth and maximize returns on their investments.
      </p>
    </div>

    
  
    {/* Image Section */}
    <div
      style={{
        flex: "1 1 300px",  // Image container takes up at least 300px, can grow
        padding: "20px",
        display: "flex",
        justifyContent: "center",  // Center image horizontally
        alignItems: "center",  // Center image vertically if needed
      }}
    >
      <img
        src={require("../../../../assets/blogImages/roas.png")}
        alt="Maximize ROAS with Trishoka"
        style={{
          width: "100%",  // Make the image width responsive
          maxWidth: "400px",  // Limit the maximum width of the image
          height: "auto",  // Maintain aspect ratio
          borderRadius: "8px",  // Optional: Rounded corners
          // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Optional: Shadow effect
        }}
      />
    </div>
  </div>
  {/* Content Section */}
  <div
      style={{
        flex: "1 1 300px",  // Content takes up at least 300px but can grow
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h3 style={{ color: "#3B999F", marginBottom: "10px" }}>Optimizing ROAS</h3>
      <p style={{ color: "black", lineHeight: "1.6" }}>
      To improve ROAS, consider the following strategies:     </p>
      <ul style={{ color: "black", lineHeight: "1.8", listStyleType: "→", margin: 0, padding: "0 0 0 20px" }}>
        <li><strong>Targeting the Right Audience:</strong>Ensure your ads reach potential customers who are more likely to convert.</li>
        <li><strong>Improving Ad Quality:</strong>Create compelling and relevant advertisements that attract attention.</li>
        <li><strong>Enhancing Landing Pages:</strong>Optimize the User Experience on landing pages to increase Conversion Rates.</li>
        <li><strong>Monitoring and Adjusting Campaigns:</strong>Regularly analyze performance data and adjust strategies accordingly.</li>
        <li><strong>Track Campaign Performance:</strong>Monitor the revenue generated from each and every advertising campaign.</li>
        <li><strong>Analyze Data:</strong>Identify which type of campaigns yields the highest ROAS.</li>
        <li><strong>Optimize Strategies:</strong>Allocate more budget to High-Performing campaigns and adjust or discontinue underperforming ones.</li>
        <li><strong>Set Benchmarks:</strong>Establish ROAS targets to measure future campaign success.</li>
        </ul>
      <p style={{ color: "black", lineHeight: "1.6", marginTop: "10px" }}>
      Understanding and optimizing ROAS enables businesses to maximize the effectiveness of their advertising spend, leading to increased Revenue and Growth.      </p>
    </div>
  
  
  
  
  
        {/* ROI Explanation */}
        <div style={{ lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
          <h3 style={{ color: "#3B999F" }}>How to Calculate ROAS:</h3>
          <p style={{ color: "black" }}>
          Return on Ad Spend (ROAS) is a crucial metric that evaluates the effectiveness 
          of advertising campaigns by measuring the revenue generated for each Rupees spent on advertising.
          </p>
  
          <h3 style={{ color: "#3B999F" }}>Formula for ROAS</h3>
          <p style={{ color: "black", alignItems: "center" }}>
            <b>ROAS  =</b>{" "}
            <i>
              (Total Revenue from Ads) / (Total Cost of Ads)
            </i>
          </p>
          <p style={{ color: "black" }}>
            Example: Invest ₹10,000 on an Ad campaign and generate ₹50,000 in revenue from it,
             your ROAS would be 5:1, meaning you earn ₹5 for every ₹1 spent on advertising.
            <br />
            <b>ROAS = (₹50,000) / (₹10,000) = ₹5</b>
          </p>
        </div>
  
     {/* ROI-Driven Approach Cards */}
<h3 style={{ textAlign: "center", color: "#3B999F", marginBottom: "20px" }}>
  ROAS-Driven Services by Trishoka
</h3>
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
  }}
>
  {/* Card 1: Digital Marketing */}
  <div
    style={{
      flex: "1 1 300px",
      padding: "20px",
      border: "2px solid #eaeaea",
      borderRadius: "10px",
      backgroundColor: "#F4F8FB",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h4 style={{ color: "#3B999F", marginBottom: "10px" }}>Digital Marketing</h4>
    <h5 style={{ color: "#3B999F", fontSize: "16px" }}>Maximize Your ROAS</h5>
    <ul style={{ color: "black" }}>
      <li>Targeted campaigns for Increased Conversions</li>
      <li>Data-Driven strategies for Higher ROAS</li>
      <li>Custom Ads for B2B, B2C or C2B business models</li>
    </ul>
  </div>

  {/* Card 2: Web Design */}
  <div
    style={{
      flex: "1 1 300px",
      padding: "20px",
      border: "2px solid #eaeaea",
      borderRadius: "10px",
      backgroundColor: "#F4F8FB",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h4 style={{ color: "#3B999F", marginBottom: "10px" }}>Web Design</h4>
    <h5 style={{ color: "#3B999F", fontSize: "16px" }}>Optimized for Conversions</h5>
    <ul style={{ color: "black" }}>
      <li>Responsive design to improve User Engagement</li>
      <li>Clear Calls-to-Action that drive higher conversions</li>
      <li>Tailored Web Design for B2B, B2C and C2B clients</li>
    </ul>
  </div>

  {/* Card 3: App Development */}
  <div
    style={{
      flex: "1 1 300px",
      padding: "20px",
      border: "2px solid #eaeaea",
      borderRadius: "10px",
      backgroundColor: "#F4F8FB",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h4 style={{ color: "#3B999F", marginBottom: "10px" }}>App Development</h4>
    <h5 style={{ color: "#3B999F", fontSize: "16px" }}>Boost User Engagement</h5>
    <ul style={{ color: "black" }}>
      <li>Scalable apps for Long-Term business growth</li>
      <li>Optimized for higher User Retention and Interactions</li>
      <li>Solutions for B2B, B2C and C2B marketing models</li>
    </ul>
  </div>

 
</div>


  
        {/* Call to Action */}
  
  
  
  
        <div
          style={{
            backgroundColor: "#F4F8FB",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#3B999F", marginBottom: "10px" }}>Partner with Trishoka for Better ROAS</h3>
          <p style={{ color: "black", lineHeight: "1.6" }}>
            {/* Your success is our priority. Let us show you how Trishoka’s services can transform your investments
            into substantial returns. Contact us now for a free consultation and ROI assessment. */}
            Your success is not just our priority—it’s our mission. Experience the power of transformative growth as Trishoka cutting edge services propel your investment towards remarkable returns. Let us help you unlock unparalleled potential and achieve extraordinary results.
  <b style={{color:"black"}}>Contact us</b> today for a complimentary consultation and a comprehensive ROAS assessment. Together, we’ll pave the way to a future of limitless possibilities.
          </p>
        </div>
      </div>
    );
  };

export default Roas;
