import React from "react";
import './roas.css';  // Import the CSS file

const Roas = () => {
  return (
    <div className="container">
      {/* Header */}
      <h1 className="header">
        Maximize Your ROAS (Return on Ad Spend) with Expert Strategies
      </h1>

      {/* Graph and Headlines */}
      <div className="section">
        <div className="content">
          <h2 className="heading">What is Return on Ad Spend (ROAS)?</h2>
          <p className="text">
            Return on Advertising Spend (ROAS) measures the revenue generated for every rupee spent on advertising. It is a key metric to evaluate the effectiveness of marketing campaigns in driving revenue and achieving business growth.
          </p>
          <h3>Key Strategies to Optimize ROAS</h3>
          <ul className="ul">
            <li>Enhance Ad targeting to reach the right audience.</li>
            <li>Optimize Ad creatives for better engagement.</li>
            <li>Utilize A/B testing to identify High-Performing ads.</li>
            <li>Allocate budget to campaigns with proven performance.</li>
            <li>Analyze campaign data regularly and adjust strategies accordingly.</li>
          </ul>
        </div>
      </div>

      <div className="section" style={{ flexDirection: "row", gap: "20px" }}>
        {/* Content Section */}
        <div className="content">
          <h3 className="heading">Why is ROAS Important?</h3>
          <p className="text">
            ROAS is essential for understanding the effectiveness of your advertising efforts. It helps in:
          </p>
          <ul className="ul">
            <li><strong>Budget Allocation:</strong> Determining which campaigns are most profitable and deserve more investment.</li>
            <li><strong>Performance Evaluation:</strong> Assessing the success of advertising strategies and making necessary adjustments.</li>
            <li><strong>Strategic Planning:</strong> Guiding future marketing decisions based on past performance.</li>
          </ul>
          <p className="text">
            By Incorporating these strategies, businesses can achieve significant growth and maximize returns on their investments.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img
            src={require("../../../../assets/blogImages/roas.png")}
            alt="Maximize ROAS with Trishoka"
            className="image"
          />
        </div>
      </div>

      {/* ROAS Explanation */}
      <div className="explanation">
        <h3 className="heading">How to Calculate ROAS:</h3>
        <p className="text">
          Return on Ad Spend (ROAS) is a crucial metric that evaluates the effectiveness of advertising campaigns by measuring the revenue generated for each Rupee spent on advertising.
        </p>

        <h3 className="heading">Formula for ROAS</h3>
        <p className="text">
          <b>ROAS = </b> <i>(Total Revenue from Ads) / (Total Cost of Ads)</i>
        </p>
        <p className="text">
          Example: Invest ₹10,000 on an Ad campaign and generate ₹50,000 in revenue from it, your ROAS would be 5:1, meaning you earn ₹5 for every ₹1 spent on advertising.
          <br />
          <b>ROAS = (₹50,000) / (₹10,000) = ₹5</b>
        </p>
      </div>

      {/* ROAS-Driven Approach Cards */}
      <h3 className="heading" style={{ textAlign: "center", marginBottom: "20px" }}>
        ROAS-Driven Services by Trishoka
      </h3>
      <div className="section" style={{ justifyContent: "center", gap: "20px" }}>
        {/* Card 1: Digital Marketing */}
        <div className="card">
          <h4 className="card-heading">Digital Marketing</h4>
          <h5 className="card-subheading">Maximize Your ROAS</h5>
          <ul className="ul">
            <li>Targeted campaigns for Increased Conversions</li>
            <li>Data-Driven strategies for Higher ROAS</li>
            <li>Custom Ads for B2B, B2C or C2B business models</li>
          </ul>
        </div>

        {/* Card 2: Web Design */}
        <div className="card">
          <h4 className="card-heading">Web Design</h4>
          <h5 className="card-subheading">Optimized for Conversions</h5>
          <ul className="ul">
            <li>Responsive design to improve User Engagement</li>
            <li>Clear Calls-to-Action that drive higher conversions</li>
            <li>Tailored Web Design for B2B, B2C and C2B clients</li>
          </ul>
        </div>

        {/* Card 3: App Development */}
        <div className="card">
          <h4 className="card-heading">App Development</h4>
          <h5 className="card-subheading">Boost User Engagement</h5>
          <ul className="ul">
            <li>Scalable apps for Long-Term business growth</li>
            <li>Optimized for higher User Retention and Interactions</li>
            <li>Solutions for B2B, B2C and C2B marketing models</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h3 className="heading">Partner with Trishoka for Better ROAS</h3>
        <p className="text">
          Your success is not just our priority—it’s our mission. Experience the power of transformative growth as Trishoka’s cutting-edge services propel your investment towards remarkable returns. Let us help you unlock unparalleled potential and achieve extraordinary results. <b>Contact us</b> today for a complimentary consultation and a comprehensive ROAS assessment. Together, we’ll pave the way to a future of limitless possibilities.
        </p>
      </div>
    </div>
  );
};

export default Roas;
