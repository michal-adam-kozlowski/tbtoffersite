import React from 'react';
import Menu from './Menu.js';
import ShortInfoWrapper from './ShortInfoWrapper.js';
import Map from "./Map.js";
import Reservation from "./Reservation.js";
import BookBtn from "./BookBtn.js";
import './OfferWrapper.scss';
import './Hero.scss';
import HighlightsWrapper from "./HighlightsWrapper";
import TagTravelWrapper from "./TagTravelWrapper.js";
import TestimonialsWrapper from './TestimonialsWrapper'


function OfferWrapper() {
    return (
        <div id="content">
            <Menu />
            <div className="container">
            <ShortInfoWrapper />
            <HighlightsWrapper />
            <Map />
            <Reservation />
            <TagTravelWrapper />
            <TestimonialsWrapper />
            <BookBtn />
        </div>
        </div>
    );
}

export default OfferWrapper;
