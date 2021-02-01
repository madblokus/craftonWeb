import React from 'react'
import MapSection from './GoogleMap'
import { location } from './location'
import FooterLinksContainer from './FooterLinksContainer'
import './Footer.css'
const FooterSection = () => (

    <div className="footer-section">
        <div className="left-footer-container">
            <div className="left-footer-text-container">
                <p className="text">ul. Głogowska 10 61-719 Poznań tel. 61 27 11 000</p>
            </div>
            <div>
                <MapSection location={location} zoomLevel={17} />
            </div>
        </div>
        <FooterLinksContainer />
        <p className="madeby">Projekt i realizacja: Crafton</p>
    </div>
)

export default FooterSection