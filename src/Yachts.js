import React, { useState } from "react";
import "./Tabs.js";
import "./Tab.scss";
import "./Yachts.scss";
import YachtDescription from "./YachtDescription.js";
import one from "./img/icons/one.png";
import two from "./img/icons/two.png";



const Tabs = props => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = props.children[activeTabIndex];
  return (
    <div>
      <div className="tabs">
        {props.children.map((tab, i) => (
          <button
            className="tab-btn"
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div id="yacht-tab-indicator-container" className="tab-indicator-container">
        <div
          className="tab-indicator"
           style={{
             width: 100 / props.children.length + "%",
             transform: `translateX(${activeTabIndex * 100}%)`
           }}
        />
      </div>
      <div className="tab-content-yachts">{activeTab.props.children}</div>
    </div>
  );
};


export default function YachtClass(props) {
  const comfort = {
    image: require("./img/comfort.jpg"),
    name: "Comfort",
    price: 1590,
    person: "8 max 10",
    year: "2010 lub nowszy",
    amenities: ["3 lub 4 zamykane kabiny", "rozkładana kanapa dwuosobowa w salonie", "2 łazienki"]
  };

  const premier = {
    image: require("./img/premier.jpg"),
    name: "Premier",
    price: 1790,
    person: "8 max 10",
    year: "2014 lub nowszy",
    amenities: ["3 lub 4 zamykane kabiny", "rozkładana kanapa dwuosobowa w salonie", "2 łazienki"]
  };

  const premierPlus = {
    image: require("./img/premier-plus.jpg"),
    name: "Premier +",
    price: 2090,
    person: "10 max 11",
    year: "2014 lub nowszy",
    amenities: ["5 zamykanych kabiny", "nie kwaterujemy nikogo w salonie!", "2 łazienki"]
  };

  const katComfort = {
    image: require("./img/kat-comfort.jpg"),
    name: "Comfort",
    price: "2090 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "2 miejsca do spania w salonie", "4 łazienki"]
  };

  const katPremier = {
    image: require("./img/kat-premier.jpg"),
    name: "Premier",
    price: "2290 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "rozkładana kanapa dwuosobowa w salonie", "4 łazienki", "większa powierzchnia w porównaniu do katamaranów klasy Comfort"]
  };

  // const katPremierPlus = {
  //   image: require("./img/kat-premier-plus.jpg"),
  //   name: "Premier +",
  //   price: 2090,
  //   person: "10 max 11",
  //   year: "2014 lub nowszy",
  //   amenities: ["5 zamykanych kabiny", "nie kwaterujemy nikogo w salonie!", "2 łazienki"]
  // };

  return (

    <div id="YachtMenu" className="TabsMenu">
    <h2>Jak to działa?</h2>
    <h4>Krok po kroku</h4>
      <h3><img src={one} alt={one} />Wybierz jednostkę a następnie klasę jachtu</h3>
      <Tabs>
      <div title="Jacht">
      <div className="class-box">
      <YachtDescription textComponent={comfort}/>
      <YachtDescription textComponent={premier}/>
      <YachtDescription textComponent={premierPlus}/>

      </div>
      </div>
      <div title="Katamaran">
      <div className="class-box" style={{justifyContent: "space-evenly"}}>
      <YachtDescription textComponent={katComfort}/>
      <YachtDescription textComponent={katPremier}/>


      </div>
      </div>
      </Tabs>
    </div>
  );
}
