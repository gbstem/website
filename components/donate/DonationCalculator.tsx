"use client";

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function DonationCalculator() {
  const gbSTEMSemesterCost = 1500;
  const [donationAmount, setDonationAmount] = useState(150);
  const percentageFunded = Math.round((donationAmount / gbSTEMSemesterCost) * 100);

  const handleSliderChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setDonationAmount(value);
    }
  };

  return (
    <div className="container">
      <h2>Donation Calculator</h2>
      <p>
        We require $1500 each semester to fund our program. Please use the slider below to see how your donation will help us reach our goal.
      </p>
      <div className="form-group mb-4 mt-4">
        <label htmlFor="donationAmount" className="fw-bold mb-2">Donation Amount: ${donationAmount}</label>
        <Slider
          min={0}
          max={1500}
          step={25}
          value={donationAmount}
          onChange={handleSliderChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="semesterFunded" className="fw-bold">Semester Funded: {percentageFunded}%</label>
      </div>
    </div>
  );
}
