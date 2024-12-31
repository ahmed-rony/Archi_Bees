import React, { useState, useEffect } from "react";
import "./AnimationLoop.scss";

const AnimationLoop = () => {
  const [text] = useState("ARCH"); // Fixed text to animate
  const [suckingLetters, setSuckingLetters] = useState([]); // Track which letters are being sucked

  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, 2000); // Trigger animation every 10 seconds

    startAnimation(); // Trigger first animation on mount

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const startAnimation = () => {
    const letters = Array.from(text);
    const randomOrder = [...letters.keys()].sort(() => Math.random() - 0.5); // Shuffle the sucking order
    const suckingSequence = [];

    randomOrder.forEach((index, animationIndex) => {
      setTimeout(() => {
        suckingSequence.push(index); // Add letter to the sucking sequence
        setSuckingLetters([...suckingSequence]); // Update state
      }, animationIndex * 500); // Stagger sucking animations
    });

    setTimeout(() => setSuckingLetters([]), randomOrder.length * 500 + 2000); // Reset state after animation ends
  };

  return (
    <div className="animation-container">
      <div className="circle">
        {Array.from(text).map((letter, index) => (
          <span
            key={index}
            className={`circle-text ${suckingLetters.includes(index) ? "sucking" : ""}`}
            style={{
              "--index": index,
              "--total": text.length,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimationLoop;
