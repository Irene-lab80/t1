import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { CartIcon } from "@/shared/icons";
import { IProduct } from "@/utils/types";
import { Button } from "../../Button";
import { Counter } from "../../Counter";

import style from "./ProductCard.module.css";
import { toast } from "react-toastify";
interface IProps extends IProduct {
  initialCount: number;
  handleUpdateCart: (id: number, q: number) => void;
  available_count: number;
}

export const ProductCard = ({
  image,
  name,
  price,
  id,
  initialCount,
  handleUpdateCart,
  available_count,
}: IProps) => {
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
      <div
        className={`${style.footer} ${
          initialCount >= 1 ? style.footerShort : ""
        }`}
      >
        <div>
          <h2
            className={`${style.title} ${
              initialCount >= 1 ? style.titleShort : ""
            }`}
          >
            {name}
          </h2>
          <div className={style.price}>${price}</div>
        </div>
        {initialCount >= 1 ? (
          <div className={style.counterWrapper} ref={buttonWrapperRef}>
            <Counter
              count={initialCount}
              onAdd={() => {
                if (available_count === initialCount) {
                  toast.error("No more product left");
                } else {
                  handleUpdateCart(id, initialCount + 1);
                }
              }}
              onRemove={() => handleUpdateCart(id, initialCount - 1)}
              isLoading={false}
            />
          </div>
        ) : (
          <div ref={buttonWrapperRef}>
            <Button
              aria-label="add to cart"
              onClick={() => handleUpdateCart(id, initialCount + 1)}
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
