import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import {ProjectCards} from "./ProjectCards";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.jpg";
import projImg4 from "../assets/img/projImg4.png";
/*import colorsharp2 from "../assets/components/colorsharp2.png"*/

export const Projects = () => {

    const projects = [
        {
            title: "Read-It",
            description: "Book Suggestion Website",
            imgUrl: projImg1,
        },
        {
            title: "India Unveiled",
            description: "Indian Culture & Heritage Website",
            imgUrl: projImg2,
        },
        {
            title: "EYELIV",
            description: "Eyewear Inventory Management System",
            imgUrl: projImg3,
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
                        <p>About projects</p>
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
            {/*<img className="background-image-right" src={colorsharp}></img>*/}
        </section>
        
    )
}