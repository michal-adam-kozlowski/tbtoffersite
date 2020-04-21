import React from 'react';
import './Chart.scss';

class Chart extends React.Component {
  render(){
    return(
      <div className="chartComponent">
      <div className="chart">
     <div id="part1" className="part"><div className="partColor" ></div></div>
    <div id="part2" className="part"><div className="partColor" ></div></div>
    <div id="part3" className="part"><div className="partColor" ></div></div>
   <p className="center">Zaliczka 30%</p>
   </div>
   <div className="chartlistBox">
   <ul className="chartList">
   <li className="firstPayment">do 24 godzin</li>
   <li className="secondPayment">60 dni przed rejsem</li>
   <li className="thirdPayment">30 dni przed rejsem</li>
   </ul>
   </div>
   </div>

    )
}}

export default Chart
