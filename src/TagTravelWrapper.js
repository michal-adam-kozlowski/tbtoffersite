import React from 'react';
import './Tag.scss';
import TagTravel from "./TagTravel.js"

const travelInfo = [
{
  name: "Samolot",
  tagTitle: "Lot do Zadaru",
  text: "Z Zadaru do Sukosanu można łatwo dojechać regularnie kursującymi autobusami.",
  class: "fas fa-plane"},
{
  name: "Autokar",
  tagTitle: "Autokar",
  text: "Możliwy dojazd naszym autokarem. Koszt w dwie strony to 350 PLN/os.",
  class: "fas fa-bus"},
];

class TagTravelWrapper extends React.Component {
  render() {
    return (
      <div className="tagTravelWrapper">
        <div className="tagTravelBox">
          <TagTravel singleTag={travelInfo[0]}/>
          <TagTravel singleTag={travelInfo[1]}/>
        </div>
     </div>
    )
  }
}

export default TagTravelWrapper
