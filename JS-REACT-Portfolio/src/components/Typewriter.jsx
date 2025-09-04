import React, { useEffect, useRef, useState } from "react";
import "./Typewriter.css"; // ← this loads the CSS for the component

export default function Typewriter({
  text = "",
  speed = 45,   // ms between characters
  delay = 300,  // ms before typing starts
  className = ""
}) {
  const [out, setOut] = useState("");
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setOut(""); // reset when text changes

    if (!text) return;

    // Respect reduced-motion users
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setOut(text);
      return;
    }

    let i = 0; // index of next char to show (start at 0 to NOT skip the 2nd char)

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        // slice(0, i+1) ensures we append the next char each tick
        setOut(text.slice(0, i + 1));
        i += 1;
        if (i >= text.length) {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, speed, delay]);

  return (
    <span
      id="typewriter"                // keeps compatibility with your existing CSS
      className={`typewriter ${className}`}
      aria-label={text}
    >
      {out}
    </span>
  );
}
