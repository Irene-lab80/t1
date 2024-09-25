import { Link } from "react-router-dom";
import { Button, Counter } from "@/components";
import { CartIcon } from "@/shared/icons";
import { ROUTES } from "@/app/router/routes";

import { Product } from "@/app/store/cart/types";
import { calculateDiscountedPrice } from "@/utils/helpers";

import style from "./CartProductCard.module.css";

interface IProps {
  product: Product;
}

export const CartProductCard = ({ product }: IProps) => {
  const isDeleted = false;
  return (
    <div className={`${style.wrapper} ${isDeleted ? style.deleted : ""}`}>
      <div className={style.left}>
        <img
          className={style.image}
          src={product.thumbnail}
          alt={product.title}
        />
        <div className={style.titleWrapper}>
          <Link to={`${ROUTES.PRODUCT}/${product.id}`} className={style.title}>
            {product.title}
          </Link>
          <span className={style.price}>
            $
            {calculateDiscountedPrice(
              product.price,
              product.discountPercentage
            )}
          </span>
        </div>
      </div>
      {isDeleted ? (
        <Button aria-label="add to cart" variant="icon">
          <CartIcon />
        </Button>
      ) : (
        <div className={style.right}>
          <Counter count={product.quantity} setCount={() => null} />
          <button className={style.deleteButton}>Delete</button>
        </div>
      )}
    </div>
  );
};
