import React, { useState, useEffect } from "react";

function Counter() {
  const [counters, setCounters] = useState([
    { label: "Students", target: 1000, value: 0 },
    { label: "Instructors", target: 200, value: 0 },
    { label: "Courses Offered", target: 14, value: 0 },
    { label: "% Volunteer Driven", target: 100, value: 0 }
  ]);

  useEffect(() => {
    const updateCounters = () => {
      setCounters(prevCounters => {
        return prevCounters.map(counter => {
          const { target, value } = counter;
          const step = Math.ceil(target / 100); // Increase the value in 100 steps
          const newValue = Math.min(value + step, target);
          return { ...counter, value: newValue };
        });
      });
    };

    const interval = setInterval(updateCounters, 20); // Update counters every 50 milliseconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="container p-5 text-white">
      <div className="row">
        {counters.map((counter, index) => (
          <div key={index} className="col-3 text-center">
            <div className="counter display-4" data-target={counter.target}>
              {counter.value}
            </div>
            <h3>{counter.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
