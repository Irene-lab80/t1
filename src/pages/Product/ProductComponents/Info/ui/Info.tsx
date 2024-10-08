import { Title } from "@/components";
import style from "./Info.module.css";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";
import { ITag } from "@/utils/types";
import { pluralize } from "@/utils/helpers";
import { Price } from "../../Price";

interface IProps {
  name: string;
  rating: number;
  tags: ITag[];
  available_count: number;
  description: string;
  warranty_duration: number;
  ships_in: number;
  old_price: number;
  discount: number;
  price: number;
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
          <span>{pluralize(warranty_duration, "month")} warranty</span>
          <span>Ships in {pluralize(ships_in, "month")}</span>
        </div>

        <Price oldPrice={old_price} discount={discount} newPrice={price} />
      </div>
    </div>
  );
};
