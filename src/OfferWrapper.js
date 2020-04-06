import React from 'react';
import Hero from './Hero.js';
import CruiseName from './CruiseName.js';
import ShortInfo from './ShortInfo.js';
import HighLights from "./HighLights.js";
import Map from "./Map.js";
import Reservation from "./Reservation.js";
import Testimonials from "./Testimonials.js";
import './OfferWrapper.scss';
import './Hero.scss';


function OfferWrapper() {
    return (
        <div id="content">
            <Hero/>
            <div className="container">
            <CruiseName/>
            <ShortInfo/>
            <HighLights/>
            <Map/>
            <Reservation/>
            <Testimonials/>
        </div>
        </div>
    );
}

export default OfferWrapper;
