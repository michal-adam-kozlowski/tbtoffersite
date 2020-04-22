import React from 'react';
import CruiseName from './CruiseName.js';
import Tag from './Tag.js';
import TagTravel from './TagTravel.js';
import './ShortInfo.scss';


class ShortInfo extends React.Component {

  render() {
  const shortInfo = {
     titleCroatia: "Chorwacja Północna",
     textCroatia: "Chorwacja Północna jest niesamowita! Piękne miasteczka, urokliwe zatoczki, zieleńsze wyspy. Pływamy całą flotą, wszyscy młodzi, piękni i opaleni. Zwiedzamy najpiękniejsze i niedostępne od strony lądu zakątki Chorwacji, snorkelujemy, jemy świeże owoce morza. Zapraszamy!",
   }

  const taginfo = [
  {name: "Flota", tagTitle: "Flota jachtów", text: "Rejs, na którym pływamy flotą jachtów!", class: "fas fa-ship"},
  {name: "Imprezy", tagTitle: "Imprezy", text: "Rejs, na którym imprez nie zabraknie!", class: "fas fa-glass-cheers"},
  {name: "Zabytki", tagTitle: "Zwiedzanie", text: "Rejs, na którym odwiedzimy wiele pięknych i zabytkowych miast!", class: "fas fa-route"},
  {name: "Snorkeling", tagTitle: "Snorkeling", text: "Rejs, gdzie nie zabraknie okazji do świetnego snorkelingu!", class: "fas fa-swimmer"}
];

  const travelinfo = [
  {name: "Samolot", tagTitle: "Lot do Zadaru", text: "Z Zadaru do Sukosanu można łatwo dojechać regularnie kursującymi autobusami.", class: "fas fa-plane"},
  {name: "Autokar", tagTitle: "Autokar", text: "Możliwy dojazd naszym autokarem. Koszt w dwie strony to 350 PLN/os.", class: "fas fa-bus"},
];

    return (
      <div className="shortInfoComponent" id="shortInfo">
      <div className="shortInfo">
      <CruiseName />
      <div className="shortInfoBox">
      <h2 className="shortInfoTitle">{shortInfo.titleCroatia}</h2>
      <p className="shortInfoText">{shortInfo.textCroatia}</p>
      </div>
      </div>
      <div className="tagBox">
      <Tag singleTag={taginfo[0]}/>
      <Tag singleTag={taginfo[1]}/>
      <Tag singleTag={taginfo[2]}/>
      <Tag singleTag={taginfo[3]}/>
      </div>
      <h3 className="travelInfoTitle">Travel Info</h3>
      <div className="tagBoxTravel">
      <TagTravel singleTag={travelinfo[0]}/>
      <TagTravel singleTag={travelinfo[1]}/>
     </div>
      </div>

    )
  }
}
export default ShortInfo;
