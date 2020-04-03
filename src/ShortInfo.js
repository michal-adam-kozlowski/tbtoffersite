import React from 'react';
import Tag from './Tag.js';
import './ShortInfo.scss';


// function ShortInfo() {
//     return (
//         <span><Tag number={1}/><Tag number={2}/><Tag number={3}/><Tag number={4}/></span>
//     );
// }

class ShortInfo extends React.Component {

  render() {
    return (
      <div className="short-info">
      <div className="short-info-box">
      Chorwacja Północna jest niesamowita! Piekne miasteczka, urokliwe zatoczki, "zieleńsze" wyspy. Pływamy całą flotą, wszyscy młodzi, piękni i opaleni. Zwiedzamy najpiękniejsze i niedostępne od strony lądu zakątki Chorwacji, snorkelujemy, jemy świeże owoce morza. Zapraszamy!
      </div>
      </div>
    )
  }
}
export default ShortInfo;
