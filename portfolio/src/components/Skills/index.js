import "./index.css"
import MagicReveal from "../MagicReveal"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About</h2>
                        <p>
                            I am currently a student at Rensselaer Polytechnic institute duel majoring in computer science 
                            <br></br> 
                            and information technology with a minor in Cognitive Science of Artificial Intelligence Coding is 
                            <br></br> 
                            my passion, as it allows me to create all of my crazy ideas. I love exploring new ideas and I am 
                            <br></br> 
                            excited for what challenges the future holds!                            
                        </p>
                        <MagicReveal />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
