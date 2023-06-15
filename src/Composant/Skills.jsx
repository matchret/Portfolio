import React from 'react';
import { Container, Row, Carousel } from "react-bootstrap";
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


export const Skills = ()=>{

    return (
        <Container>  
        <section className='skill' id='skills'>       
            <Row> 
                <div className='skill-box'>
                    <h2>Skills</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos, laudantium, dolore autem laboriosam ducimus quam id praesentium unde soluta error corrupti ipsum possimus veritatis, omnis perferendis dolorem dolor nihil?</p>
                </ div>
            </ Row>
                <Row>
                    <Carousel slide="true">
                        <Carousel.Item>
                            <img className="d-block" src={Meter1} alt="First slide" />
                            <Carousel.Caption>
                                <h4>First slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={Meter2} alt="Second slide" />
                            <Carousel.Caption>
                            <h4>Second slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={Meter3} alt="Third slide" />
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={Meter3} alt="Third slide" />
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={Meter3} alt="Third slide" />
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={Meter3} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>            
                </Row>
                <Row>      
                    <h3>Used technology</h3>
                </Row>
                <Row>
                    <Carousel slide="true">
                        <Carousel.Item>
                            <div className='framework'>
                                <img src={LogoHTML} alt="HTML"/>
                                <img src={LogoCss} alt='CSS'/>
                                <img src={LogoNodeJS} alt='Node.js'/>
                                <img src={LogoReact} alt='React'/>
                                <img src={LogoPython} />
                            </div>                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='framework'>
                                <img src={LogoCPlus} alt="C++"/>
                                <img src={LogoC} alt='C' />
                                <img src={LogoCisco} alt="Cisco"/>
                                <img src={LogoPacket} alt='Packet-tracer'/>
                                <img src={LogoPython} alt='Python'/>
                            </div>
                        </Carousel.Item>
                    </Carousel>            
                </Row>
        </section>
        </Container>
    );

}


