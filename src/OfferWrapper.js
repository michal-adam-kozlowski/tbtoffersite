import React from 'react';
import Menu from './Menu.js';
import ShortInfo from './ShortInfo.js';
import HighLights from "./HighLights.js";
import Map from "./Map.js";
import Reservation from "./Reservation.js";
import Testimonials from "./Testimonials.js";
import BookBtn from "./BookBtn.js";
import './OfferWrapper.scss';
import './Hero.scss';
import Slider from "./Slider.js"


function OfferWrapper() {
    return (
        <div id="content">
            <Menu />
            <div className="container">
            <ShortInfo/>
            <HighLights/>
            <Map/>
            <Reservation/>
            <Testimonials/>
            <BookBtn />
            <Slider />
        
        </div>
        </div>
    );
}

export default OfferWrapper;
