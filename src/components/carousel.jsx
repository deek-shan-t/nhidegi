import React, { useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevSlide}>Previous</button>
            <div className="slide">{slides[currentSlide]}</div>
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
