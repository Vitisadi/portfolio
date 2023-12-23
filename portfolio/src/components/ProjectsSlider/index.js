import "./index.css"
import portfolioData from '../../data/portfolio.json'

import { useState } from 'react'
const Projects = () => {
    const [activeCard, setActiveCard] = useState(0);

    const handleClick = (cardId) => {
        setActiveCard(cardId);
        console.log(activeCard)
    };

    return (
        <div className="projects-slider-wrapper">
            <div className="projects-slider-container">
                {portfolioData.portfolio.map((item, index) => (
                    <div 
                        className={`card ${activeCard === index ? 'active' : ''}`} 
                        key={item.title + index} 
                        onClick={() => handleClick(index)}
                        style={{ backgroundImage: `url(${item.image})` }} 
                    >
                        <div className="content">
                            <p className="title">{item.name}</p>
                            <h4 className="description">{item.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(item.url)}
                            >View</button>
                        </div>
                    </div>
                    // <label 
                    //     key={item.title + index} 
                    //     className={`card ${activeCard === index ? 'active' : ''}`}
                    //     onClick={() => handleClick(index)}
                    //     style={{ backgroundImage: `url(${item.image})` }} 
                    // >
                    //     <div className="row">
                    //         <div className="icon">{index + 1}</div>
                    //         <div className="description">
                    //             <h4>{item.title}</h4>
                    //             <p>{item.description}</p>
                    //         </div>
                    //     </div>
                    // </label>
                ))}
            </div>
        </div>
    )
}


export default Projects