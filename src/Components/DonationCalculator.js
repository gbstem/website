import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DonationCalculator = () => {
  const gbSTEMSemesterCost = 1500;
  const [donationAmount, setDonationAmount] = useState(150);
  const percentageFunded = Math.round((donationAmount / gbSTEMSemesterCost) * 100);

  const handleSliderChange = (value) => {
    setDonationAmount(value);
  };

  return (
    <div className="container">
      <h2>Donation Calculator</h2>
      <p>
        We require $1500 each semester to fund our program. Please use the slider below to see how your donation will help us reach our goal.
      </p>
      <div className="form-group">
        <label htmlFor="donationAmount">Donation Amount: ${donationAmount}</label>
        <Slider
          id="donationAmount"
          min={0}
          max={1500}
          step={25}
          value={donationAmount}
          onChange={handleSliderChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="semesterFunded">Semester Funded: {percentageFunded}%</label>
      </div>
    </div>
  );
};

export default DonationCalculator;
