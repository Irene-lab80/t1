import { Link } from "react-router-dom";
import { Button } from "../../../../../components";
import { Counter } from "../../../../../components/Counter";
import { CartIcon } from "../../../../../shared/icons";
import { ICartProduct } from "../../../../../utils/types";

import style from "./CartProductCard.module.css";
import { ROUTES } from "../../../../../utils";

interface IProps {
  product: ICartProduct;
}

export const CartProductCard = ({ product }: IProps) => {
  return (
    <div className={`${style.wrapper} ${product.deleted ? style.deleted : ""}`}>
      <div className={style.left}>
        <img className={style.image} src={product.image} alt={product.name} />
        <div className={style.titleWrapper}>
          <Link to={`${ROUTES.PRODUCT}/${product.id}`} className={style.title}>
            {product.name}
          </Link>
          <span className={style.price}>${product.price}</span>
        </div>
      </div>
      {product.deleted ? (
        <Button variant="icon">
          <CartIcon />
        </Button>
      ) : (
        <div className={style.right}>
          <Counter count={product.count} setCount={() => null} />
          <button className={style.deleteButton}>Delete</button>
        </div>
      )}
    </div>
  );
};
