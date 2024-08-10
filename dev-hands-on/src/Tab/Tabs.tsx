import React, { ReactNode, FC, useState } from "react";
import "./styles.css";

interface TabsProps {
  tabs: string[];
  children: ReactNode[];
}

export const Tabs: FC<TabsProps> = ({ tabs, children }) => {
  const [activeChildren, setActiveChildren] = useState<number>(0);
  const handleActiveTab = (index: number) => {
    setActiveChildren(index);
  };
  return (
    <main>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            onClick={() => handleActiveTab(index)}
            key={index}
            className={index === activeChildren ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">{children[activeChildren]}</div>
    </main>
  );
};
