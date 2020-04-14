import React from 'react';
import './Chart.scss';

class Chart extends React.Component {
  render(){
    return(
      <div className="chartComponent">
      <div className="chart"></div>
   <ul className="key">
    <li>
    <strong className="percent lightblue">30%</strong>
    <span className="choice">do 24 godzin</span>
    </li>
  <li>
    <strong className="percent blue">30%</strong>
    <span className="choice">60 dni przed rejsem</span>
  </li>
  <li>
    <strong className="percent shell">40%</strong>
    <span className="choice">30 dni przed rejsem</span>
  </li>

</ul>
</div>

    )
}}

export default Chart
