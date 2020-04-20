import React, { useState } from "react";
import "./BookOptions.js";
import "./BookOptions.scss";
import "./YachtSelection.scss";
import YachtDescription from "./YachtDescription.js";
import PopUpContent from "./PopUpContent.js";

import imageComfort2 from './img/comfort-22.jpg';
import imageComfort3 from './img/comfort-33.jpg';
import imageComfort4 from './img/comfort-44.jpg';
import imageComfort5 from './img/comfort-55.jpg';

import imagePremier2 from './img/premier-22.jpg';
import imagePremier3 from './img/premier-33.jpg';
import imagePremier4 from './img/premier-44.jpg';
import imagePremier5 from './img/premier-55.jpg';

import imagePremierPlus2 from './img/premier-plus-22.jpg';
import imagePremierPlus3 from './img/premier-plus-33.jpg';
import imagePremierPlus4 from './img/premier-plus-44.jpg';
import imagePremierPlus5 from './img/premier-plus-55.jpg';

import imageKatComfort2 from './img/kat-comfort-22.jpg';
import imageKatComfort3 from './img/kat-comfort-33.jpg';
import imageKatComfort4 from './img/kat-comfort-44.jpg';
import imageKatComfort5 from './img/kat-comfort-55.jpg';

import imageKatPremier2 from './img/kat-premier-22.jpg';
import imageKatPremier3 from './img/kat-premier-33.jpg';
import imageKatPremier4 from './img/kat-premier-44.jpg';
import imageKatPremier5 from './img/kat-premier-55.jpg';



