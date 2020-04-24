import React from 'react';
import './CruiseName.scss';
import croatiaFlag from './img/icons/croatia-flag.png';

class CruiseName extends React.Component {
  render() {
    return (
      <div className="cruiseNameComponent">
        <div className="cruiseNameBox">
          <img src={croatiaFlag} alt={croatiaFlag} /><h3 className="cruiseName">{this.props.cruise.cruiseName}</h3>
        </div>
        <div className="cruiseDateBox">
          <i class="far fa-calendar-alt"></i><h3 className="cruiseDate">{this.props.cruise.cruiseDate}</h3>
        </div>
        <div className="cruiseTypeBox">
          <i class="far fa-compass"></i><h3 className="cruiseType">{this.props.cruise.cruiseType}</h3>
        </div>
        <div className="cruisePriceBox">
          <h3 className="cruisePrice">od {this.props.cruise.cruisePrice}</h3>
        </div>

      </div>)
  };
};

export default CruiseName;



// import Cruise from './CroatiaOffer';

// function OfferWrapper() {
//     return (
//         <span>NAME + DATE + TYPE</span>
//     );
// }
