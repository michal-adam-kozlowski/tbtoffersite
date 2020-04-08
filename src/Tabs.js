import React, { useState } from "react";
import "./Tab.scss";
import one from "./img/icons/one.png";
import two from "./img/icons/two.png";
import three from "./img/icons/three.png";
import yacht from "./img/icons/boat-2.png";

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
      <div className="tab-indicator-container">
        <div
          className="tab-indicator"
           style={{
             width: 100 / props.children.length + "%",
             transform: `translateX(${activeTabIndex * 100}%)`
           }}
        />
      </div>
      <div className="tab-content">{activeTab.props.children}</div>
    </div>
  );
};

export default function TabsMenu() {
  return (
    <div className="TabsMenu">
      <h2>Jak to działa?</h2>
      <h4>Krok po kroku</h4>
      <h3><img src={one} alt={one} />Wybierz jedną z opcji rezerwacji na jachcie</h3>
      <Tabs>
        <div title="Jacht">
        <div className="tab-image"><img src={yacht} alt={yacht}/></div>
        <div className="tab-text"><h3>Cały jacht (7-12 osób)</h3><p>Jeżeli chcesz zapisać się na rejs z całą swoją ekipią, skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj cały jacht</span>. Nie musicie mieć pojęcia o żeglowaniu - przydzielimy Wam skippera, który wszystkim się zajmie.
           I w sumie to najlepsze co możecie zrobić! Dlaczego? Bo jedziecie całą paczką i oszczędzacie do 120 PLN/os. w stosunku do zapisów indywidualnych.</p></div>
        </div>
        <div title="Kabina">
        <div className="tab-image"><img src={yacht} alt={yacht}/></div>
        <div className="tab-text"><h3>Kabina (2 osoby)</h3><p>Jeżeli jest was dwoje/dwóch/dwie i zależy Wam na gwarancji zakwaterowania w zamykanej kabinie z podwójnym łóżkiem, skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz "Kabina 2- osobowa". W kolejnym kroku podaj swoje dane i dane osoby towarzyszącej* i witamy na pokładzie!</p></div>
        </div>
        <div title="Solo">
        <div className="tab-image"><img src={yacht} alt={yacht}/>

  </div>
        <div className="tab-text"><h3>Pojedyncze miejsce (1 osoba)</h3><p>Jeżeli chcesz zapisać na rejs tylko siebie (albo siebie i kilku znajomych) skorzystaj z opcji <span style={{fontWeight: 600}}>rezerwuj miejsce na jachcie lub kabinę</span>, wybierz Klasę Jachtu, kliknij Rezerwuj i następnie zaznacz ile osób chcesz zgłosić. W kolejnym kroku podaj dane swoje i wszystkich zgłaszanych przez Ciebie osób i już! Witamy na pokładzie!</p></div>
        </div>
      </Tabs>
    </div>
  );
}
