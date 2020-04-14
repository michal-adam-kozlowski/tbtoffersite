import React, { useState } from "react";
import "./BookOptions.scss";

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

export default function TabsMenu() {
  return (
    <div className="tabsMenu">
      <h3><div className="numberBox"><p className="numberText">2</p></div>Wybierz jedną z opcji rezerwacji</h3>
      <Tabs>
        <div title="Jacht">
        <div className="tabImage"><i class="fas fa-ship fa-7x"></i></div>
        <div className="tabText"><h4>Cały jacht (7-12 osób)</h4><p>Jeżeli chcesz zapisać się na rejs z całą swoją ekipią, skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj cały jacht</span>. Nie musicie mieć pojęcia o żeglowaniu - przydzielimy Wam skippera, który wszystkim się zajmie.
           I w sumie to najlepsze co możecie zrobić! Dlaczego? Bo jedziecie całą paczką i oszczędzacie do 120 PLN/os. w stosunku do zapisów indywidualnych.</p></div>
        </div>
        <div title="Kabina">
        <div className="tabImage"><i className="fas fa-user-friends fa-7x"></i></div>
        <div className="tabText"><h4>Kabina (2 osoby)</h4><p>Jeżeli jest was dwoje i zależy Wam na gwarancji zakwaterowania w zamykanej kabinie z podwójnym łóżkiem, skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz "Kabina 2- osobowa". W kolejnym kroku podaj swoje dane i dane osoby towarzyszącej.</p></div>
        </div>
        <div title="Solo">
        <div className="tabImage"><i class="fas fa-user-alt fa-7x"></i>

  </div>
        <div className="tabText"><h4>Pojedyncze miejsce (1 osoba)</h4><p>Jeżeli chcesz zapisać na rejs tylko siebie (albo siebie i kilku znajomych) skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz ile osób chcesz zgłosić. W kolejnym kroku podaj dane swoje i wszystkich zgłaszanych przez Ciebie osób i już! Witamy na pokładzie!</p></div>
        </div>
      </Tabs>
    </div>
  );
}
