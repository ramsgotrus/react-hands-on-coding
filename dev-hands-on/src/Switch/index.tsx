import React, { FC, useState } from "react";

export const Switch: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  return (
    <div
      onClick={handleChange}
      style={{
        width: "60px",
        height: "30px",
        backgroundColor: isChecked ? "#4CAF50" : "#ccc",
        borderRadius: "15px",
        position: "relative",
        cursor: "pointer",
        transition: "background-color 0.10s",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "#FFFFF",
          borderRadius: "15px",
          position: "absolute",
          top: "0",
          left: isChecked ? "30px" : "0",
          transition: "left 0.3s",
        }}
      ></div>
    </div>
  );
};
