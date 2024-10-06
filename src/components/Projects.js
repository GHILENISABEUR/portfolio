import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/map.png";
import projImg2 from "../assets/img/pdf.png";
import projImg3 from "../assets/img/ecommerce.png";
import projImg4 from "../assets/img/chat.png";
import projImg5 from "../assets/img/world.png";
import projImg6 from "../assets/img/musique.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Map Rout optimization ",
      description: "AI ",
      imgUrl: projImg1,
    },
    {
      title: "PDF TO EXCEL",
      description: "AI model  integrated in a web page ",
      imgUrl: projImg2,
    },
    {
      title: "E commerce Website ",
      description: "web dev using javascript ",
      imgUrl: projImg3,
    },
    {
      title: "music player  ",
      description: "python script  ",
      imgUrl: projImg6,
    },
    {
      title: "Chat bot  ",
      description: "Fine tuning llm  ",
      imgUrl: projImg4,
    },
    {
      title: "world clock ",
      description: "web Development using javascript ",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I have extensive experience in developing projects in machine learning and AI, with expertise in key techniques such as regression, gradient descent, CNN, RNN, and various other algorithms. I am well-versed in natural language processing (NLP), speech recognition, computer vision, and knowledge representation. Currently, I am focused on enhancing my proficiency in large language models (LLMs) and generative AI.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
