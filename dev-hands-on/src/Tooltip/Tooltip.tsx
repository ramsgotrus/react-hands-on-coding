import React, { ReactNode, useState, CSSProperties } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  const tooltipStyle: CSSProperties = {
    visibility: visible ? "visible" : "hidden",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    padding: "5px",
    position: "absolute",
    zIndex: 1000,
    whiteSpace: "nowrap",
    bottom: "125%", // Adjust based on your positioning
    left: "50%",
    transform: "translateX(-10%)",
    marginLeft: "-60px",
    textAlign: "center",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.3s",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
      <div style={tooltipStyle}>{tooltipText}</div>
    </div>
  );
};
