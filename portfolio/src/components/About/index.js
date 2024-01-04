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
                            I am currently a student at Rensselaer Polytechnic Institute, duel majoring in Computer Science 
                            <br></br> 
                            and Information Technology.Coding is my passion, as it allows me to create all of my crazy ideas. 
                            <br></br> 
                            I love exploring new designs and am excited for what challenges the future holds!       
                                                 
                        </p>
                        <MagicReveal />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
