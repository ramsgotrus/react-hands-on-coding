import React, { FC, useEffect, useState } from "react";
import "./styles.css";

interface ProgressBarProps {
  bgColor: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ bgColor }) => {
  const [completed, setCompleted] = useState<number>(0);
  const [interval, setInterval] = useState(200);
  let timer = null;

  useEffect(() => {
    timer = setTimeout(() => {
      if (completed === 100) {
        setInterval(null);
      } else {
        setCompleted((completed) => completed + 1);
      }
      return () => {
        setInterval(null);
        timer = null;
      };
    }, interval);
  }, [completed]);

  return (
    <div className="progressBar-container">
      <div
        style={{
          maxWidth: `${completed}%`,
          backgroundColor: "orange",
          textAlign: "center",
          borderRadius: "32px",
          height: "40px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          color: "#FFFF",
          fontWeight: "bold",
        }}
      >
        <span>{completed} %</span>
      </div>
    </div>
  );
};
