import React from 'react';
import './CruiseName.scss';
import calendar from './img/icons/calendar.png';
import croatiaFlag from './img/icons/croatia-flag.png';
import party from './img/icons/party.png'

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
      <div className="cruise-name-component">
      <div className="cruise-name-box">
      <img src={croatiaFlag} alt={croatiaFlag} /><h3 className="cruise-name">{this.state.cruiseName[0]}</h3>
      </div>
      <div className="cruise-date-box">
      <img src={calendar} alt={calendar} /><h3 className="cruise-date">{this.state.cruiseDate[0]}</h3>
      </div>
      <div className="cruise-type-box">
      <img src={party} alt={party} /><h3 className="cruise-type">{this.state.cruiseType[0]}</h3>
      </div>
      </div>)
  };
};

export default CruiseName;
