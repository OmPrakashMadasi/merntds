import React, { useState } from 'react';

const ROICalculator = () => {
  // State variables for input values and the result
  const [investment, setInvestment] = useState('');
  const [earnings, setEarnings] = useState('');
  const [roi, setRoi] = useState(null);

  // Function to calculate ROI
  const calculateROI = () => {
    const investmentAmount = parseFloat(investment);
    const earningsAmount = parseFloat(earnings);

    if (!isNaN(investmentAmount) && !isNaN(earningsAmount) && investmentAmount > 0) {
      const result = ((earningsAmount - investmentAmount) / investmentAmount) * 100;
      setRoi(result.toFixed(2));
    } else {
      setRoi(null); // Reset ROI if input is invalid
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px 0 50px 20px', // Left-aligned, with margin on the left
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f7f7f7',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'inline-block', // Align to the left
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#3B999F' }}>ROI Calculator</h3>
      <p style={{ textAlign: 'center', fontSize: '14px', color: '#777' }}>
        Enter the investment amount and earnings to calculate ROI
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Investment Amount (₹):</label>
        <input 
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          placeholder="Enter investment amount"
          style={{
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            border: '1px solid #ccc', 
            borderRadius: '5px'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Earnings (₹):</label>
        <input 
          type="number"
          value={earnings}
          onChange={(e) => setEarnings(e.target.value)}
          placeholder="Enter earnings amount"
          style={{
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            border: '1px solid #ccc', 
            borderRadius: '5px'
          }}
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={calculateROI} 
          style={{
            padding: '10px 20px', 
            backgroundColor: '#3B999F', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Calculate ROI
        </button>
      </div>
      
      {roi !== null && (
        <p style={{ marginTop: '20px', fontSize: '18px', textAlign: 'center', color: '#333' }}>
          <b>ROI (%) = {roi}%</b>
        </p>
      )}
    </div>
  );
};

export default ROICalculator;
