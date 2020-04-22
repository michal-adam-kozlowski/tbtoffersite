import React from 'react';
import TabsMenu from "./BookOptions.js";
import YachtsWrapper from "./YachtsWrapper.js";
import Payment from "./Payment.js";

function Reservation() {
    return (
        <div id="reservation">
         <YachtsWrapper />
         <TabsMenu />
         <Payment />
        </div>
    );
}

export default Reservation;
