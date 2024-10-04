/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            {images.map((image, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && (
                        <img src={image} alt='travel image' className='image' />
                    )}
                </div>
            ))}
            <button className='left-arrow' onClick={prevSlide}>Prev</button>
            <button className='right-arrow' onClick={nextSlide}>Next</button>
        </section>
    );
};

export default ImageSlider;