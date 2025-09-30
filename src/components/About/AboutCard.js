import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daniel Doe </span>
            from <span className="purple"> Australia.</span>
            <br />
            I am currently working as a software developer at IT field.
            <br />
            Results-driven Web Developer & Backend Engineer with over 5 years of
            experience designing, building, and optimizing responsive, scalable
            web applications. <br /> Skilled at writing clean, maintainable
            code, integrating APIs, and implementing performance-focused
            solutions that enhance user experience. <br /> Strong background in
            project leadership and Agile delivery, with a proven record of
            reducing system downtime, improving efficiency, and driving cost
            savings. <br /> Passionate about leveraging technical expertise and
            collaborative leadership to deliver innovative digital solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
