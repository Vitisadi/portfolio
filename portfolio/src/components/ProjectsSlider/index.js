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
                    <label 
                        key={item.title + index} // Unique key for each element
                        className={`card ${activeCard === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                        style={{ backgroundImage: `url(${item.image})` }} // Set background image
                    >
                        <div className="row">
                            <div className="icon">{index + 1}</div>
                            <div className="description">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </label>
                ))}
                {/* <label 
                    className={`card ${activeCard === 'c1' ? 'active' : ''}`}
                    onClick={() => handleClick('c1')}
                >
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <p>Winter has so much to offer -
                            creative activities</p>
                        </div>
                    </div>
                </label>

                <label 
                    className={`card ${activeCard === 'c2' ? 'active' : ''}`}
                    onClick={() => handleClick('c2')}
                >
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <p>Winter has so much to offer -
                            creative activities</p>
                        </div>
                    </div>
                </label>

                <label 
                    className={`card ${activeCard === 'c3' ? 'active' : ''}`}
                    onClick={() => handleClick('c3')}
                >
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <p>Winter has so much to offer -
                            creative activities</p>
                        </div>
                    </div>
                </label> */}
            </div>
        </div>
    )
}


export default Projects