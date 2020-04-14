import React from 'react';
import './Payment.scss';
import Accordion from "./PayAccordion.js";
import Chart from "./Chart.js";

class Payment extends React.Component {
  render(){
    return(
      <div className="paymentComponent">
      <h3><div className="numberBox"><p className="numberText">3</p></div>Sprawdź, jak wygląda system płatności</h3>
      <div className="paymentContent">

        <div className="chartBox">
        <Chart />
        </div>
        <Accordion />
      </div>
      </div>

    )
}}

export default Payment
