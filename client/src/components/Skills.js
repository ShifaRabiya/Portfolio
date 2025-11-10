import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // assuming your styles go here

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Technologies and tools I work with</p>
              <Tab.Container id="skills-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first" id="skills-tabs-tab-first">
                      Frontend
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" id="skills-tabs-tab-second">
                      Backend
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" id="skills-tabs-tab-third">
                      Database
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" id="skills-tabs-tab-four">
                      Tools
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="skills-list">
                      React.js, JavaScript, HTML5, CSS3, TypeScript
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="skills-list">
                      C, Python, Java, Node.js, Express.js
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="skills-list">
                      MongoDB, MySQL
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="skills-list">
                      Git, GitHub, VS Code, Figma, Canva
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
