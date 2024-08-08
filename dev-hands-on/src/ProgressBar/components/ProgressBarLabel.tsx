import React, { FC, ReactNode } from "react";

interface ProgressBarLabelProps {
  children: ReactNode;
}

export const ProgressBarLabel: FC<ProgressBarLabelProps> = ({ children }) => {
  return <div className="progress-bar-label">{children}</div>;
};
