import React from 'react';
import Menu from './Menu.js';
import ShortInfo from './ShortInfo.js';
import HighLights from "./HighLights.js";
import Map from "./Map.js";
import Reservation from "./Reservation.js";
import BookBtn from "./BookBtn.js";
import './OfferWrapper.scss';
import './Hero.scss';
import HighlightsWrapper from "./HighlightsWrapper";
import TestimonialsWrapper from './TestimonialsWrapper'



function OfferWrapper() {
    return (
        <div id="content">
            <Menu />
            <div className="container">
            <ShortInfo/>
            <Map/>
            <Reservation/>
            <TestimonialsWrapper/>
            <BookBtn />

        </div>
        </div>
    );
}

export default OfferWrapper;
