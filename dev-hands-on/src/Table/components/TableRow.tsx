import React, { FC } from "react";
import "../styles.css";

interface TableRowProps {
  row: any;
  selected: boolean;
  click: () => void;
}

export const TableRow: FC<TableRowProps> = ({ row, selected, click }) => {
  return (
    <tr onClick={click}>
      {Object.entries(row).map(([key, value]) => (
        <td className={selected ? "selectedHeader" : ""} key={key}>
          {value as React.ReactNode}
        </td>
      ))}
    </tr>
  );
};
