// src/Tab.tsx
import React, { useState, ReactNode } from "react";
import "./styles.css";

interface TabProps {
  tabs: string[];
  children: ReactNode[];
}

export const Tab: React.FC<TabProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};
