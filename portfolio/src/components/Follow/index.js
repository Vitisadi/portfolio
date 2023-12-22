import React, { useState, useRef } from 'react';
import roseImg from '../../assets/img/rose.png';
import "./index.css";

const Follow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [animate, setAnimate] = useState(false); // State to control animation
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            setAnimate(false); // Disable animation while moving
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            let newX = e.clientX - left - 25;
            let newY = e.clientY - top - 25;

            newX = Math.max(0, Math.min(newX, width - 50));
            newY = Math.max(0, Math.min(newY, height - 50));

            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseLeave = () => {
        setAnimate(true); // Enable animation when mouse leaves
        setPosition({ x: 0, y: 0 });
    };

    const imageStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: animate ? 'left 0.5s ease, top 0.5s ease' : 'none'
    };

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            className="follow-container"
        >
            <img src={roseImg} alt="Rose" className="follow-image" style={imageStyle} />
        </div>
    );
};

export default Follow;
