import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Telemetrie from "../assets/Projects/Shema.png"
import portfolio from '../assets/Projects/Portfolio.png'


export const Project = () => {
    const [t]= useTranslation('translation');  //Translation i18next

    return (
        <section className="project" id="projects">
            <Container>
                <h2>Projects</h2>
                <Row>
                <div className="card">
                    <div className="image">
                        <img src={portfolio}/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>Someone famous</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div className="card" role="">
                    <div className="image">
                        <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>Someone famous</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                </Row>
                <Row>
                <div className="card" role="telemetrie">
                    <div className="image">
                        <img src={Telemetrie}/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h3>Someone famous</h3>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                </Row>  
            </Container>
        </section>
    )
}