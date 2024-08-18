import "./index.css"
// import portfolioData from '../../data/portfolio.json'
import plan from "../../assets/img/plan.webp";
import build from "../../assets/img/build.webp";
import deliver from "../../assets/img/deliver.webp";

import { useState } from 'react'
const ContactSlider = () => {
    const portfolioData =  [
        {
            "image": plan,
            "title": "Plan"
        },
        {
            "image": build,
            "title": "Build"
        },
        {
            "image": deliver,
            "title": "Deliver"
        }
    ]



    const [activeCard, setActiveCard] = useState(0);

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
                        <div className="row">
                            <div className="icon">{index + 1}</div>
                            <div className="description">
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ContactSlider