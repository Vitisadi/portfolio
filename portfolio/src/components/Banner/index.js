import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/butterflies.gif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/img/t-nature-logo.png'

import "./index.css"
import 'animate.css';

const Banner = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4500)
    }, [])


    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <span className={`${letterClass} _12`}>H</span>
                    <span className={`${letterClass} _13`}>i!</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <img
                        className="logo-img"
                        src={LogoTitle}
                        alt="JavaScript Developer Name, Web Developer Name"
                    />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"imothy".split('')}
                        idx={16}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Full Stack Developer".split('')}
                        idx={23}
                    />
                    </h1>
                    <p>Student / Scuba Diver / Athlete </p>
                    <button>
                    <a href="https://docs.google.com/document/d/1EP1qe_PEQnfkvPLsR4FfZb-uxiSqHykJ/edit?usp=sharing&ouid=112826554107963651538&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View Resume <ArrowRightCircle size={25} /></a>
                    </button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div>
                <img src={headerImg} alt="Header Img"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Banner;