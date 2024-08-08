import React, { FC } from "react";
import "./components/styles.css";
import { ProgressBarContainer } from "./components/ProgressBarContainer";
import { ProgressBarFill } from "./components/ProgressBarFill";
import { ProgressBarLabel } from "./components/ProgressBarLabel";

interface ProgressBarProps {
  color: string;
  width: number;
  height: number;
  label: string;
  determinate: boolean;
  progress: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  color,
  width,
  height,
  label,
  determinate,
  progress,
}) => {
  const [fillWidth, setFillWidth] = React.useState(0);

  React.useEffect(() => {
    if (determinate) {
      setFillWidth((progress / 100) * width);
    }
  }, [progress, determinate, width]);

  return (
    <ProgressBarContainer
      style={{
        width,
        height,
        backgroundColor: color,
      }}
    >
      <ProgressBarFill
        style={{
          width: fillWidth,
          backgroundColor: color,
        }}
      />
      <ProgressBarLabel>
        {label} {determinate ? `${progress}%` : ""}
      </ProgressBarLabel>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
