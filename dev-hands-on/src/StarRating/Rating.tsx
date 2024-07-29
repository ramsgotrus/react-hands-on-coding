// import React, { useState } from "react";

// interface RatingProps {
//   totalRating: number;
//   onRatingChange: () => void;
// }

// const Rating: React.FC<RatingProps> = ({ totalRating, onRatingChange }) => {
//   const [rating, setRating] = useState<number | 0>(0);
//   const ratingChange = (index: number) => {
//     setRating(index);
//   };
//   return (
//     <div>
//       {[...Array(totalRating)].map((_, index) => (
//         <span
//           onClick={() => ratingChange(index)}
//           style={{
//             fontSize: "130px",
//             cursor: "pointer",
//             color: index <= rating ? "#ffc107" : "#e4e5e9",
//           }}
//         >
//           *
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Rating;

import React, { useState } from "react";

interface RatingProps {
  totalRating: number;
}

const Rating: React.FC<RatingProps> = ({ totalRating }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const handleOnClick = (index: number) => {
    setCurrentRating(index);
  };
  return (
    <div>
      {[...Array(totalRating)].map((_, index) => (
        <span
          style={{
            color: index <= currentRating ? "#ffc107" : "gray",
            fontSize: "100px",
            cursor: "pointer",
          }}
          onClick={() => handleOnClick(index)}
        >
          *
        </span>
      ))}
    </div>
  );
};

export default Rating;
