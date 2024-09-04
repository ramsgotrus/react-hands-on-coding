import React, { FC, useState } from "react";

export const Modal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div style={{ position: "fixed", display: "inline-block" }}>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Open Modal</button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#5555",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "300px",
              background: "#ffff",
              position: "relative",
              padding: "20px",
              alignItems: "center",
              color: "#ffff",
              justifyItems: "center",
              display: "flex",
              top: "30%",
              left: "30%",
            }}
          >
            <button
              style={{ position: "absolute", top: "10%", right: "10%" }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
