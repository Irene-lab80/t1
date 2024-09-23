import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { CartIcon } from "@/shared/icons";
import { IProduct } from "@/utils/types";
import { Button } from "../../Button";
import { Counter } from "../../Counter";

import style from "./ProductCard.module.css";
interface IProps extends IProduct {
  initialCount: number;
}

export const ProductCard = ({
  image,
  name,
  price,
  id,
  initialCount,
}: IProps) => {
  const [count, setCount] = useState(initialCount);

  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!buttonWrapperRef.current?.contains(e.target as HTMLElement)) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={style.wrapper}
      onClick={handleClick}
    >
      <div className={style.imageWrapper}>
        <img className={style.image} src={image} alt={name} />
        <div className={style.imageOverlay}>
          <span className={style.overlayText}>Show details</span>
        </div>
      </div>
      <div className={`${style.footer} ${count >= 1 ? style.footerShort : ""}`}>
        <div>
          <h2
            className={`${style.title} ${count >= 1 ? style.titleShort : ""}`}
          >
            {name}
          </h2>
          <div className={style.price}>${price}</div>
        </div>
        {count >= 1 ? (
          <div className={style.counterWrapper} ref={buttonWrapperRef}>
            <Counter count={count} setCount={setCount} />
          </div>
        ) : (
          <div ref={buttonWrapperRef}>
            <Button
              aria-label="add to cart"
              onClick={() => setCount(count + 1)}
              variant="icon"
            >
              <CartIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
