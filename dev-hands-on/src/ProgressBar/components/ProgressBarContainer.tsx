import React, { FC } from "react";
import "../styles.css";
interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export const ProgressBarContainer: FC<ProgressBarProps> = ({
  value,
  max,
  label,
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar-container">
      {label && <div className="progress-bar-label">{label}</div>}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
