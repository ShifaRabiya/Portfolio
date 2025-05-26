import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sk1 from "../assets/img/sk1.png";
import sk2 from "../assets/img/sk2.png";
import sk3 from "../assets/img/sk3.png";
import sk4 from "../assets/img/sk4.png";
import sk5 from "../assets/img/sk5.png";
/*import colorSharp from "../assets/img/colorSharp.png";*/

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={sk1} alt="Image"/>
                                <h5>HTML CSS</h5>
                            </div>
                            <div className="item">
                                <img src={sk3} alt="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={sk4} alt="Image"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={sk2} alt="Image"/>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={sk2} alt="Image"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={sk4} alt="Image"/>
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*<img className="background-image-left" src = {colorSharp}/>*/}
        </section>
    )
}