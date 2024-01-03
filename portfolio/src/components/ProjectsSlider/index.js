import "./index.css"
// import portfolioData from '../../data/portfolio.json'
import flower1 from "../../assets/img/flower1.png";
import flower2 from "../../assets/img/flower2.png";
import flower3 from "../../assets/img/flower3.png";

import { useState } from 'react'
const Projects = () => {
    const portfolioData =  [
        {
            "image": flower1,
        },
        {
            "image": flower2,
        },
        {
            "image": flower3,
        }
    ]



    const [activeCard, setActiveCard] = useState(1);

    const handleClick = (cardId) => {
        setActiveCard(cardId);
        console.log(activeCard)
    };

    return (
        <div className="projects-slider-wrapper">
            <div className="projects-slider-container">
                {portfolioData.map((item, index) => (
                    <div 
                        className={`card ${activeCard === index ? 'active' : ''}`} 
                        key={item.title + index} 
                        onClick={() => handleClick(index)}
                        style={{ backgroundImage: `url(${item.image})` }} 
                    >
                        
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Projects