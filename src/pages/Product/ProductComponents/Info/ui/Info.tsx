import { Title } from "@/components";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";
import { ITag } from "@/utils/types";
import { Price } from "../../Price";

import style from "./Info.module.css";

interface IProps {
  name: string;
  rating: number;
  tags: ITag[];
  available_count: number;
  description: string;
  warranty_duration: string;
  ships_in: string;
  old_price: number;
  discount: number;
  price: number;
  inCartCount: number;
}

export const Info = ({
  name,
  rating,
  tags,
  available_count,
  description,
  warranty_duration,
  ships_in,
  old_price,
  discount,
  price,
  inCartCount,
}: IProps) => {
  return (
    <div className={style.info}>
      <Title>{name}</Title>
      <div className={style.infoContent}>
        <div className={style.ratingWrapper}>
          <Rating ratingCount={rating} />
          <Tags tags={tags} />
        </div>

        <div className={style.availibleWrapper}>
          {available_count > 0
            ? `In Stock - Only ${available_count} left!`
            : "Sold out"}
        </div>

        <p className={style.description}>{description}</p>
        <div className={style.warranty}>
          <span>{warranty_duration}</span>
          <span>{ships_in}</span>
        </div>

        <Price
          inCartCount={inCartCount}
          oldPrice={old_price}
          discount={discount}
          newPrice={price}
        />
      </div>
    </div>
  );
};
