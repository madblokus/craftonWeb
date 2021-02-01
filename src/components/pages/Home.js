import React from 'react'
import '../../App.css'
import HeroSection from '../content/HeroSection'
import Slider from '../slider/Slider'
import Navbar from '../navbar/Navbar';
import './Home.css'
import FooterSection from '../footer/Footer'
import ContentSection from '../content/ContentSection'
import SectionForm from '../form/SectionForm'




const Home = () => {
    return (
        <>
            <div className='page'>
                <Navbar />
                <Slider />
                <HeroSection />
                <ContentSection />
                <SectionForm />
                <FooterSection />
            </div>
        </>
    )
}

export default Home;