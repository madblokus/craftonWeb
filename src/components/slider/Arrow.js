import React from 'react';
import leftArrow from '../../assets/images/yellowArrow.svg'
import rightArrow from '../../assets/images/9.svg'
import './slider.css'

const Arrow = (props) => {
    return (
        <div className="arrows">
            <span className='prev' onClick={props.prevSlide}>
                <img src={leftArrow} />
            </span>
            <span className='next' onClick={props.nextSlide}>
                <img src={rightArrow} />
            </span>
        </div>
    )
}

export default Arrow;