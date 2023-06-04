
import { useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnimationNav from "./Animation/AnimationNav";
import navIcon1 from '../assets/icon-linkedin.svg';
import navIcon2 from '../assets/icon-facebook.svg';
import navIcon3 from '../assets/icon-instagram.svg';
import navIcon4 from '../assets/github-mark.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
        <Container>
            <AnimationNav/>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mathieu-chr%C3%A9tien-74578922b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://www.facebook.com/mathieu.chretien.14" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                <a href="" target="_blank"><img src={navIcon4} alt="Icon" /></a>
                <a href="https://www.instagram.com/matchret/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              </div>
                  <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}