import React, { useState } from "react";
import "./Tabs.js"
import "./Tab.scss";
import "./Yachts.scss"
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
      <div className="tab-content-yachts">{activeTab.props.children}</div>
    </div>
  );
};

export default function YachtClass() {
  return (
    <div className="TabsMenu">
    <h2>Jak to działa?</h2>
    <h4>Krok po kroku</h4>
      <h3><img src={one} alt={one} />Wybierz jednostkę a następnie klasę jachtu</h3>
      <Tabs>
      <div title="Jacht">
      <div className="class-box">
      <div className="comfort"></div>
      <div className="premier"></div>
      <div className="premier+"></div>
      </div>
      </div>
        <div title="Katamaran">
        <div className="class-box">
        <div className="comfort"></div>
        <div className="premier"></div>
        <div className="premier+"></div>
        </div>
        </div>
      </Tabs>
    </div>
  );
}
