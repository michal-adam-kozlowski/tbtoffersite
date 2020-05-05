import React from 'react';
import './Tag.scss';
import TagTravel from "./TagTravel.js"

const travelTagArr = [
  // {
  //   name: "Samolot",
  //   tagTitle: "Lot do Zadaru",
  //   text: "Z Zadaru do Sukosanu można łatwo dojechać regularnie kursującymi autobusami.",
  //   class: "fas fa-plane"
  // },
  {
    class: "fas fa-bus",
    tagTitle: "Transport",
    text: "Możliwy dojazd naszym autokarem. Koszt w dwie strony to 350 PLN/os.",
  },
  {
    class: "fas fa-pizza-slice",
    tagTitle: "Paliwo, jedzenie i porty",
    text: "Zrzutka na miejscu na paliwo, jedzenie i porty to koszt ok. 15-20 EUR/os./dzień. Skipper nie uczestniczy w tej składce.",
  },
  {
    class: "fas fa-coins",
    tagTitle: "Taksa turystyczna",
    text: "Koszt to 10 EUR/os.",
  },
  {
    class: "fas fa-file",
    tagTitle: "Składka turystyczna",
    text: "Obowiązkowa składka na Turystyczny Fundusz Gwarancyjny wynikająca z nowelizacji Ustawy - 10 PLN/os.",
  },
  {
    class: "fas fa-wifi",
    tagTitle: "Opłata 'Starter Pack'",
    text: "Zero kaucji, pełne ubezpieczenie szkód, pościel oraz sprzątanie końcowe jachtu, gaz, wifi na pokładzie. Koszt to 35 EUR/os.",
  },
  {
    class: "fas fa-user-friends",
    tagTitle: "Kabina 2-os.",
    title: "(opcjonalnie)",
    text: "Gwarancja zaokrętowania w 2-osobowej kabinie z podwójnym łóżkiem - koszt 150 PLN/os. Wybór tej opcji daje Wam pewność, że nie będziecie spać w salonie.",
  },
  {
    class: "fas fa-female",
    tagTitle: "Stewardessa",
    title: "(opcjonalnie)",
    text: "Koszt 2000 PLN/jacht. Opcja dostępna wyłącznie przy bookingu całego jachtu, na zapytanie mailowe)",
  },


];

class TagTravelWrapper extends React.Component {
  render() {
    return (
      <div className="tagTravelWrapper">
        <h3>Koszt dodatkowy:</h3>
        <div className="tagTravelBox">
          {travelTagArr.map((singleTag) =>
            <TagTravel class={singleTag.class} tagTitle={singleTag.tagTitle} title={singleTag.title} text={singleTag.text} />
          )}
        </div>
      </div>
    )
  }
}

export default TagTravelWrapper
