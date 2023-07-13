import { Col, Container, Row } from "react-bootstrap";
import PhotoProfile from "../assets/Image/Banner/profile.jpg";
import  ArrowRightCircle  from '../assets/arrow-right-circle.svg';
import AnimationBanner from "./Animation/AnimationBanner";
import TexteBanner from '../Composant/Animation/TexteBanner';
import { useTranslation } from "react-i18next";

//const AnimationBanner = lazy(() => import('./Animation/AnimationBanner'));

export const Banner = () => {
    const [t]= useTranslation('translation');  //Translation i18next

    return (
        <section className="banner" id="banner">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{t("banner.tag")}</span>
                        <h1>{t("banner.je")}<span className="txt-rotate" ><TexteBanner/></span></h1>
                        <p>{t("banner.Presentation")}</p>
                        <div className="bottom-banner">
                            <img className="profile-photo" src={PhotoProfile} alt="profile-photo co" />
                            <button onClick={()=> location.href='#connect'}><span>{t("Navbar.Conne")} <img src={ArrowRightCircle} alt="" /></span></button>
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