import React, { FC, ReactNode } from "react";

interface HOCProps {
  title: string;
  children: ReactNode;
}

export const HOC: FC<HOCProps> = ({ title, children }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: "50px" }}>{title}</span>
      <div
        style={{
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
