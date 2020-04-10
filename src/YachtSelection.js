import React, { useState } from "react";
import "./BookOptions.js";
import "./BookOptions.scss";
import "./YachtSelection.scss";
import YachtDescription from "./YachtDescription.js";
import PopUpContent from "./PopUpContent.js";
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
            className="tabBtn"
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div id="yachtTabIndicatorContainer" className="tabIndicatorContainer">
        <div
          className="tabIndicator"
           style={{
             width: 100 / props.children.length + "%",
             transform: `translateX(${activeTabIndex * 100}%)`
           }}
        />
      </div>
      <div className="tabContentYachts">{activeTab.props.children}</div>
    </div>
  );
};


export default function YachtClass(props) {
  const comfort = {
    image: require("./img/comfort.jpg"),
    name: "Comfort",
    price: 1590,
    person: "8 max 10",
    year: "2008 - 2010",
    amenities: ["3 lub 4 zamykane kabiny", "przestronny salon z kuchnią", "2 lub 3 łazienki"],
    shortInfo: ["Klasa COMFORT zapewnia bardzo dużo wygody, są wyposażone we wszystkie kluczowe i niezbędne elementy - spokojnie zapewnią udane wakacje!"]
  };

  const premier = {
    image: require("./img/premier.jpg"),
    name: "Premier",
    price: 1790,
    person: "8 max 10",
    year: "2014 lub nowszy",
    amenities: ["3 lub 4 zamykane kabiny", "przestronny salon z kuchnią", "2 lub 3 łazienki"],
    shortInfo: "Bardzo dobre jednostki. W rozsądnej cenie oferują sporo udogodnień, nowoczesny design i komfort charakterystyczny dla współcześnie projektowanych jachtów."
  };

  const premierPlus = {
    image: require("./img/premier-plus.jpg"),
    name: "Premier +",
    price: 2090,
    person: "11 max 13",
    year: "2014 lub nowszy",
    amenities: ["5 zamykanych kabin", "przestronny salon z kuchnią", "4-5 łazienek"],
    shortInfo: "Najlepiej wyposażone i pełne udogodnień. Pamiętajcie, że nikt nie śpi tu w salonie, co diametralnie wpływa na komfort życia."
  };

  const katComfort = {
    image: require("./img/kat-comfort.jpg"),
    name: "Comfort",
    price: "2090 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "2 salony (zewnętrzny i wewnętrzny z kuchnią)", "4-5 łazienek", ],
    shortInfo: "Godne zaufania, sprawdzone i praktyczne katamarany. Są wyposażone we wszystkie kluczowe i niezbędne elementy."
  };

  const katPremier = {
    image: require("./img/kat-premier.jpg"),
    name: "Premier",
    price: "2290 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "2 salony (zewnętrzny i wewnętrzny z kuchnią)", "4-5 łazienek" ],
    shortInfo: "Bardzo dobre jednostki, oferują sporo udogodnień i są znacząco większe od katamaranów COMFORT, a pływa na nich ta sama liczba osób. "
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

    <div id="yachtMenu" className="tabsMenu">
    <h2>Jak to działa?</h2>
    <h4>Krok po kroku</h4>
      <h3><div className="numberBox"><p className="numberText">1</p></div>Wybierz jednostkę a następnie klasę jachtu</h3>
      <Tabs>
      <div title="Jacht">
      <div className="classBox">
      <YachtDescription textComponent={comfort}/>
      <YachtDescription textComponent={premier} />
      <YachtDescription textComponent={premierPlus}/>

      </div>
      </div>
      <div title="Katamaran">
      <div className="classBox" style={{justifyContent: "space-evenly"}}>
      <YachtDescription textComponent={katComfort}/>
      <YachtDescription textComponent={katPremier}/>


      </div>
      </div>
      </Tabs>
    </div>
  );
}
