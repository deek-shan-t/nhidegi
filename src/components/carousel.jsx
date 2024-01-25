import React, { useState } from 'react';
import './carousel.css';

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
            <button class="custom-btn btn-12" onClick={goToPrevSlide}><span>Prev</span><span><pre>{'<'}</pre></span></button>
            <div className="slide">{slides[currentSlide]}</div>
            <button class="custom-btn btn-12" onClick={goToNextSlide}><span>Next</span><span><pre>{'>'}</pre></span></button>
        </div>
    );
};

export default Carousel;
