import React from 'react';
import TabsMenu from "./Tabs.js";
import YachtClass from "./Yachts.js"


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
