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
    <div className="MainContent">
      <h3 className='roi'>ROI Calculator</h3>
      <p className='content'>
        Enter the investment amount and earnings to calculate ROI
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label className='investment'>Investment Amount (₹):</label>
        <input 
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          placeholder="Enter investment amount"
          className='input1'
      
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label className='investment'>Earnings (₹):</label>
        <input 
          type="number"
          value={earnings}
          onChange={(e) => setEarnings(e.target.value)}
          placeholder="Enter earnings amount"
          className='input1'
      
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={calculateROI} 
         className='button'
        >
          Calculate ROI
        </button>
      </div>
      
      {roi !== null && (
        <p className='roicontent'>
          <b>ROI (%) = {roi}%</b>
        </p>
      )}
    </div>
  );
};

export default ROICalculator;
