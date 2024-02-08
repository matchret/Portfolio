import React from 'react';
import { Container, Row, Carousel } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Meter95 from '../assets/meter1.svg';
import Meter80 from '../assets/meter2.svg';
import Meter90 from '../assets/meter3.svg';

import LogoReact from '../assets/Image/Technology/React-icon.png';
import LogoJS from '../assets/Image/Technology/JavaScript-Logo.png';
import LogoHTML from '../assets/Image/Technology/HTML5_logo.png';
import LogoCss from '../assets/Image/Technology/CSS3_logo.png';
import LogoAWS from '../assets/Image/Technology/AWS-Logo.png'

import LogoCPlus from '../assets/Image/Technology/C++_Logo.png';
import LogoPython from '../assets/Image/Technology/Logo_Python.png';
import LogoGit from '../assets/Image/Technology/Git_Icon.png'
import LogoGraphql from '../assets/Image/Technology/GraphQL_Logo.png'
import LogoCisco from '../assets/Image/Technology/Cisco-logo.png';

import LogoPacket from '../assets/Image/Technology/packet-Tracer.png';
import LogoSolarWind from '../assets/Image/Technology/Solar_wind.png';
import LogoUbiquiti from '../assets/Image/Technology/Ubiquiti_Logo.png';
import LogoLinux from '../assets/Image/Technology/LINUX-LOGO.png';
import LogoWindows from '../assets/Image/Technology/Windows_logo.png';

import { useTranslation } from 'react-i18next';



export const Skills = ()=>{
    const [t]= useTranslation('translation');  //Translation i18next

    return (
    <section className='skill-fade'>
        <Container>  
        <section className='skill' id='skills'>       
            <Row> 
                <div className='skill-box'>
                    <h2>{t("Skills.title")}</h2>
                    <p>{t("Skills.text")}</p>
                </ div>
            </ Row>
                <Row>
                    <Carousel slide="true">
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="First slide"  src={Meter95} effect="blur" />
                            <Carousel.Caption>
                                <h4>{t("Skills.s1")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="2 slide" src={Meter95} effect="blur" />
                            <Carousel.Caption>
                            <h4>{t("Skills.s2")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter80}  effect="blur" />
                            <Carousel.Caption>
                                <h4>{t("Skills.s3")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter80} effect="blur"/>
                            <Carousel.Caption>
                                <h4>{t("Skills.s4")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter90} effect="blur" />
                            <Carousel.Caption>
                                <h4>{t("Skills.s5")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>            
                </Row>
                <Row>      
                    <h3>{t("Skills.tech")}</h3>
                </Row>
                <Row>
                    <Carousel slide="true">
                        <Carousel.Item>
                            <div className='framework'>
                                <LazyLoadImage alt="React"  src={LogoReact} effect="blur" />
                                <LazyLoadImage alt="HTML" src={LogoHTML} effect="blur" />
                                <LazyLoadImage alt="CSS" src={LogoCss} effect="blur"  />
                                <LazyLoadImage alt="JS"  src={LogoJS}  effect="blur"/>
                                <LazyLoadImage alt="AWS" src={LogoAWS} effect="blur" />
                            </div>                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='framework'>
                                <LazyLoadImage alt="C++" src={LogoCPlus} effect="blur"/>
                                <LazyLoadImage alt="Python" src={LogoPython}  effect="blur"/>
                                <LazyLoadImage alt="Git" src={LogoGit}  effect="blur"/>
                                <LazyLoadImage alt="Graphql" src={LogoGraphql}  effect="blur"/>
                                <LazyLoadImage alt="Cisco" src={LogoCisco} effect="blur"/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='framework'>
                                <LazyLoadImage alt="PacketTracer" src={LogoPacket}  effect="blur"/>
                                <LazyLoadImage alt="SolarWind" src={LogoSolarWind}  effect="blur"/>
                                <LazyLoadImage alt="Ubiquiti" src={LogoUbiquiti}  effect="blur"/>
                                <LazyLoadImage alt="Linux" src={LogoLinux} effect="blur"/>
                                <LazyLoadImage alt="Windows" src={LogoWindows} effect="blur"/>
                            </div>
                        </Carousel.Item>
                    </Carousel>            
                </Row>
                <Row>
                <ul>
                    <li><a href="https://isocpp.org/" target='_blank'>C++</a></li>
                    <li><a href="https://isocpp.org/" target='_blank'>C</a></li>
                    <li><a href="https://www.python.org/" target='_blank'>Python</a></li>
                    <li><a href="https://reactjs.org/" target='_blank'>React</a></li>
                    <li><a href="https://html.spec.whatwg.org/multipage/" target='_blank'>HTML</a></li>
                    <li><a href="https://www.w3.org/TR/CSS/#css" target='_blank'>CSS</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>Java Script</a></li>
                    <li><a href="https://www.cisco.com/" target='_blank'>Cisco</a></li>
                    <li><a href="https://www.netacad.com/courses/packet-tracer" target='_blank'>Packet Tracer</a></li>
                    <li><a href="https://www.ui.com/" target='_blank'>Ubiquiti</a></li>
                    <li><a href="https://git-scm.com/" target='_blank'>Git</a></li>
                    <li><a href="https://graphql.org/" target='_blank'>Graphql</a></li>
                    <li><a href="https://aws.amazon.com/" target='_blank'>AWS</a></li>
                    <li><a href="https://www.solarwinds.com/" target='_blank'>Solar Wind</a></li>
                    <li><a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/" target='_blank'>Linux</a></li>
                    <li><a href="https://www.microsoft.com/en-us/windows/business" target='_blank'>Windows</a></li>  
                </ul>
                </Row>
        </section>
        </Container>
        </section>
    );
// WireShark,SQL,Google test
}


