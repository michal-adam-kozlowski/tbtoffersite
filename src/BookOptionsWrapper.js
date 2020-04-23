import React, { useState } from "react";
import BookOptions from "./BookOptions.js";
import "./BookOptions.scss";

const wholeYacht = {
  title: "Jacht",
  name: "Cały jacht (7-12 osób)",
  icon: "fas fa-ship fa-7x",
  info: "Jeżeli chcesz zapisać się na rejs z całą swoją ekipią, skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj cały jacht</span>. Nie musicie mieć pojęcia o żeglowaniu - przydzielimy Wam skippera, który wszystkim się zajmie. I w sumie to najlepsze co możecie zrobić! Dlaczego? Bo jedziecie całą paczką i oszczędzacie do 120 PLN/os. w stosunku do zapisów indywidualnych."
};

const cabin = {
  title: "Kabina",
  name: "Kabina (2 osoby)",
  icon: "fas fa-user-friends fa-7x",
  info: "Jeżeli jest was dwoje i zależy Wam na gwarancji zakwaterowania w zamykanej kabinie z podwójnym łóżkiem, skorzystaj z opcji rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz - Kabina 2- osobowa. W kolejnym kroku podaj swoje dane i dane osoby towarzyszącej."
};

const solo = {
  title: "Solo",
  name: "Pojedyncze miejsce (1 osoba)",
  icon: "fas fa-user-alt fa-7x",
  info: "Jeżeli chcesz zapisać na rejs tylko siebie (albo siebie i kilku znajomych) skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz ile osób chcesz zgłosić. W kolejnym kroku podaj dane swoje i wszystkich zgłaszanych przez Ciebie osób i już! Witamy na pokładzie!"
}

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
      <div className="tabIndicatorContainer">
        <div
          className="tabIndicator"
           style={{
             width: 100 / props.children.length + "%",
             transform: `translateX(${activeTabIndex * 100}%)`
           }}
        />
      </div>
      <div className="tabContent">{activeTab.props.children}</div>
    </div>
  );
};

class BookOptionsWrapper extends React.Component {
  render() {
  return (
    <div className="tabsMenu">
    <div className="titleReservations">
        <div className="numberBox">
          <p className="numberText">2</p>
      </div>
        <h3>Wybierz jedną z opcji rezerwacji</h3>
        </div>
        <Tabs>
          <div title="Jacht">
            <BookOptions book={wholeYacht} />
          </div>
          <div title="Kabina">
            <BookOptions book={cabin} />
          </div>
          <div title="Solo">
            <BookOptions book={solo} />
          </div>
        </Tabs>
      </div>
  );
 }
}

export default BookOptionsWrapper
