import React from 'react';
import Hero from "./Hero.js";
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
import PriceTableWrapper from './PriceTableWrapper.js'


function OfferWrapper() {
    return (
        <div id="content">
            <Hero />
            <Menu />
            <div className="container">
            <ShortInfoWrapper />
            <HighlightsWrapper />
            <Map />
            <Reservation />
            <PriceTableWrapper />
            <TagTravelWrapper />
            <TestimonialsWrapper />
            <BookBtn />
        </div>
        </div>
    );
}

export default OfferWrapper;
