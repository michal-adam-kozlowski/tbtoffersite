import React from 'react';
import Hero from './Hero.js';
import CruiseName from './CruiseName.js';
import ShortInfo from './ShortInfo.js';
import HighLights from "./HighLights.js";
import Map from "./Map.js";
import Reservation from "./Reservation.js";
import Testimonials from "./Testimonials.js";


function OfferWrapper() {
    return (
        <div>
            <Hero/>
            <CruiseName/>
            <ShortInfo/>
            <HighLights/>
            <Map/>
            <Reservation/>
            <Testimonials/>
        </div>
    );
}

export default OfferWrapper;