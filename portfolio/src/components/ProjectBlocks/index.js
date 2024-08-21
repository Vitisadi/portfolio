import "./index.css"
import portfolioData from '../../data/portfolio.json'


const ProjectsBlocks = () => {
    const portfolio = portfolioData.portfolio;
    const path = process.env.PUBLIC_URL || "";
    return (
        <div className="images-container">
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                                src={path + port.image}
                                className="portfolio-image"
                                alt={port.name} 
                            />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="sub-text technologies">{port.technologies}</h4>
                                <div className="sub-text description">
                                    {port.description && port.description.split('|').map((desc, index) => (
                                        <p key={index} className="description-line">{desc}</p>
                                    ))}
                                </div>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProjectsBlocks