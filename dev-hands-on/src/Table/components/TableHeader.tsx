import React, { FC } from "react";

interface TableHeaderProps {
  header: string;
  click: (header: string) => void;
}

export const TableHeader: FC<TableHeaderProps> = ({ header, click }) => {
  return <th onClick={() => click(header)}>{header}</th>;
};
