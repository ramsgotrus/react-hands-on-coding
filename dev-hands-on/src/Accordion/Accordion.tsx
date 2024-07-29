import React from "react";
import AccordionItems from "./AccordionItems";

const Accordion: React.FC = () => {
  const accordionItems = [
    {
      title: "Accordion Item 1",
      content: "Content for the first accordion item.",
    },
    {
      title: "Accordion Item 2",
      content: "Content for the second accordion item.",
    },
    {
      title: "Accordion Item 3",
      content: "Content for the third accordion item.",
    },
  ];

  return (
    <div>
      <AccordionItems items={accordionItems} />
    </div>
  );
};
export default Accordion;
