import React from 'react';
import './CruiseName.scss';
import croatiaFlag from './img/icons/croatia-flag.png';

// import Cruise from './CroatiaOffer';

// function OfferWrapper() {
//     return (
//         <span>NAME + DATE + TYPE</span>
//     );
// }


class CruiseName extends React.Component {

state = {
  cruiseName: ["Chorwacja Trasa Północna, Trip#9", "Chorwacja Sierpniówka - Trip #10"],
  cruiseDate: ["11.07.2020 - 18.07.2020", "18.07.2020 - 25.07.2020"],
  cruiseType: ["Sail & Party", "Sail & Explore", "Sail & Adventures"]
}

  render() {
    return (
      <div className="cruiseNameComponent">
      <div className="cruiseNameBox">
      <img src={croatiaFlag} alt={croatiaFlag} /><h3 className="cruiseName">{this.state.cruiseName[0]}</h3>
      </div>
      <div className="cruiseDateBox">
      <i class="far fa-calendar-alt"></i><h3 className="cruiseDate">{this.state.cruiseDate[0]}</h3>
      </div>
      <div className="cruiseTypeBox">
      <i class="far fa-compass"></i><h3 className="cruiseType">{this.state.cruiseType[0]}</h3>
      </div>
      </div>)
  };
};

export default CruiseName;
