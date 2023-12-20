import "./index.css"
import Spring from "./Spring"
import Summer from "./Summer"
import Fall from "./Fall"
import Winter from "./Winter"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Seasons = () => {
    const springRef = useRef(null);
    const summerRef = useRef(null);
    const fallRef = useRef(null);
    const winterRef = useRef(null);


    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Spring fade out
    // gsap.to(springRef.current, {
    //     scrollTrigger: {
    //         trigger: springRef.current,
    //         start: "center top",
    //         end: "bottom top",
    //         scrub: true,
    //     },
    //     opacity: 0,
    // });

    // Summer fade in
    gsap.to(summerRef.current, {
        scrollTrigger: {
            trigger: summerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
        },
        opacity: 1,
    });

    // Summer fade out
    // gsap.to(summerRef.current, {
    //     scrollTrigger: {
    //         trigger: summerRef.current,
    //         start: "center top",
    //         end: "bottom top",
    //         scrub: true,
    //     },
    //     opacity: 0,
    // });

    // Fall fade in 
    gsap.to(fallRef.current, {
        scrollTrigger: {
            trigger: fallRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
        },
        opacity: 1,
    });

    // Fall fade out
    // gsap.to(fallRef.current, {
    //     scrollTrigger: {
    //         trigger: fallRef.current,
    //         start: "center top",
    //         end: "bottom top",
    //         scrub: true,
    //     },
    //     opacity: 0,
    // });
    

    // Winter fade in 
    gsap.to(winterRef.current, {
        scrollTrigger: {
            trigger: winterRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
        },
        opacity: 1,
    });
    
}, []);


    return (
        <div className="seasonsContainer">
            <div ref={springRef}>
                <Spring />
            </div>
            <div ref={summerRef} className="summer">
                <Summer />
            </div>
            <div ref={fallRef} className="fall">
                <Fall />
            </div>
            <div ref={winterRef} className="winter">
                <Winter />
            </div>
        </div>
    )
}

export default Seasons;