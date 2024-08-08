import React, { FC } from "react";

interface ProgressBarFillProps {
  style: React.CSSProperties;
}
export const ProgressBarFill: FC<ProgressBarFillProps> = ({ style }) => {
  return <div className="progress-bar-fill" style={style}></div>;
};
