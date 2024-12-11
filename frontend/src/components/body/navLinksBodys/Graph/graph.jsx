import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register required Chart.js modules
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = () => {
  const data = {
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m", "11m", "12m"],
    datasets: [
      {
        label: "Growth Curve",
        data: [10, 20, 30, 50, 60, 70, 80, 90, 95, 100, 105, 110],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "rgba(0, 0, 0, 0.6)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Growth Percentage",
        },
      },
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header */}
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Return on Investment (ROI) with Trishoka
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
            flex: "1 1 400px",
            maxWidth: "600px",
            height: "400px",
            border: "2px solid #eaeaea",
            borderRadius: "10px",
            overflow: "hidden",
            marginRight: "20px",
          }}
        >
          <Line data={data} options={options} />
        </div>
        <div
          style={{
            flex: "1 1 300px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2 style={{ color: "#3B999F" }}>Visualizing ROI</h2>
          <p style={{ color: "black", lineHeight: "1.6" }}>
            Use the graph to showcase ROI comparisons:
          </p>
          <ul style={{ color: "black", lineHeight: "1.6" }}>
  <li>Investments before and after partnering with Trishoka.</li>
  <li>Improvements in website traffic and conversions.</li>
  <li>Cost savings due to increased efficiency.</li>
  <li>Increased brand visibility and recognition through digital strategies.</li>
  <li>Improved user experience leading to higher engagement and retention.</li>
  <li>Better return on investment (ROI) from targeted digital marketing campaigns.</li>
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
    <h3 style={{ color: "#3B999F", marginBottom: "10px" }}>ROI</h3>
    <p style={{ color: "black", lineHeight: "1.6" }}>
      ROI (Return on Investment) is influenced by several key factors. Below are
      some strategies and methods to enhance business growth and profitability:
    </p>
    <ul style={{ color: "black", lineHeight: "1.8", listStyleType: "→", margin: 0, padding: "0 0 0 20px" }}>
      <li><strong>Project Awareness:</strong> Increase visibility through marketing campaigns.</li>
      <li><strong>Marketing Strategies:</strong> Optimize with WhatsApp marketing, Google ads and localized efforts.</li>
      <li><strong>Digital Awareness:</strong> Enhance website visibility and lead generation.</li>
      <li><strong>Customer Targeting:</strong> Identify and focus on key audience groups.</li>
      <li><strong>Product Demand:</strong> Align offerings with market needs and customer requirements.</li>
      <li><strong>Implementation Methods:</strong> Streamline accessibility and usability of your products.</li>
      <li><strong>Customer Reach:</strong> Expand outreach via effective digital channels and content.</li>
      <li><strong>Engaging Content:</strong> Use captivating visuals and messaging to attract attention.</li>
      <li><strong>Advertising Balance:</strong> Balance campaigns and budgets for maximum ROI.</li>
      <li><strong>Repeat Orders:</strong> Foster loyalty and repeat purchases through quality and engagement.</li>
    </ul>
    <p style={{ color: "black", lineHeight: "1.6", marginTop: "10px" }}>
      By incorporating these strategies, businesses can achieve significant growth and maximize returns on their investments.
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
      src={require("../../../../assets/blogImages/ROI5.jpeg")}
      alt="ROI Illustration"
      style={{
        width: "100%",  // Make the image width responsive
        maxWidth: "600px",  // Limit the maximum width of the image
        height: "auto",  // Maintain aspect ratio
        borderRadius: "8px",  // Optional: Rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Optional: Shadow effect
      }}
    />
  </div>
</div>





      {/* ROI Explanation */}
      <div style={{ lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
        <h3 style={{ color: "#3B999F" }}>What is Return on Investment (ROI)?</h3>
        <p style={{ color: "black" }}>
          ROI is a financial metric that measures the profitability of an investment. It indicates how much
          profit or value you gain in comparison to your investment cost.
        </p>

        <h3 style={{ color: "#3B999F" }}>Formula for ROI</h3>
        <p style={{ color: "black" }}>
          <b>ROI (%) =</b>{" "}
          <i>
            (Net Profit or Gain from Investment − Cost of Investment) / Cost of Investment × 100
          </i>
        </p>
        <p style={{ color: "black" }}>
          Example: Invest ₹10,000 in a marketing campaign and earn ₹15,000:
          <br />
          <b>ROI (%) = (₹15,000 − ₹10,000) / ₹10,000 × 100 = 50%</b>
        </p>
      </div>

      {/* ROI-Driven Approach Cards */}
      <h3 style={{ textAlign: "center", color: "#3B999F", marginBottom: "20px" }}>
        ROI-Driven Services by Trishoka
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
          <ul style={{ color: "black" }}>
            <li>Targeted strategies to reach the right audience.</li>
            <li>Measurable growth with data-driven insights.</li>
            <li>Cost-effective campaigns to maximize value.</li>
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
          <ul style={{ color: "black" }}>
            <li>Enhanced user experience for engagement.</li>
            <li>Higher conversions with optimized CTAs.</li>
            <li>Faster load times to reduce bounce rates.</li>
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
          <ul style={{ color: "black" }}>
            <li>Features to boost user engagement.</li>
            <li>Streamlined operations for efficiency.</li>
            <li>Scalable growth for long-term success.</li>
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
        <h3 style={{ color: "#3B999F", marginBottom: "10px" }}>Partner with Trishoka Today</h3>
        <p style={{ color: "black", lineHeight: "1.6" }}>
          {/* Your success is our priority. Let us show you how Trishoka’s services can transform your investments
          into substantial returns. Contact us now for a free consultation and ROI assessment. */}
          Your success is not just our priority—it’s our mission. Experience the power of transformative growth as Trishoka cutting edge services propel your investment towards remarkable returns. Let us help you unlock unparalleled potential and achieve extraordinary results.
<b style={{color:"black"}}>Contact us</b> today for a complimentary consultation and a comprehensive ROI assessment. Together, we’ll pave the way to a future of limitless possibilities.
        </p>
      </div>
    </div>
  );
};

export default Graph;
