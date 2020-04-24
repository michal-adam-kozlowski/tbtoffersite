import React from 'react';
import TagWrapper from "./TagWrapper.js";
import ShortInfo from "./ShortInfo.js";
import CruiseNameWrapper from "./CruiseNameWrapper";
import './ShortInfo.scss';

const shortInfo = {
   titleCroatia: "Chorwacja Północna",
   textCroatia: "Chorwacja Północna jest niesamowita! Piękne miasteczka, urokliwe zatoczki, zieleńsze wyspy. Pływamy całą flotą, wszyscy młodzi, piękni i opaleni. Zwiedzamy najpiękniejsze i niedostępne od strony lądu zakątki Chorwacji, snorkelujemy, jemy świeże owoce morza. Zapraszamy!",
 }

class ShortInfoWrapper extends React.Component {
  render() {
    return (
      <div className="shortInfoComponent" id="shortInfo">
        <div className="shortInfo">
          <CruiseNameWrapper />
          <ShortInfo info={shortInfo} />
        </div>
          <TagWrapper />
      </div>
    )
  }
}
export default ShortInfoWrapper;
