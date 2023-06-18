import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/icon-linkedin.svg';
import navIcon2 from '../assets/icon-facebook.svg';
import navIcon3 from '../assets/icon-instagram.svg';
import navIcon4 from '../assets/github-mark.svg';
import animNav from "../assets/output.gif";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img className='animation-nav' src={animNav} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-foot">
            <a href="https://www.linkedin.com/in/mathieu-chr%C3%A9tien-74578922b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.facebook.com/mathieu.chretien.14" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            <a href="" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            <a href="https://www.instagram.com/matchret/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}