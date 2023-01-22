import { useState } from "react";

import "./starrating.scss";

import { FaStar } from "react-icons/fa";

const StarRating = ({ item }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              size={10}
              color={ratingValue <= (hover || rating) ? "yellow" : ""}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
