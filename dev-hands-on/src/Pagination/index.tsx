import React, { FC, ReactNode, useState } from "react";
import "./styles.css";

interface PaginationProps {
  totalPages: number;
  children: ReactNode[];
}

export const Pagination: FC<PaginationProps> = ({ totalPages, children }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handleOnPageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <>
      <div className="page-content">{children[currentPage]}</div>
      <div className="pagination">
        <button
          onClick={() => handleOnPageChange(currentPage - 1)}
          className={currentPage >= 1 ? "button" : "disabled"}
        >
          Previous
        </button>

        {[...Array(children.length)].map((_, index) => (
          <button
            onClick={() => handleOnPageChange(index)}
            key={index}
            className={index === currentPage ? "active" : ""}
          >
            {index}
          </button>
        ))}

        <button
          onClick={() => handleOnPageChange(currentPage + 1)}
          className={currentPage < totalPages ? "button" : "disabled"}
        >
          Next
        </button>
      </div>
    </>
  );
};
