import React, { useState } from "react";
export const Dropdown = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [select, setSelect] = useState();

  const handleChange = () => {
    setIsVisible(isVisible => !isVisible);
  };
  console.log("s", isVisible);
  return (
    <div style={{ display: "inline-block", width:'100px' }}>
        <select>
          {items.map((item) =>(
            <option>{item}</option>
          ))}
        </select>
    </div>
  );
};
