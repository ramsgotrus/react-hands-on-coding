import React, {
  FC,
  ReactEventHandler,
  ReactHTMLElement,
  useState,
} from "react";
import { TableHeader } from "./components/TableHeader";
import { TableRow } from "./components/TableRow";
import "./styles.css";

interface TableProps {
  initialData: any[];
  headers: string[];
  footer?: { totalAmount: number; totalTransaction: number };
}
type SortOrder = "asc" | "desc";

export const Table: FC<TableProps> = ({ initialData, headers, footer }) => {
  const [selectedID, setSelectedID] = useState<number>(null);
  const [data, setData] = useState<any[]>(initialData);
  const [sort, setSort] = useState<SortOrder>("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchData = (searchQuery: string): any[] => {
    return [...initialData].filter((rowItem) => {
      const row = Object.values(rowItem);
      return row.some((item) => {
        if (typeof item === "string") {
          return item.toLowerCase().includes(searchQuery.toLocaleLowerCase());
        } else if (typeof item === "number") {
          return item.toString() === searchQuery;
        }
      });
    });
  };

  ///Sorting
  const sortedData = (key: string, newOrder: SortOrder): any[] => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return newOrder === "asc" ? -1 : 1;
      if (a[key] > b[key]) return newOrder === "asc" ? 1 : -1;
      return 0;
    });
  };
  const handleHeaderClick = (key: string) => {
    const newOrder: SortOrder = sort === "asc" ? "desc" : "asc";
    setSort(newOrder);
    setData(sortedData(key, newOrder));
  };
  const handleRowClick = (index: number) => {
    setSelectedID(index);
  };

  /// search
  const handleSarch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value.toLocaleLowerCase();
    setSearchQuery(query);
    const list = searchData(query);
    console.log(list);
    setData(searchData(query));
  };

  return (
    <div className="tableWrapper">
      <input
        type="search"
        placeholder="Search any key......."
        className="searchInput"
        value={searchQuery}
        onChange={handleSarch}
      />
      <table>
        <thead>
          {headers.map((header) => (
            <TableHeader header={header} click={handleHeaderClick} />
          ))}
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow
              row={row}
              selected={selectedID === row.id}
              click={() => handleRowClick(row.id)}
            />
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              <td></td>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>{footer.totalAmount}</strong>
              </td>
              <td>
                <strong>{footer.totalTransaction}</strong>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
