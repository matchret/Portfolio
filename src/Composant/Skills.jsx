import React from 'react';
import { Container, Row, Carousel } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Meter1 from '../assets/meter1.svg';
import Meter2 from '../assets/meter2.svg';
import Meter3 from '../assets/meter3.svg';
import LogoCPlus from '../assets/Image/Technology/C++_Logo.png';
import LogoC from '../assets/Image/Technology/C-Sharp-logo.png';
import LogoPython from '../assets/Image/Technology/Python-logo.png';
import LogoReact from '../assets/Image/Technology/React-icon.png';
import LogoNodeJS from '../assets/Image/Technology/Node.js_logo.svg';
import LogoHTML from '../assets/Image/Technology/HTML5_logo.png';
import LogoCss from '../assets/Image/Technology/CSS3_logo.png';
import LogoCisco from '../assets/Image/Technology/logo-cisco.png';
import LogoPacket from '../assets/Image/Technology/packet-Tracer.png';
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
                        <LazyLoadImage className="d-block" alt="First slide"  src={Meter1} effect="blur" />
                            <Carousel.Caption>
                                <h4>{t("Skills.s1")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="2 slide" src={Meter2} effect="blur" />
                            <Carousel.Caption>
                            <h4>{t("Skills.s2")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter3}  effect="blur" />
                            <Carousel.Caption>
                                <h4>{t("Skills.s3")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter2} effect="blur"/>
                            <Carousel.Caption>
                                <h4>{t("Skills.s4")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter2} effect="blur" />
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
                                <LazyLoadImage alt="HTML"  src={LogoNodeJS}  effect="blur"/>
                                <LazyLoadImage alt="Python" src={LogoPython} effect="blur" />
                            </div>                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='framework'>
                                <LazyLoadImage alt="C++" src={LogoCPlus} effect="blur"/>
                                <LazyLoadImage alt="C" src={LogoC}  effect="blur"/>
                                <LazyLoadImage alt="Cisco" src={LogoCisco}  effect="blur"/>
                                <LazyLoadImage alt="HTML" src={LogoPacket}  effect="blur"/>
                                <LazyLoadImage alt="LogoPython" src={LogoPython} effect="blur"/>
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
                    <li><a href="https://nodejs.org/" target='_blank'>Node.js</a></li>
                    <li><a href="https://git-scm.com/" target='_blank'>Git</a></li>
                    <li><a href="https://graphql.org/" target='_blank'>Graphql</a></li>
                    <li><a href="https://aws.amazon.com/" target='_blank'>AWS</a></li>
                </ul>
                </Row>
        </section>
        </Container>
        </section>
    );

}


