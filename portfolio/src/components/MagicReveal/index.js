import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import roseImg from "../../assets/img/rose.png";
import professionalIcon from "../../assets/img/professional-icon2-i.png";
import professional from "../../assets/img/self-photo.heic";
import scubaIcon from "../../assets/img/scuba-icon-i.png";
import scuba from "../../assets/img/scuba.JPG";
import soccerIcon from "../../assets/img/soccer-icon2-i.png";
import soccer from "../../assets/img/soccer.JPG";


const MagicReveal = () => {
    const [position, setPosition] = useState({ x: 10, y: 0, rotate: -10, animate: false });
    const [tiles, setTiles] = useState([
        { opacity: 0, blur: 1, animate: false, img: professionalIcon, img2: professional},
        { opacity: 0, blur: 1, animate: false, img: scubaIcon, img2: scuba},
        { opacity: 0, blur: 1, animate: false, img: soccerIcon, img2: soccer},
    ]);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const tileRefs = useRef([]);
    const tilePrimaryRefs = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const containerDimensions = containerRef.current.getBoundingClientRect();

                const imageWidth = imageRef.current.offsetWidth;
                const imageHeight = imageRef.current.offsetHeight;
                
                const mouseX = e.clientX - containerDimensions.left - imageWidth / 2
                const mouseY = e.clientY - containerDimensions.top - imageHeight / 2;

                const mouseXAsDecimal = mouseX / containerDimensions.width;
                const rotation = -10 + (30 * mouseXAsDecimal)

                const wandX = (containerDimensions.width * -0.15) + mouseX * 1.3
                const wandY = (containerDimensions.height * 0.1) + mouseY * 0.4
                
                setPosition({x: wandX, y: wandY, rotate: rotation,  animate: false});

                styleTiles(wandX, false)
            }
        };

        const handleMouseLeave = () => {
            setPosition({ x: 10, y: 0, rotate: -10, animate: true });
            
            const containerDimensions = containerRef.current.getBoundingClientRect();
            const wandX = (containerDimensions.width * -0.15) + 10 * 1.3
            styleTiles(wandX, true)
        };

        const styleTiles = (wandX, animate) => {
            tiles.forEach((tile, index) => {
                const dimensions = tileRefs.current[index].getBoundingClientRect();
                const relativeWandX = wandX - dimensions.left + dimensions.width;
                const relativeWandXAsDecimal = relativeWandX / dimensions.width;
                const opacity = relativeWandXAsDecimal;
                const blur = 1 - relativeWandXAsDecimal;
    
                tile.opacity = opacity;
                tile.blur = blur;
                tile.animate = animate;
            });
            setTiles([...tiles]);
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [tiles]);

    const imageStyle = {
        position: 'absolute', 
        left: `${position.x}px`,
        top: `${position.y}px`, 
        transform: `rotate(${position.rotate}deg)`,
        transition: position.animate ? 'left 0.5s ease, top 0.5s ease, transform 0.5s ease' : 'none'
    };

    return (
        <div className="magic-container" ref={containerRef}>
            <img 
                ref={imageRef}
                src={roseImg} 
                alt="Rose" 
                className="rose" 
                style={imageStyle}
            />
            <div id="tiles">
                {tiles.map((tile, index) => (
                    <div className="tile" key={index}>
                        <i className="fa-solid fa-image"></i>
                        <img 
                            ref={el => tileRefs.current[index] = el}
                            src={tile.img2}
                            alt="tile"
                            style={{ 
                                opacity: tile.opacity, 
                                blur: tile.blur, 
                                transition: tile.animate ? 'blur 0.5s ease, opacity 0.5s ease' : 'none'
                            }}
                        />
                        <img 
                            ref={el => tilePrimaryRefs.current[index] = el}
                            src={tile.img}
                            alt="tile"
                            style={{ 
                                opacity: 1-tile.opacity, 
                                blur: tile.blur, 
                                transition: tile.animate ? 'blur 0.5s ease, opacity 0.5s ease' : 'none' 
                            }}
                        />                      
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MagicReveal;
