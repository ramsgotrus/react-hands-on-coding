import React, { FC, useState } from "react";

interface StarRatingProps {
  totalRating: number;
}

export const StarRating: FC<StarRatingProps> = ({ totalRating }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleSelectIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div
      style={{
        border: "1px solid #5555",
        width: "12%",
        borderRadius: 8,
        height: 70,
        padding: "1rem",
      }}
    >
      {[...Array(totalRating)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleSelectIndex(index)}
          style={{
            color: index > currentIndex ? "gray" : "#ffc107",
            cursor: "pointer",
            fontSize: "80px",
          }}
        >
          *
        </span>
      ))}
    </div>
  );
};
