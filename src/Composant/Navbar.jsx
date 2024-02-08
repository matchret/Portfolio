import { useState, useEffect} from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import navIcon1 from '../assets/linkedin.svg';
import navIcon2 from '../assets/github.svg';
import navIcon3 from '../assets/curriculum.svg';
import { useTranslation } from "react-i18next";
import animNav from "../assets/output.gif";
import CV from "./Pop-up/CV";


export const NavBar = () => {
    const [t, i18n]= useTranslation('translation');  //Translation i18next
    const HandleChangeLanguage = (lang) =>{
      i18n.changeLanguage(lang);
    }
  
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false);
  
    const [OpenCV, setOpenCV] = useState(false)
    OpenCV?document.body.style.overflow = "hidden":document.body.style.overflow = "auto"
  
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 40) {
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
  
    const togglePress = () => {
      if (toggled==false) {
        setToggled(true);
      } else {
        setToggled(false);
      }
    }
  
  
    return (
      <>
        <Navbar expand="lg" className={scrolled || toggled ? "scrolled" : ""} variant="dark" >
          <Container>
              <img alt="animationnav"  className="animation-nav" src={animNav} />
            <Navbar.Toggle onClick={() => togglePress()}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#banner" className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('banner')}>{t("Navbar.Ho")}</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t("Navbar.Sk")}</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t("Navbar.Proj")}</Nav.Link>
                <NavDropdown title={t("Navbar.Lan")} className='nav-dropdown' id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => HandleChangeLanguage("En")}>{t("Navbar.En")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => HandleChangeLanguage("Fr")}>{t("Navbar.Fr")}</NavDropdown.Item>
                </ NavDropdown >
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/mathieu-chr%C3%A9tien-74578922b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/matchret" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                <a href="#" onClick={() => setOpenCV(true)}><img src={navIcon3} alt="Icon" /></a>
                </div>
                    <button onClick={()=> location.href='#connect'}><span>{t("Navbar.Conne")}</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <CV open={OpenCV} onClose={()=> setOpenCV(false)}/>
      </>
    )
  }