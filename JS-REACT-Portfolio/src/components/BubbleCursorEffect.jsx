// src/components/BubbleCursorEffect.jsx
import React, { useEffect } from 'react';

const BubbleCursorEffect = () => {
  useEffect(() => {
    // Dynamically load the cursor-effects script if needed
    if (window.cursoreffects && window.cursoreffects.bubbleCursor) {
      new window.cursoreffects.bubbleCursor();
    } else {
      // Fallback or load the script dynamically
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/cursor-effects@latest/dist/browser.js';
      script.async = true;
      script.onload = () => {
        new window.cursoreffects.bubbleCursor();
      };
      document.body.appendChild(script);
    }
  }, []);

  return null; // No visual DOM needed
};

export default BubbleCursorEffect;
