import React from 'react';
import CruiseName from './CruiseName.js';
import Tag from './Tag.js';
import TagTravel from './TagTravel.js';
import './ShortInfo.scss';


class ShortInfo extends React.Component {

  state = {
    titleCroatia: "Chorwacja Północna",
    textCroatia: "Chorwacja Północna jest niesamowita! Piękne miasteczka, urokliwe zatoczki, zieleńsze wyspy. Pływamy całą flotą, wszyscy młodzi, piękni i opaleni. Zwiedzamy najpiękniejsze i niedostępne od strony lądu zakątki Chorwacji, snorkelujemy, jemy świeże owoce morza. Zapraszamy!",
    titleTravelInfo: "Travel Info"
  }

  render() {
  const taginfo = [
  {name: "Flota", tagTitle: "Flota jachtów", text: "Rejs, na którym pływamy flotą jachtów!", image: require("./img/icons/boat-icon.png"), class: "fas fa-ship"},
  {name: "Imprezy", tagTitle: "Imprezy", text: "Rejs, na którym imprez nie zabraknie!", image: require("./img/icons/music.png"), class: "fas fa-glass-cheers"},
  {name: "Zabytki", tagTitle: "Zwiedzanie", text: "Rejs, na którym odwiedzimy wiele pięknych i zabytkowych miast!", image: require("./img/icons/binoculars .png"), class: "fas fa-route"},
  {name: "Snorkeling", tagTitle: "Snorkeling", text: "Rejs, gdzie nie zabraknie okazji do świetnego snorkelingu!", image: require("./img/icons/mask.png"), class: "fas fa-swimmer"}
];

  const travelinfo = [
  {name: "Samolot", tagTitle: "Lot do Zadaru", text: "Z Zadaru do Sukosanu można łatwo dojechać regularnie kursującymi autobusami.", image: require("./img/icons/plane-icon.png"), class: "fas fa-plane"},
  {name: "Autokar", tagTitle: "Autokar", text: "Możliwy dojazd naszym autokarem. Koszt w dwie strony to 350 PLN/os.", image: require("./img/icons/bus.png"), class: "fas fa-bus"},
];


    return (
      <div className="short-info-component">
      <div className="short-info">
      <CruiseName />
      <div className="short-info-box">
      <h2 className="short-info-title">{this.state.titleCroatia}</h2>
      <p className="short-info-text">{this.state.textCroatia}</p>
      </div>
      </div>
      <div className="tag-box">
      <Tag singleTag={taginfo[0]}/>
      <Tag singleTag={taginfo[1]}/>
      <Tag singleTag={taginfo[2]}/>
      <Tag singleTag={taginfo[3]}/>
      </div>
      <h3 className="travel-info-title">Travel Info</h3>
      <div className="tag-box-travel">
      <TagTravel singleTag={travelinfo[0]}/>
      <TagTravel singleTag={travelinfo[1]}/>
     </div>
      </div>

    )
  }
}
export default ShortInfo;
