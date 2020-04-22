import React from 'react';
import './Tag.scss';
import Tag from "./Tag.js"

const tagInfo = [
{
  name: "Flota",
  tagTitle: "Flota jachtów",
  text: "Rejs, na którym pływamy flotą jachtów!",
  class: "fas fa-ship"
},
{
  name: "Imprezy",
  tagTitle: "Imprezy",
  text: "Rejs, na którym imprez nie zabraknie!",
  class: "fas fa-glass-cheers"
},
{
  name: "Zabytki",
  tagTitle: "Zwiedzanie",
  text: "Rejs, na którym odwiedzimy wiele pięknych i zabytkowych miast!",
  class: "fas fa-route"
},
{
  name: "Snorkeling",
  tagTitle: "Snorkeling",
  text: "Rejs, gdzie nie zabraknie okazji do świetnego snorkelingu!",
  class: "fas fa-swimmer"
}
];

class TagWrapper extends React.Component {
  render() {
    return (
      <div className="tagBox">
        <Tag singleTag={tagInfo[0]}/>
        <Tag singleTag={tagInfo[1]}/>
        <Tag singleTag={tagInfo[2]}/>
        <Tag singleTag={tagInfo[3]}/>
      </div>
    )
  }
}

export default TagWrapper
