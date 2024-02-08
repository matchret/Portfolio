import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Telemetrie from "../assets/Projects/Shema.png"
import portfolio from '../assets/Projects/Portfolio.png'
import ReseauAerien from '../assets/Projects/ReseauAerien.png'
import Coming from "./Pop-up/coming";
import ESP from "./Pop-up/ESP";
import Portfolio from "./Pop-up/Portfolio";

export const Project = () => {
    const [t]= useTranslation('translation');  //Translation i18next

    const [Open1, setOpen1] = useState(false) 
    const [Open2, setOpen2] = useState(false)
    const [Open3, setOpen3] = useState(false)

    Open1||Open2||Open3?document.body.style.overflow = "hidden":document.body.style.overflow = "auto" //disable body scroll modal

    useEffect(() => {document.body.style.overflow == Open1 ? 'hidden' : 'auto'})

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
                            <p>{t("Projects.portfolio.text")}</p>
                            <a  onClick={()=> setOpen3(true)}>{t("Projects.more")}</a>
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
                            <p>{t("Projects.algo.text")}</p>
                            <a  onClick={()=> setOpen2(true)}>{t("Projects.more")}</a>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div className="card">
                    <div className="image">
                        <img src={Telemetrie} alt='…' loading= 'lazy'/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>{t("Projects.ESP.title")}</h3>
                            <p>{t("Projects.ESP.text")}</p>
                            <a onClick={()=> setOpen1(true)}>{t("Projects.more")}</a>
                        </div>
                    </div>
                </div>
                </Row>  
            </Container>
            <Portfolio open={Open3} onClose={()=> setOpen3(false)}/>
            <Coming open={Open2} onClose={()=> setOpen2(false)}/>
            <ESP open={Open1} onClose={()=> setOpen1(false)}/>
        </section>
    )
}