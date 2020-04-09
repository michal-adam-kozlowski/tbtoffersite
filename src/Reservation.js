import React from 'react';
import TabsMenu from "./BookOptions.js";
import YachtClass from "./YachtSelection.js"


function Reservation() {
    return (
        <div>
        <center>
        <span>
        ---------------------------------------------
        RESERVATION
        ---------------------------------------------
        </span>
        </center>
        <YachtClass />
        <TabsMenu />
        </div>


    );
}

export default Reservation;
