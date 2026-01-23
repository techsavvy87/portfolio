import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer (React, Node.js)",
          "AI & Chatbot Integration Specialist",
          "JavaScript & Modern Web Technologies",
          "Clean Code. Scalable Solutions.",
          "API & Database Driven Applications",
          "Open Source Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
