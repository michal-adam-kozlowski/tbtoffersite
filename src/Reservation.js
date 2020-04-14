import React from 'react';
import TabsMenu from "./BookOptions.js";
import YachtClass from "./YachtSelection.js";
import Payment from "./Payment.js";



function Reservation() {
    return (
        <div>
        <center>
        <span>
        RESERVATION
        </span>
        </center>
        <YachtClass />
        <TabsMenu />
        <Payment />

        </div>


    );
}

export default Reservation;
