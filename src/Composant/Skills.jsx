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
                        <LazyLoadImage className="d-block" alt="First slide"  src={Meter1}/>
                            <Carousel.Caption>
                                <h4>First slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="2 slide" src={Meter2} />
                            <Carousel.Caption>
                            <h4>Second slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" src={Meter3} />
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" height={Meter2.height} src={Meter2} width={Meter2.width}/>
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" height={Meter2.height} src={Meter2} width={Meter2.width} />
                            <Carousel.Caption>
                                <h4>Third slide label</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <LazyLoadImage className="d-block" alt="Third slide" height={Meter2.height} src={Meter2} width={Meter2.width}/>
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
                                <LazyLoadImage alt="React" height={LogoReact.height} src={LogoReact} width={LogoReact.width}  />
                                <LazyLoadImage alt="HTML" height={LogoHTML.height} src={LogoHTML} width={LogoHTML.width}  />
                                <LazyLoadImage alt="CSS" height={LogoCss.height} src={LogoCss} width={LogoCss.width}  />
                                <LazyLoadImage alt="HTML" height={LogoNodeJS.height} src={LogoNodeJS} width={LogoNodeJS.width}  />
                                <LazyLoadImage alt="Python" height={LogoPython.height} src={LogoPython} width={LogoPython.width}/>
                            </div>                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='framework'>
                                <LazyLoadImage alt="C++" height={LogoCPlus.height} src={LogoCPlus} width={LogoCPlus.width} />
                                <LazyLoadImage alt="C" height={LogoC.height} src={LogoC} width={LogoC.width} />
                                <LazyLoadImage alt="Cisco" height={LogoCisco.height} src={LogoCisco} width={LogoCisco.width} />
                                <LazyLoadImage alt="HTML" height={LogoPacket.height} src={LogoPacket} width={LogoPacket.width} />
                                <LazyLoadImage alt="LogoPython" height={LogoPython.height} src={LogoPython} width={LogoPython.width} />
                            </div>
                        </Carousel.Item>
                    </Carousel>            
                </Row>
        </section>
        </Container>
    );

}


