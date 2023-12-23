import "./index.css"

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectSlider from "../ProjectsSlider";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p className="desc">Welcome to My Creations! Here, you'll find a colorful array of projects that I've poured my heart and soul into. </p>
                <ProjectSlider />
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects