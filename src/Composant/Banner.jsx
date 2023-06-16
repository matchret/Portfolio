import { Col, Container, Row } from "react-bootstrap";
import PhotoProfile from "../assets/blank-profile-picture.webp";
import  ArrowRightCircle  from '../assets/arrow-right-circle.svg';
import AnimationBanner from "./Animation/AnimationBanner";
import TexteBanner from '../Composant/Animation/TexteBanner';

export const Banner = () => {
    return (
        <section className="banner" id="banner">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bonjour, voici mon portfolio</span>
                        <h1>{"Je suis un : "}<span className="txt-rotate" ><TexteBanner/></span></h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt necessitatibus voluptatem recusandae soluta non enim perferendis. Beatae ullam sequi explicabo voluptates distinctio ipsa quasi rerum, est voluptas alias, asperiores cum.</p>
                        <div className="bottom-banner">
                          <img className="profile-photo" src={PhotoProfile} alt="profile-photo co" />
                          <button onClick={() => console.log('connect')}>Let's Connect <img src={ArrowRightCircle} alt="" /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <div className="animation-banner">
                            <AnimationBanner />
                        </ div >
                    </Col>
                </Row>
            </Container>
        </section>
    )
}