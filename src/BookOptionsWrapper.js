import React, { useState } from "react";
import BookOptions from "./BookOptions.js";
import "./BookOptions.scss";
import CheckPrice from "./CheckPrice.js"

const bookArr = [
  {
    title: "Jacht",
    name: "Cały jacht (7-12 osób)",
    icon: "fas fa-ship fa-7x",
    info: "Jeżeli chcesz zapisać się na rejs z całą swoją ekipią, skorzystaj z opcji rezerwuj cały jacht. Nie musicie mieć pojęcia o żeglowaniu - przydzielimy Wam skippera, który wszystkim się zajmie. I w sumie to najlepsze co możecie zrobić! Dlaczego? Bo jedziecie całą paczką i oszczędzacie do 120 PLN/os. w stosunku do zapisów indywidualnych."
  },

 {
    title: "Kabina",
    name: "Kabina (2 osoby)",
    icon: "fas fa-user-friends fa-7x",
    info: "Jeżeli jest was dwoje i zależy Wam na gwarancji zakwaterowania w zamykanej kabinie z podwójnym łóżkiem, skorzystaj z opcji rezerwuj miejsce na jachcie lub kabinę wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz 'Kabina 2-osobowa'. W kolejnym kroku podaj swoje dane i dane osoby towarzyszącej."
  },

  {
    title: "Solo",
    name: "Pojedyncze miejsce (1 osoba)",
    icon: "fas fa-user-alt fa-7x",
    info: "Jeżeli chcesz zapisać na rejs tylko siebie (albo siebie i kilku znajomych) skorzystaj z opcji rezerwuj miejsce na jachcie lub kabinę, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz ile osób chcesz zgłosić. W kolejnym kroku podaj dane swoje i wszystkich zgłaszanych przez Ciebie osób i już! Witamy na pokładzie!"
  }
]

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
      <div className="tabsMenu" id="bookOptions">
        <div className="titleReservations" >
          <div className="numberBox">
            <p className="numberText">2</p>
          </div>
          <h3>Wybierz jedną z opcji rezerwacji</h3>
        </div>
        <Tabs>
          <div title="Jacht">
            <BookOptions book={bookArr[0]} />
            <CheckPrice/>
          </div>
          <div title="Kabina">
            <BookOptions book={bookArr[1]} />
            <CheckPrice/>
          </div>
          <div title="Solo">
            <BookOptions book={bookArr[2]} />
            <CheckPrice/>
          </div>
        </Tabs>
        
      </div>
    );
  }
}

export default BookOptionsWrapper
