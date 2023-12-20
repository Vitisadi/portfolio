import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../../assets/img/butterflies.gif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import AnimatedLetters from '../../AnimatedLetters'
import LogoTitle from '../../../assets/img/t-nature-logo.png'

import "./index.css"
import 'animate.css';

const Spring = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                        strArray={"Web Developer".split('')}
                        idx={20}
                    />
                    </h1>
                    <p>Aspiring computer science student and some text to put in here</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} className="bouncing" alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Spring;