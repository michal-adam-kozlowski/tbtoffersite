import React from 'react';
import './Payment.scss';
import Acc from "./PayAccordion.js";
import Chart from "./Chart.js";

class Payment extends React.Component {
  render(){
    return(
      <div className="paymentComponent" id="payment">
       <div className="titleReservations">
        <div className="numberBox">
          <p className="numberText">3</p>
        </div>
          <h3>Sprawdź cenę i system platności</h3>
        </div>
       <div className="paymentContent">
        <Chart />
        <Acc />
       </div>
      </div>
    )
  }
}
export default Payment
