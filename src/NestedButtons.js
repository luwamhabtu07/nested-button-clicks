import React, { useState } from "react";

const NestedButtons = () => {
  const [message, setMessage] = useState("");

  const handleOuterClick = () => {
    setMessage("Outer button clicked!");
  };

  const handleInnerClick = (event) => {
    event.stopPropagation(); // Prevents the event from reaching the outer button
    setMessage("Inner button clicked!");
  };

  return (
    <div>
      <button onClick={handleOuterClick} style={{ padding: "20px", position: "relative" }}>
        Outer Button
        <button 
          onClick={handleInnerClick} 
          style={{ position: "absolute", left: "20px", top: "10px" }}
        >
          Inner Button
        </button>
      </button>
      <p>{message}</p>
    </div>
  );
};

export default NestedButtons;
