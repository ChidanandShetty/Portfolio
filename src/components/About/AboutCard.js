import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chris Shetty</span> from{" "}
            <span className="purple">Texas, USA</span> (originally Mumbai, India).
            <br />
            I am currently working as a <span className="purple">React Developer</span> at The Raymond Corporation.
            <br />
            I hold a <span className="purple">Master’s degree in Computer Science</span> from Binghamton University, SUNY.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> India’s T1 Esports Athlete
            </li>
            <li className="about-activity">
              <ImPointRight /> Professional Table Tennis Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with impact!"
          </p>
          <footer className="blockquote-footer">Chris Shetty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
