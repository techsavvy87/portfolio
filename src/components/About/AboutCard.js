import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ryan Alcantara</span>
            from <span className="purple"> Philippines.</span>
            <br />
            I am currently working as a software developer at IT field.
            <br />I am a Full-Stack Developer specializing in React and Node.js,
            with strong expertise in building scalable, high-performance web
            applications. I design and develop API-driven systems with clean,
            maintainable architecture and a strong focus on user experience and
            reliability.
            <br />I also specialize in AI and chatbot integrations, including
            ChatGPT-powered solutions, enabling businesses to automate
            workflows, enhance customer engagement, and deliver intelligent
            digital products.
            <br />
            Driven by modern JavaScript technologies and open-source
            collaboration, I continuously strive to build efficient, secure, and
            future-ready software solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
