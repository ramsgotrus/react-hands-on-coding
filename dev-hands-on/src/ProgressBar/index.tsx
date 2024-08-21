import React, { FC, useEffect, useState } from "react";
import { ProgressBarContainer } from "./components/ProgressBarContainer";

export const ProgressBar: FC = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 0));
  };
  useEffect(() => {
    setTimeout(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    });
  }, [progress]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h1>React Progress bar</h1>
      <ProgressBarContainer value={progress} max={100} label="Loading..." />
      <button
        style={{ height: "40px", width: "100px", borderRadius: "8px" }}
        onClick={handleClick}
      >
        Increase Progress
      </button>
    </div>
  );
};
