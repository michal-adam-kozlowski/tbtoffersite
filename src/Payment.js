import React from 'react';
import './Payment.scss';
import Accordion from "./PayAccordion.js";

class Payment extends React.Component {
  render(){
    return(
      <div className="paymentComponent">
        <div class="wykres">
        </div>
        <Accordion />
      </div>

    )
}}

export default Payment
