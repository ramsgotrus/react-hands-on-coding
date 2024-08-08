import React, { ReactNode, FC } from "react";
interface ProgressBarContainerProps {
  children: ReactNode;
  style: React.CSSProperties;
}

export const ProgressBarContainer: FC<ProgressBarContainerProps> = ({
  children,
  style,
}) => {
  return <div className="progress-bar-container">{children}</div>;
};
