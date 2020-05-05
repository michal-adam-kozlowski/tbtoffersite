import React, { useState } from "react";
import Yachts from "./Yachts.js";
import YachtsPopUpContent from "./YachtsPopUpContent.js";
import "./BookOptions.scss";
import "./Yachts.scss";


const yachtsArr = [
   {
  image: require("./img/comfort.jpg"),
  name: "Comfort",
  name2: "Jacht klasy Comfort",
  price: 1590,
  person: "8 max 10",
  year: "2008 - 2010",
  amenities: {
    first: "3 lub 4 zamykane kabiny",
    second: "przestronny salon z kuchnią",
    third: "2 lub 3 łazienki"
  },
  info1Title: "To podstawowa klasa jachtów w naszej ofercie.",
  info1: "Rezerwując tutaj miejsce zostaniecie zakwaterowani na wygodnym jachcie 8-10 osobowym (długość kadłuba od 40 do 46 stóp ~ 12-14m), około 10-12 letnim.",
  info2Title: "Przykładowe jednostki: ",
  info2: " Sun Odyssey 439, Oceanis 43 lub Bavaria 44.",
  info3Title: "Jeśli jacht jest 8-osobowy",
  info3: ", standardowy układ do spania to 3 zamykane kabiny dwuosobowe + rozkładana kanapa dwuosobowa w salonie i 2 łazienki.",
  info4Title: "Jeśli jacht jest 10-osobowy",
  info4: ", standardowy układ do spania to 3 zamykane kabiny dwuosobowe + czwarta zamykana kabina z łóżkiem piętrowym + rozkładana kanapa dwuosobowa w salonie. Na poglądowych zdjęciach powyżej przedstawiamy przykładowy jacht klasy COMFORT - widok z zewnątrz, kajuty, salon i standardowy rozkład miejsc do spania.",
  gallery: {
    first: require("./img/comfort-22.jpg"),
    second: require("./img/comfort-33.jpg"),
    third: require("./img/comfort-44.jpg"),
    fourth: require("./img/comfort-55.jpg")
  }
},

 {
  image: require("./img/premier.jpg"),
  name: "Premier",
  name2: "Jacht klasy Premier",
  price: 1790,
  person: "8 max 10",
  year: "2014 lub nowszy",
  amenities: {
   first: "3 lub 4 zamykane kabiny",
   second: "przestronny salon z kuchnią",
   third: "2 lub 3 łazienki"
 },
  info1Title: "Jeśli szukasz zakwaterowania na nowszym i lepiej wykończonym jachcie, to jest klasa dla Ciebie.",
  info1: "Rezerwując miejsce na jachcie klasy PREMIER zostaniecie zakwaterowani na wygodnym jachcie 8-10 osobowym (długość kadłuba od 40 do 46 stóp ~ 12-14m), wyprodukowanym w roku 2014 lub nowszym.",
  info2Title: "Przykładowe jednostki: ",
  info2: " Sun Odyssey 449, Oceanis 46.1 lub Bavaria 45. Wielkościowo i pod kątem układu jachty są podobne do tych w klasie COMFORT, natomiast głównym wyznacznikiem przynależności do klasy jest tu wiek jednostki.",
  info3Title: "Jeśli jacht jest 8-osobowy",
  info3: ", standardowy układ do spania to 3 zamykany kabiny dwuosobowe + rozkładana kanapa dwuosobowa w salonie i 2 łazienki.",
  info4Title: "Jeśli jacht jest 10-osobowy",
  info4: ", standardowy układ do spania to 3 zamykane kabiny dwuosobowe + czwarta zamykana kabina z łóżkiem piętrowym + rozkładana kanapa dwuosobowa w salonie.",
  gallery: {
    first: require("./img/premier-22.jpg"),
    second: require("./img/premier-33.jpg"),
    third: require("./img/premier-44.jpg"),
    fourth: require("./img/premier-55.jpg")
  }
},

{
  image: require("./img/premier-plus.jpg"),
  name: "Premier +",
  name2: "Jacht klasy Premier+",
  price: 2090,
  person: "11 max 13",
  year: "2014 lub nowszy",
  amenities: {
    first: "5 zamykanych kabin",
    second: "przestronny salon z kuchnią",
    third: "4-5 łazienek"
  },
  shortInfo: "Najlepiej wyposażone i pełne udogodnień. Pamiętajcie, że nikt nie śpi tu w salonie, co diametralnie wpływa na komfort życia.",
  info1Title: "Najwyższa dostępna klasa jachtów i jednoczesnie najbardziej wygodna.",
  info1: "Rezerwując miejsce na jachcie klasy PREMIER PLUS zostaniecie zakwaterowani na wygodnym dużym jachcie , na którym nikogo nie kwaterujemy w salonie. Jacht będzie mieć długość kadłuba od 50 stóp w górę ~ ponad 15m i będzie wyprodukowany w roku 2014 lub nowszy.",
  info2Title: "Przykładowe jednostki: ",
  info2: " Sun Odyssey 519, Oceanis 51.1, Bavaria 51 lub Elan 50.",
  info3Title: "Jachty tej klasy są nominalnie 13-osobowe. ",
  info3: "Standardowy układ do spania to 4 zamykane kabiny dwuosobowe + piąta zamykana kabina z łóżkiem piętrowym + 1-osobowa kabina skippera + rozkładana kanapa dwuosobowa w salonie.",
  info4Title: "Na jachcie tej klasy nie kwaterujemy nikogo w salonie.",
  info4: "Pływa tutaj maksymalnie 11 osób (10 osób w kabinach dwuosobowych + skipper w skipperce jednoosobowej na dziobie).",
  gallery: {
    first: require("./img/premier-plus-22.jpg"),
    second: require("./img/premier-plus-33.jpg"),
    third: require("./img/premier-plus-44.jpg"),
    fourth: require("./img/premier-plus-55.jpg")
  }

},

 {
  image: require("./img/kat-comfort.jpg"),
  name: "Comfort",
  name2: "Katamaran klasy Comfort",
  price: "2090",
  person: "12",
  year: "2014 lub nowszy",
  amenities: {
    first: "4 zamykane kabiny",
    second: "2 salony (zewnętrzny i wewnętrzny z kuchnią)",
    third: "4-5 łazienek"
  },
  shortInfo: "Godne zaufania, sprawdzone i praktyczne katamarany. Są wyposażone we wszystkie kluczowe i niezbędne elementy.",
  info1Title: "To podstawowa klasa katamaranów w naszej ofercie. ",
  info1: "Rezerwując tutaj miejsce zostaniecie zakwaterowani na wygodnym katamaranie 12-osobowym, o długości około 40 stóp wyprodukowanym w roku 2014 lub nowszym.",
  info2Title: "Przykładowe jednostki: ",
  info2: " Lagoon 39, Lagoon 400, Lucia 40 lub Bali 4.1.",
  info3Title: "Na katamaranie standardowo kwaterujemy 10 osób załogi + skippera. ",
  info3: "Do dyspozycji załogi są 4 kabiny dwuosobowe i 2 miejsca do spania w salonie (rozkładana sofa), skipper najczęściej śpi w skipperce na dziobie.",
  gallery: {
    first: require("./img/kat-comfort-22.jpg"),
    second: require("./img/kat-comfort-33.jpg"),
    third: require("./img/kat-comfort-44.jpg"),
    fourth: require("./img/kat-comfort-55.jpg")
  }
},

 {
  image: require("./img/kat-premier.jpg"),
  name: "Premier",
  name2: "Katamaran klasy Premier",
  price: "2290",
  person: "12",
  year: "2014 lub nowszy",
  amenities: {
    first: "4 zamykane kabiny",
    second: "2 salony (zewnętrzny i wewnętrzny z kuchnią)",
    third: "4-5 łazienek"
  },
  shortInfo: "Bardzo dobre jednostki, oferują sporo udogodnień i są znacząco większe od katamaranów COMFORT, a pływa na nich ta sama liczba osób. ",
  info1Title: "Jeśli szukasz zakwaterowania na większym i lepiej wykończonym katamaranie, to jest klasa dla Ciebie. ",
  info1: "Rezerwując miejsce na katamaranie klasy PREMIER zostaniecie zakwaterowani na wygodnej jednostce o długości kadłuba powyżej 42 stóp, wyprodukowanej w roku 2014 lub nowszym.",
  info2Title: "Przykładowe jednostki: ",
  info2: " Lagoon 42, Lagoon 450, Bali 4.3, Bali 4.5.",
  info3Title: "Wiekowo i pod kątem układu katamarany z tej klasy są podobne do tych w klasie COMFORT.",
  info3: "Głównym wyznacznikiem przynależności do klasy jest tu wielkość jednostki i większa przestrzeń na niej.",
  info4Title: "Na katamaranie standardowo kwaterujemy 10 osób załogi + skippera. ",
  info4: "Do dyspozycji załogi są 4 kabiny dwuosobowe i 2 miejsca do spania w salonie (rozkładana sofa), skipper najczęściej śpi w skipperce na dziobie.",
  gallery: {
    first: require("./img/kat-premier-22.jpg"),
    second: require("./img/kat-premier-33.jpg"),
    third: require("./img/kat-premier-44.jpg"),
    fourth: require("./img/kat-premier-55.jpg")
}
 }
]


