import "./index.css"

import { Container, Row, Col } from "react-bootstrap";
// import ProjectSlider from "../ProjectsSlider";
import ProjectBlocks from "../ProjectBlocks";
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
              <div className="project-bx">
                <h2>Projects</h2>
                <p className="desc">Welcome to My Creations! Here, you'll find a colorful array of projects that I've poured my heart and soul into. </p>
                <ProjectBlocks /> 
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects