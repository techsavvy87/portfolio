import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import AIsign from "../../Assets/Projects/AIsign.png";
import spiritual from "../../Assets/Projects/spiritual.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIsign}
              isBlog={false}
              title="AI-Powered Tax E-Signature & E-Filing Automation System"
              description="Built an AI-powered solution to automate e-signatures and e-filing for IRS tax forms (8879, W-2), enabling secure, compliant, and efficient digital tax document processing."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spiritual}
              isBlog={false}
              title="Spiritual Guidance & Self-Liberation Platform"
              description="Designed and developed a spiritual guidance platform that combines ancient wisdom with modern spiritual practices to support individuals on their journey toward self-discovery and inner freedom. The platform provides structured guidance to help users clear karmic patterns, awaken their true self, and embrace spiritual sovereignty in their daily lives."
              ghLink="https://github.com/soumyajit4419/Spiritual-Guidance-Platform"
              demoLink="https://spiritual.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
