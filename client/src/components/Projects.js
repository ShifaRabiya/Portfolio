import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import {ProjectCards} from "./ProjectCards";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import startitup from "../assets/img/startitup.png";
import mindease from "../assets/img/mindease.png"

export const Projects = () => {

    const projects = [
        {
            title: "Start It Up",
            description: "A web portal to connect, mentor, and support student startup teams.",
            imgUrl: startitup,
            url: "https://startitup.brikcommunity.com"
        },
        {
            title: "Read-It",
            description: "Book Suggestion Website",
            imgUrl: projImg1,
            url: "https://read-it-six.vercel.app/"
        },
        {
            title: "Mind Ease",
            description: "A mental wellness platform with mood tracking and journaling features.",
            imgUrl: mindease,
            url: "https://mind-ease-beige-eight.vercel.app/"
        },
        {
            title: "Egg Hunt",
            description: "Egg Catcher Game",
            imgUrl: projImg5,
            url: "https://egg-hunt-game.vercel.app/"
        },
        {
            title: "India Unveiled",
            description: "Indian Culture & Heritage Website",
            imgUrl: projImg2,
            url: "https://india-unveiled.vercel.app/"
        },
        {
            title: "MealMate",
            description: "Hostel Mess Management System",
            imgUrl: projImg4,
        }
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.slice(0, 3).map((project, index) => (
                                    <ProjectCards 
                                        key={index}
                                        {...project}
                                    />
                                    ))
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                {
                                    projects.slice(3).map((project, index) => (
                                    <ProjectCards 
                                        key={index + 3}
                                        {...project}
                                    />
                                    ))
                                }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}