import "./index.css"
// import portfolioData from '../../data/portfolio.json'
import mathWhispererImg from "../../assets/img/projects/mathWhisperer.png";
import connect4Img from "../../assets/img/projects/connect4.png";
import imageRecognitionImg from "../../assets/img/projects/image-recognition.png";
import cartxImg from "../../assets/img/projects/cartx.png";
import overlordImg from "../../assets/img/projects/overlord.png";
import glibbyImg from "../../assets/img/projects/glibby.gif";


import { useState } from 'react'
const Projects = () => {
    const portfolioData =  [
        {
            "image": mathWhispererImg,
            "title": "Math Whisperer",
            "description": "Hack RPI 2023 - React / OpenAI / Wolfram Alpha",
            "url": "https://devpost.com/software/mathwhisperer"
        },
        {
            "image": connect4Img,
            "title": "Connect 4 AI Challenge",
            "description": "Co-Champion - Python",
            "url": "https://github.com/Vitisadi/connect-four-AI"
        },
        {
            "image": imageRecognitionImg,
            "title": "Image Recognition Neural Network",
            "description": "PyTorch, Torchvision, Python",
            "url": "https://github.com/Vitisadi/image-recognition"
        },
        {
            "image": cartxImg,
            "title": "CartX",
            "description": "RCOS - Project Lead - React",
            "url": "https://github.com/Vitisadi/CartX"
        },
        {
            "image": overlordImg,
            "title": "Overlord",
            "description": "RCOS - Python (Web Scraping)",
            "url": "https://github.com/overlord-bot/Overlord"
        },
        {
            "image": glibbyImg,
            "title": "Glibby",
            "description": "RCOS - C++",
            "url": "https://github.com/2020wmarvil/glibby"
        }
        
    ]



    const [activeCard, setActiveCard] = useState(2);

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
                        <div className="content">
                            <p className="title">{item.title}</p>
                            <h4 className="description">{item.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(item.url)}
                            >View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Projects