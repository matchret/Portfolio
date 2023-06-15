import {useState , useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhotoProfile from "../assets/blank-profile-picture.webp";
import  ArrowRightCircle  from '../assets/arrow-right-circle.svg';
import AnimationBanner from "./Animation/AnimationBanner";

export const Banner = () => {
    /*********Code pour changement de mots*************/
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="banner">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bonjour, voici mon portfolio</span>
                        <h1>{"Je suis un : "}<span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
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