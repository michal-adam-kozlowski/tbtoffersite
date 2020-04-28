import React from 'react';
import BookOptionsWrapper from "./BookOptionsWrapper.js";
import YachtsWrapper from "./YachtsWrapper.js";
import Payment from "./Payment.js";

function Reservation() {
    return (
        <div id="reservation">
           <YachtsWrapper />
           <BookOptionsWrapper />
           <Payment /> 
        </div>
    );
}

export default Reservation;
