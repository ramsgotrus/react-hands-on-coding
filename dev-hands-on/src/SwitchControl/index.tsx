import React, { FC, useState } from "react";

const POSITION = {
  left: "LEFT",
  right: "RIGHT",
};
export const SwitchControl: FC = () => {
  const [position, setPosition] = useState(POSITION.left);
  const handleChangeBackground = () => {
    setPosition((position) =>
      position === POSITION.left ? POSITION.right : POSITION.left
    );
  };
  return (
    <div
      style={{
        height: "500px",
        width: "600px",
        background: position === POSITION.left ? "#15202B" : "#5555",
        margin: "auto",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          borderRadius: "32px",
          width: "100px",
          height: "40px",
          background: "#5555",
          top: "50%",
          position: "absolute",
          left: "42%",
          cursor: "pointer",
          border: "1px solid #ffff",
        }}
        onClick={handleChangeBackground}
      >
        <div
          style={{
            borderRadius: "32px",
            height: "40px",
            width: "40px",
            background: position === POSITION.left ? "#5555" : "green",
            left: position === POSITION.left ? "0%" : "60%",
            position: "absolute",
            transition: "left 0.3s ease",
            cursor: "pointer",
            fontSize: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            color: "#ffff",
            justifyContent: "center",
            border: "1px solid #ffff",
            fontWeight: "bold",
          }}
          onClick={handleChangeBackground}
        >
          {position}
        </div>
      </div>
    </div>
  );
};
