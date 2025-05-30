import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiPython,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiAngular,
  SiAmazonaws,
  SiExpress,
  SiNextdotjs, // ✅ Import Next.js icon
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col> {/* ✅ Next.js added */}
      <Col xs={4} md={2} className="tech-icons"><SiRedux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAngular /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>

      {/* Backend / API */}
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>

      {/* DevOps / Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Techstack;
