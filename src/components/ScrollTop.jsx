import React, { useState, useEffect } from 'react';
import './ScrollTop.css'


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="scroll-top" onClick={scrollToTop}>
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}
        </>
    );
};

export default ScrollTop;
