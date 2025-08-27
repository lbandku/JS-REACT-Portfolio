// src/components/Typewriter.jsx
import React, { useState, useEffect } from "react";
import "./Typewriter.css";

const Typewriter = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 className="typewriter-text">
      {displayedText}
      <span className="cursor" />
    </h2>
  );
};

export default Typewriter;
