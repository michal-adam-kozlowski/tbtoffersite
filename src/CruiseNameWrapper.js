import React from 'react';
import CruiseName from "./CruiseName.js";
import './CruiseName.scss';

const cruiseInfo = {
  cruiseName: "Chorwacja Trasa Północna",
  cruiseDate: "11.07.2020 - 18.07.2020",
  cruiseType: "Sail & Party",
  cruisePrice: "1590 PLN"
};

class CruiseNameWrapper extends React.Component {
  render() {
    return (
      <CruiseName cruise={cruiseInfo}/>
    )
  };
};

export default CruiseNameWrapper;
