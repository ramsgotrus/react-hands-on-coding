import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionItemsProps {
  items: AccordionItem[];
}

const AccordionItems: React.FC<AccordionItemsProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {items.map((item, index) => (
        <div>
          <div
            key={index}
            style={{
              cursor: "pointer",
              padding: "10px",
              background: "#f1f1f1",
              border: "1px solid #ccc",
              marginBottom: "5px",
            }}
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div style={{ background: "#f1f1f1", padding: "5px" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionItems;
