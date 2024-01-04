import "./index.css"
// import portfolioData from '../../data/portfolio.json'
import discover from "../../assets/img/discover.png";
import design from "../../assets/img/design.png";
import deliver from "../../assets/img/deliver.png";

import { useState } from 'react'
const ContactSlider = () => {
    const portfolioData =  [
        {
            "image": discover,
            "title": "Discover"
        },
        {
            "image": design,
            "title": "Design"
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
                        <div class="row">
                            <div class="icon">{index + 1}</div>
                            <div class="description">
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