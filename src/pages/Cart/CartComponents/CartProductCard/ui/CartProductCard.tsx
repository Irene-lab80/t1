import { Link } from "react-router-dom";
import { Button, Counter } from "@/components";
import { CartIcon } from "@/shared/icons";
import { ROUTES } from "@/app/router/routes";
import { Product } from "@/app/store/cart/types";
import { calculateDiscountedPrice } from "@/utils";

import style from "./CartProductCard.module.css";

interface IProps {
  product: Product;
  handleUpdateCart: (id: number, q: number) => void;
  isLoading: boolean;
  currrentId: number | null;
}

export const CartProductCard = ({
  product,
  handleUpdateCart,
  isLoading,
  currrentId,
}: IProps) => {
  const isDeleted = product.quantity === 0;
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
        <Button
          onClick={() => handleUpdateCart(product.id, 1)}
          aria-label="add to cart"
          variant="icon"
        >
          <CartIcon />
        </Button>
      ) : (
        <div className={style.right}>
          <Counter
            count={product.quantity}
            onRemove={() => handleUpdateCart(product.id, product.quantity - 1)}
            onAdd={() => handleUpdateCart(product.id, product.quantity + 1)}
            isLoading={isLoading && currrentId === product.id}
          />
          <button
            className={style.deleteButton}
            onClick={() => handleUpdateCart(product.id, 0)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
