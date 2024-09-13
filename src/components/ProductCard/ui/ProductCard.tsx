import { CartIcon } from "../../../shared/icons";
import { IProduct } from "../../../utils/types";
import { Button } from "../../Button";

import style from "./ProductCard.module.css";

export const ProductCard = ({ image, name, price }: Omit<IProduct, "id">) => (
  <div className={style.wrapper}>
    <img className={style.image} src={image} alt={name} />
    <div className={style.footer}>
      <div>
        <h2 className={style.title}>{name}</h2>
        <div className={style.price}>${price}</div>
      </div>
      <Button variant="icon">
        <CartIcon />
      </Button>
    </div>
  </div>
);
