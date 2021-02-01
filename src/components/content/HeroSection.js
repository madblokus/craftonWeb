import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className='hero-text-container'>
                <p className='hero-text'>Będziesz się uczyć z ciekawością.</p>
                <div className='Obiecujemy'>Obiecujemy.</div>
            </div>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                >
                    <p className='button-text'>ZOBACZ WIĘCEJ</p>
                </Button>
                <Button
                    className='btns2'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    buttonColor='btn--blue'
                >
                    <p className="button-text">UMÓW SIĘ Z ANIOŁEM</p>
                </Button>
            </div>

        </div>
    );
}

export default HeroSection;