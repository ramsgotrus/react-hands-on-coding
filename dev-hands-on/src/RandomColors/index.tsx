import React, { FC, useState } from "react";
import { getRandomColor } from "./Utils";
import "./styles.css";
export const RandomColors: FC = () => {
  const [color, setColor] = useState<string>("#FFFFFF");
  const handleChange = () => {
    setColor(getRandomColor());
  };
  return (
    <div className="main-container">
      <div
        className="color-container"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <button onClick={handleChange}>Change Background</button>
    </div>
  );
};
