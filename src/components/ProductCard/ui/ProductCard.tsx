import { Link } from "react-router-dom";
import { CartIcon } from "../../../shared/icons";
import { IProduct } from "../../../utils/types";
import { Button } from "../../Button";

import style from "./ProductCard.module.css";

export const ProductCard = ({ image, name, price, id }: IProduct) => (
  <Link to={`/product/${id}`} className={style.wrapper}>
    <div className={style.imageWrapper}>
      <img className={style.image} src={image} alt={name} />
      <div className={style.imageOverlay}>
        <span className={style.overlayText}>Show details</span>
      </div>
    </div>
    <div className={style.footer}>
      <div>
        <h2 className={style.title}>{name}</h2>
        <div className={style.price}>${price}</div>
      </div>
      <Button variant="icon">
        <CartIcon />
      </Button>
    </div>
  </Link>
);
