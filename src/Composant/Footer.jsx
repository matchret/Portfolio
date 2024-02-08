import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/linkedin.svg';
import navIcon2 from '../assets/github.svg';
import navIcon3 from '../assets/curriculum.svg';
import animNav from "../assets/output.gif";
import CV from './Pop-up/CV';

export const Footer = () => {
	const [OpenCV, setOpenCV] = useState(false)
  OpenCV?document.body.style.overflow = "hidden":document.body.style.overflow = "auto"

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img alt="animationnav" className='animation-nav' src={animNav} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-foot">
            <a href="https://www.linkedin.com/in/mathieu-chr%C3%A9tien-74578922b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/matchret" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            <a onClick={() => setOpenCV(true)}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      <CV open={OpenCV} onClose={()=> setOpenCV(false)}/>
    </footer>
  )
}