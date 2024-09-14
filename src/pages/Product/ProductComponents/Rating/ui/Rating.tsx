import { useState } from "react";
import { StarIcon } from "../../../../../shared/icons";

import style from "./Rating.module.css";

export const Rating = ({ ratingCount }: { ratingCount: number }) => {
  const [rating, setRating] = useState(ratingCount);
  const [hover, setHover] = useState(0);

  return (
    <div className={style.wrapper}>
      {[...Array(5)].map((_, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={style.button}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={style.star}>
              <StarIcon checked={index <= (hover || rating)} />
            </span>
          </button>
        );
      })}
    </div>
  );
};
