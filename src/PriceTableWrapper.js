import React from 'react';
import PriceTable from "./PriceTable.js";
import "./PriceTable.scss";

const included = {
    class: "fa fa-check",
    cell1: "Miejsce na jachcie",
    cell2: "Profesjonalny skipper",
    cell3: "Wstęp na imprezy TBT",
    cell4: "Ubezpieczenie AXA",
    cell5: "Ponton do jachtu",
    cell6: "Fotograf",
}

// const additionaly = {
//     class: "fas fa-plus",
//     cell1: "Transport",
//     cell2: "Taksa turystyczna",
//     cell3: "Stewardessa",
//     title: "(opcjonalnie)",
//     cell4: "Paliwo, jedzenie i porty",
//     cell5: "Skladka turystyczna",
//     cell6: "Kabina 2os.",
//     cell: "Opłata 'Starter Pack'",
// }


class PriceTableWrapper extends React.Component {
    render() {
        return (
            <div className="tableComponent">
                <div className="includedTable">
                    <h3>Cena zawiera:</h3>
                    <PriceTable text={included} />
                </div>
                {/* <div className="additionalyTable">
                    <h3>Dodatkowy koszt</h3>
                    <PriceTable text={additionaly} />
                </div> */}
            </div>
        )
    }
}

export default PriceTableWrapper;



