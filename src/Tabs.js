import React, { useState } from "react";
import "./Tab.scss";

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
      <h2>Step by step</h2>
      <Tabs>
        <div title="Jacht">
        blbalbalbalb
        </div>
        <div title="Kabina">
          blablabla
        </div>
        <div title="Solo">
          blbalalablba
        </div>
      </Tabs>
    </div>
  );
}
