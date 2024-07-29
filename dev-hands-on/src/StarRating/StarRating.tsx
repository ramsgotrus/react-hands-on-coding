// import React from "react";
// import Rating from "./Rating";

// const StarRating: React.FC = () => {
//   const handleRatingChange = () => {};
//   return <Rating totalRating={5} onRatingChange={() => handleRatingChange} />;
// };

// export default StarRating;

import React from "react";
import Rating from "./Rating";
const StarRating = () => {
  return (
    <div>
      <Rating totalRating={5} />
    </div>
  );
};

export default StarRating;
