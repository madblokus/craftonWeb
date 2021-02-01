import React from 'react'
import GoogleMapReact from 'google-map-react'
import { APIkey } from './location'


import './GoogleMap.css'

const LocationPin = ({ text }) => (
    <div className="pin">
        <i class="fas fa-map-marker-alt" id='pin-icon'></i>
        <p className="pin-text">{text}</p>
    </div>
)

const mapOptions = {
    fullscreenControl: false,
};

const GoogleMap = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="mapCircle">
            <div className='first'>
                <div className='second'>
                    <div className="google-map" id='google-map-id'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: APIkey.key }}
                            defaultCenter={location}
                            defaultZoom={zoomLevel}
                            disableDefaultUI='true'
                            fullscreenControl='false'
                        >
                            <LocationPin
                                lat={location.lat}
                                lng={location.lng}
                                text={location.address}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default GoogleMap