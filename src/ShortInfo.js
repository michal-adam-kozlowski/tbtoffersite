import React from 'react';
import Tag from './Tag.js';
import './ShortInfo.scss';


class ShortInfo extends React.Component {
  render() {
  const taginfo = [
  {name: "Flota", text: "Rejs, na którym pływamy flotą jachtów!", image: require("./img/icons/boat-icon.png")},
  {name: "Imprezy", text: "Rejs, na którym imprez nie zabraknie!", image: require("./img/icons/party-icon.png")},
  {name: "Zabytki", text: "Rejs, na którym odwiedzimy wiele pięknych i zabytkowych miast!", image: require("./img/icons/sightseeing-icon.png")},
  {name: "Snorkeling", text: "Rejs, gdzie nie zabraknie okazji do świetnego snorkelingu!", image: require("./img/icons/snorkeling-icon.png")}
]

    return (
      <div className="short-info">
      <div className="short-info-box">
      Chorwacja Północna jest niesamowita! Piekne miasteczka, urokliwe zatoczki, "zieleńsze" wyspy. Pływamy całą flotą, wszyscy młodzi, piękni i opaleni. Zwiedzamy najpiękniejsze i niedostępne od strony lądu zakątki Chorwacji, snorkelujemy, jemy świeże owoce morza. Zapraszamy!
      </div>
      <div className="tag-box">
      <Tag single={taginfo[0]}/>
      <Tag single={taginfo[1]}/>
      <Tag single={taginfo[2]}/>
      <Tag single={taginfo[3]}/>
      </div>
      </div>
    )
  }
}
export default ShortInfo;
