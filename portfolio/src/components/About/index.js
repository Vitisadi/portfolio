import "./index.css"
import MagicReveal from "../MagicReveal"

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About</h2>
                        <p>
                            I am currently a student at Rensselaer Polytechnic Institute, dual majoring in Computer Science and Information Technology. Coding is my passion as it allows me to create all of my crazy ideas. I love exploring new designs and I am excited for what challenges the future holds!
                        </p>
                        <div className="icon-instruction">
                            <p className="hover-instruction">Move the rose to reveal more!</p>
                            <MagicReveal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
