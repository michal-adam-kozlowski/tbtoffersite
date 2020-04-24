import React from 'react';
import './TagInfo.scss';
import TagInfo from "./TagInfo.js"

const tagShortInfo = [
{
  name: "Temperatura powietrza w dzień",
  text: "25°C",
  temperature: "fas fa-thermometer-half",
  class: "far fa-sun"
},

{
  name: "Temperatura powietrza w nocy",
  text: "15°C",
  temperature: "fas fa-thermometer-half",
  class: "far fa-moon"
},

{
  name: "Temperatura wody",
  text: "18°C",
  temperature: "fas fa-thermometer-half",
  class: "fas fa-water"
},

{
  name: "Pływanie",
  text: "3-5h",
  class: "fas fa-ship"
}

];


class TagInfoWrapper extends React.Component {
  render() {
    return (
      <div className="tagInfoWrapper">
        <TagInfo singleTag={tagShortInfo[0]}/>
        <TagInfo singleTag={tagShortInfo[1]}/>
        <TagInfo singleTag={tagShortInfo[2]}/>
        <TagInfo singleTag={tagShortInfo[3]}/>
      </div>
    )
  }
}

export default TagInfoWrapper
