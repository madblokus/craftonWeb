import React from 'react';
import slideImage from './sliderImage';

const Dots = (props) => {
    return (
        <div className='all-dots'>{slideImage.map((slide, index) => (
            <span
                key={index}
                className={`${props.activeIndex === index ? 'dot active-dot' : 'dot'
                    }`}
                onClick={(event) => props.onClick((event.target.value = index))}
            ></span>
        ))}

        </div>
    )
}
export default Dots
