import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Telemetrie from "../assets/Projects/Shema.png"
import portfolio from '../assets/Projects/Portfolio.png'
import ReseauAerien from '../assets/Projects/ReseauAerien.png'


export const Project = () => {
    const [t]= useTranslation('translation');  //Translation i18next

    return (
        <section className="project" id="projects">
            <Container>
                <h2>{t("Projects.title")}</h2>
                <p>{t("Projects.text")}</p>
                <Row>
                <div className="card">
                    <div className="image">
                        
                        <img src={portfolio} alt='…' loading= 'lazy' />
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>{t("Projects.portfolio.title")}</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <a>{t("Projects.more")}</a>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div className="card" role="">
                    <div className="image">
                        <img src={ReseauAerien} alt='…' loading= 'lazy'/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>{t("Projects.algo.title")}</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <a>{t("Projects.more")}</a>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div className="card" role="telemetrie">
                    <div className="image">
                        <img src={Telemetrie} alt='…' loading= 'lazy'/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>{t("Projects.ESP.title")}</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <a>{t("Projects.more")}</a>
                        </div>
                    </div>
                </div>
                </Row>  
            </Container>
        </section>
    )
}