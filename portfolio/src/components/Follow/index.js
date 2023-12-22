import React, { useState, useRef } from 'react';
import roseImg from '../../assets/img/rose.png';
import "./index.css";

const Follow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const imageWidth = 100; // Width of the image
    const imageHeight = 150; // Height of the image

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();

            // Center the image on the cursor
            let newX = e.clientX - left - (imageWidth / 2);
            let newY = e.clientY - top - (imageHeight / 2);

            // Confining the image within the container
            newX = Math.max(0, Math.min(newX, width - imageWidth));
            newY = Math.max(0, Math.min(newY, height - imageHeight));

            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 }); // Reset position
    };

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            className="follow-container"
        >
            <img src={roseImg} alt="Rose" className="follow-image" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
        </div>
    );
};

export default Follow;
