import React, { FC, useState } from "react";
import "./style.css";

export const Switch: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOn((isOn) => !isOn);
  };
  return (
    <div className="switch-container">
      <input
        onChange={handleChange}
        id="switch"
        type="checkbox"
        className="switch-checkbox"
        checked={isOn}
      />
      <label
        style={{ background: isOn ? "green" : "gray" }}
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className="switch-button" />
      </label>
    </div>
  );
};
