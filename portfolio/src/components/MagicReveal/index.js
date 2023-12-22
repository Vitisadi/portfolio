import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import roseImg from "../../assets/img/rose.png";

const MagicReveal = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: -10 });
    const [tiles, setTiles] = useState([
        { opacity: 1, blur: 0, img: roseImg },
        { opacity: 1, blur: 0, img: roseImg},
        { opacity: 1, blur: 0, img: roseImg},
    ]);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const tileRefs = useRef([]);

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
                
                setPosition({x: wandX, y: wandY, rotate: rotation});

                styleTiles(wandX)
            }
        };

        const styleTiles = (wandX) => {
            tiles.forEach((tile, index) => {
                const dimensions = tileRefs.current[index].getBoundingClientRect();
                const relativeWandX = wandX - dimensions.left + dimensions.width;
                const relativeWandXAsDecimal = relativeWandX / dimensions.width;
                const opacity = relativeWandXAsDecimal;
                const blur = 1 - opacity;
    
                tile.opacity = opacity;
                tile.blur = blur;
            });
            setTiles([...tiles]);
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [tiles]);

    const imageStyle = {
        position: 'absolute', // Set position to absolute
        left: `${position.x}px`,
        top: `${position.y}px`, 
        transform: `rotate(${position.rotate}deg)`,
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
                            src={tile.img}
                            alt="tile"
                            style={{ opacity: tile.opacity, blur: tile.blur }}
                        />                
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MagicReveal;
