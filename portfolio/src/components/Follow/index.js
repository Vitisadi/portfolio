import React, { useState, useEffect, useRef } from 'react';
import roseImg from '../../assets/img/rose.png';
import "./index.css";

const Follow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0, animate: false });
    const containerRef = useRef(null);
    const firstMoveRef = useRef(true); // To track the first mouse move

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const animate = firstMoveRef.current;
                firstMoveRef.current = false; // After the first move, set to false

                const mouse = updateMouse(e.clientX, e.clientY);
                const styles = getRoseStyles(mouse, animate);
                setPosition(styles);
            }
        };

        const handleMouseLeave = () => {
            // Animate movement back to the start position with a slight rotation
            setPosition({ x: 0, y: 0, rotate: -15, animate: true });
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const updateMouse = (mouseX, mouseY) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        return {
            x: mouseX,
            y: mouseY,
            decimalX: mouseX / windowWidth,
            decimalY: mouseY / windowHeight
        };
    };

    const getRoseStyles = (mouse, animate) => {
        const container = containerRef.current.getBoundingClientRect();
        const imageWidth = 100;  // Adjust to your image's width
        const imageHeight = 150; // Adjust to your image's height

        let x = mouse.x - (imageWidth / 2);
        let y = mouse.y - (imageHeight / 2);

        const offsetMultiplier = 80;
        x += (mouse.decimalX - 0.5) * offsetMultiplier;

        const rotation = (mouse.decimalX * 40 - 20); // Rotation degree

        // Confine the image within the container
        x = Math.max(0, Math.min(x, container.width - imageWidth));
        y = Math.max(0, Math.min(y, container.height - imageHeight));

        return {
            x: x,
            y: y,
            rotate: rotation,
            animate: animate
        };
    };

    const imageStyle = {
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        transform: `rotate(${position.rotate}deg)`,
        transition: position.animate ? 'left 0.5s ease, top 0.5s ease, transform 0.5s ease' : 'none'
    };

    return (
        <div ref={containerRef} className="follow-container">
            <img 
                src={roseImg} 
                alt="Rose" 
                className="follow-image" 
                style={imageStyle}
            />
        </div>
    );
};

export default Follow;