// const katPremierPlus = {
//   image: require("./img/kat-premier-plus.jpg"),
//   name: "Premier +",
//   price: 2090,
//   person: "10 max 11",
//   year: "2014 lub nowszy",
//   amenities: ["5 zamykanych kabiny", "nie kwaterujemy nikogo w salonie!", "2 łazienki"]
// };

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


function YachtWrapper(props) {
  return (
    <div id="yachtMenu" className="tabsMenu">
      <h2>Jak to działa?</h2>
      <h4>Krok po kroku</h4>
      <div className="titleReservations">
          <div className="numberBox">
            <p className="numberText">1</p>
        </div>
          <h3>Wybierz jednostkę a następnie klasę jachtu</h3>
          <p>Nowoczesne jachty to ekwiwalent pięknych apartamentów, tylko mobilnych - pływających! Wygodne i bezpieczne, w pełni wyposażone we wszystko niezbędne do życia. Podróżowanie nigdy nie było tak przyjemne!</p>
          </div>
        <Tabs>
        <div title="Jacht">
          <div className="classBox">
            <div><Yachts textComponent={yachtsArr[0]}/> <YachtsPopUpContent content={yachtsArr[0]}/></div>
            <div><Yachts textComponent={yachtsArr[1]} /> <YachtsPopUpContent content={yachtsArr[1]}/> </div>
            <div><Yachts textComponent={yachtsArr[2]}/> <YachtsPopUpContent content={yachtsArr[2]}/> </div>
          </div>
        </div>
        <div title="Katamaran">
          <div className="classBox" id="catamaran">
            <div><Yachts textComponent={yachtsArr[3]}/> <YachtsPopUpContent content={yachtsArr[3]}/> </div>
            <div><Yachts textComponent={yachtsArr[4]}/> <YachtsPopUpContent content={yachtsArr[4]}/> </div>
          </div>
        </div>
        </Tabs>
    </div>
  );
}
export default YachtWrapper