const Tabs = props => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = props.children[activeTabIndex];
  return (
    <div>
      <div className="tabs">
        {props.children.map((tab, i) => (
          <button className="tabBtn" onClick={() => {setActiveTabIndex(i);}} key={i} > {tab.props.title} </button>
        ))}
      </div>
      <div id="yachtTabIndicatorContainer" className="tabIndicatorContainer">
        <div className="tabIndicator"
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
    name2: "Jacht klasy Comfort",
    price: 1590,
    person: "8 max 10",
    year: "2008 - 2010",
    amenities: ["3 lub 4 zamykane kabiny", "przestronny salon z kuchnią", "2 lub 3 łazienki"],
    info1: [<strong>To podstawowa klasa jachtów w naszej ofercie</strong>, ", rezerwując tutaj miejsce zostaniecie zakwaterowani na wygodnym jachcie 8-10 osobowym (długość kadłuba od 40 do 46 stóp ~ 12-14m), około 10-12 letnim."],
    info2: [<strong>Przykładowe jednostki</strong>, " w tej klasie to Sun Odyssey 439, Oceanis 43 lub Bavaria 44."],
    info3: [<strong>Jeśli jacht jest 8-osobowy</strong>, " standardowy układ do spania to 3 zamykane kabiny dwuosobowe + rozkładana kanapa dwuosobowa w salonie i 2 łazienki."],
    info4: [<strong>Jeśli jacht jest 10-osobowy</strong>, " standardowy układ do spania to 3 zamykane kabiny dwuosobowe + czwarta zamykana kabina z łóżkiem piętrowym + rozkładana kanapa dwuosobowa w salonie. Na poglądowych zdjęciach powyżej przedstawiamy przykładowy jacht klasy COMFORT - widok z zewnątrz, kajuty, salon i standardowy rozkład miejsc do spania."],
    gallery: [<img src={imageComfort2} alt="" />, <img src={imageComfort3} alt="" />, <img src={imageComfort4} alt="" />, <img src={imageComfort5} alt="" />]
  };

  const premier = {
    image: require("./img/premier.jpg"),
    name: "Premier",
    name2: "Jacht klasy Premier",
    price: 1790,
    person: "8 max 10",
    year: "2014 lub nowszy",
    amenities: ["3 lub 4 zamykane kabiny", "przestronny salon z kuchnią", "2 lub 3 łazienki"],
    info1: [<strong>Jeśli szukasz zakwaterowania na nowszym i lepiej wykończonym jachcie</strong>, ", to jest klasa dla Ciebie. Rezerwując miejsce na jachcie klasy PREMIER zostaniecie zakwaterowani na wygodnym jachcie 8-10 osobowym (długość kadłuba od 40 do 46 stóp ~ 12-14m), wyprodukowanym w roku 2014 lub nowszym."],
    info2: [<strong>Przykładowe jednostki</strong>, " w tej klasie to Sun Odyssey 449, Oceanis 46.1 lub Bavaria 45. Wielkościowo i pod kątem układu jachty są podobne do tych w klasie COMFORT, natomiast głównym wyznacznikiem przynależności do klasy jest tu wiek jednostki."],
    info3: [<strong>Jeśli jacht jest 8-osobowy</strong>, " standardowy układ do spania to 3 zamykany kabiny dwuosobowe + rozkładana kanapa dwuosobowa w salonie i 2 łazienki."],
    info4: [<strong>Jeśli jacht jest 10-osobowy</strong>, " standardowy układ do spania to 3 zamykane kabiny dwuosobowe + czwarta zamykana kabina z łóżkiem piętrowym + rozkładana kanapa dwuosobowa w salonie."],
    gallery: [<img src={imagePremier2} alt="" />, <img src={imagePremier3} alt="" />, <img src={imagePremier4} alt="" />, <img src={imagePremier5} alt="" />]
  };

  const premierPlus = {
    image: require("./img/premier-plus.jpg"),
    name: "Premier +",
    name2: "Jacht klasy Premier+",
    price: 2090,
    person: "11 max 13",
    year: "2014 lub nowszy",
    amenities: ["5 zamykanych kabin", "przestronny salon z kuchnią", "4-5 łazienek"],
    shortInfo: "Najlepiej wyposażone i pełne udogodnień. Pamiętajcie, że nikt nie śpi tu w salonie, co diametralnie wpływa na komfort życia.",
    info1: [<strong>Najwyższa dostępna klasa jachtów i jednoczesnie najbardziej wygodna.</strong>, ", Rezerwując miejsce na jachcie klasy PREMIER PLUS zostaniecie zakwaterowani na wygodnym dużym jachcie , na którym nikogo nie kwaterujemy w salonie. Jacht będzie mieć długość kadłuba od 50 stóp w górę ~ ponad 15m i będzie wyprodukowany w roku 2014 lub nowszy."],
    info2: [<strong>Przykładowe jednostki</strong>, " w tej klasie to Sun Odyssey 519, Oceanis 51.1, Bavaria 51 lub Elan 50."],
    info3: [<strong>Jachty tej klasy są nominalnie 13-osobowe</strong>, ", a standardowy układ do spania to 4 zamykane kabiny dwuosobowe + piąta zamykana kabina z łóżkiem piętrowym + 1-osobowa kabina skippera + rozkładana kanapa dwuosobowa w salonie."],
    info4: [<strong> Na jachcie tej klasy nie kwaterujemy nikogo w salonie</strong>, " , więc pływa tutaj maksymalnie 11 osób (10 osób w kabinach dwuosobowych + skipper w skipperce jednoosobowej na dziobie)."],
    gallery: [<img src={imagePremierPlus2} alt="" />, <img src={imagePremierPlus3} alt="" />, <img src={imagePremierPlus4} alt="" />, <img src={imagePremierPlus5} alt="" />]
  };

  const katComfort = {
    image: require("./img/kat-comfort.jpg"),
    name: "Comfort",
    name2: "Katamaran klasy Comfort",
    price: "2090 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "2 salony (zewnętrzny i wewnętrzny z kuchnią)", "4-5 łazienek", ],
    shortInfo: "Godne zaufania, sprawdzone i praktyczne katamarany. Są wyposażone we wszystkie kluczowe i niezbędne elementy.",
    info1: [<strong>To podstawowa klasa katamaranów w naszej ofercie</strong>, ", rezerwując tutaj miejsce zostaniecie zakwaterowani na wygodnym katamaranie 12-osobowym, o długości około 40 stóp wyprodukowanym w roku 2014 lub nowszym."],
    info2: [<strong>Przykładowe jednostki</strong>, " w tej klasie to Lagoon 39, Lagoon 400, Lucia 40 lub Bali 4.1."],
    info3: [<strong>Na katamaranie standardowo kwaterujemy 10 osób załogi + skippera.</strong>, " Do dyspozycji załogi są 4 kabiny dwuosobowe i 2 miejsca do spania w salonie (rozkładana sofa), skipper najczęściej śpi w skipperce na dziobie."],
    gallery: [<img src={imageKatComfort2} alt="" />, <img src={imageKatComfort3} alt="" />, <img src={imageKatComfort4} alt="" />, <img src={imageKatComfort5} alt="" />]
  };

  const katPremier = {
    image: require("./img/kat-premier.jpg"),
    name: "Premier",
    name2: "Katamaran klasy Premier",
    price: "2290 PLN",
    person: "12",
    year: "2014 lub nowszy",
    amenities: ["4 zamykane kabiny", "2 salony (zewnętrzny i wewnętrzny z kuchnią)", "4-5 łazienek" ],
    shortInfo: "Bardzo dobre jednostki, oferują sporo udogodnień i są znacząco większe od katamaranów COMFORT, a pływa na nich ta sama liczba osób. ",
    info1: [<strong>Jeśli szukasz zakwaterowania na większym i lepiej wykończonym katamaranie</strong>, ", to jest klasa dla Ciebie. Rezerwując miejsce na katamaranie klasy PREMIER zostaniecie zakwaterowani na wygodnej jednostce o długości kadłuba powyżej 42 stóp, wyprodukowanej w roku 2014 lub nowszym."],
    info2: [<strong>Przykładowe jednostki</strong>, " w tej klasie to Lagoon 42, Lagoon 450, Bali 4.3, Bali 4.5."],
    info3: "Wiekowo i pod kątem układu katamarany z tej klasy są podobne do tych w klasie COMFORT, natomiast głównym wyznacznikiem przynależności do klasy jest tu wielkość jednostki i większa przestrzeń na niej.",
    info4: [<strong>Na katamaranie standardowo kwaterujemy 10 osób załogi + skippera.</strong>, " Do dyspozycji załogi są 4 kabiny dwuosobowe i 2 miejsca do spania w salonie (rozkładana sofa), skipper najczęściej śpi w skipperce na dziobie."],
    gallery: [<img src={imageKatPremier2} alt="" />, <img src={imageKatPremier3} alt="" />, <img src={imageKatPremier4} alt="" />, <img src={imageKatPremier5} alt="" />]
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
            <div><YachtDescription textComponent={comfort}/> <PopUpContent content={comfort}/></div>
            <div><YachtDescription textComponent={premier} /> <PopUpContent content={premier}/> </div>
            <div><YachtDescription textComponent={premierPlus}/> <PopUpContent content={premierPlus}/> </div>
          </div>
        </div>
        <div title="Katamaran">
          <div className="classBox" style={{justifyContent: "space-evenly"}}>
            <div><YachtDescription textComponent={katComfort}/> <PopUpContent content={katComfort} /> </div>
            <div><YachtDescription textComponent={katPremier}/> <PopUpContent content={katPremier}/> </div>
          </div>
        </div>
        </Tabs>
    </div>
  );
}
