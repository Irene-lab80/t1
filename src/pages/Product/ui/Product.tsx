import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { mock_product_data } from "./data";
import { pluralize } from "../../../utils/helpers";
import { Price, Rating } from "../ProductComponents";
import { Title } from "../../../components";

import style from "./Product.module.css";

export const Product = (): JSX.Element => {
  const {
    available_count,
    tags,
    description,
    discount,
    image,
    name,
    old_price,
    price,
    ships_in,
    warranty_duration,
    rating,
    thumbnails,
  } = mock_product_data;

  return (
    <main className={style.main}>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
        <meta
          name="description"
          content="The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula."
        />
      </Helmet>
      <section className={style.content}>
        <div className={style.gallery}>
          <img className={style.image} src={image} alt={name} />
          <div className={style.thumbnails}>
            {thumbnails.map((el) => (
              <img
                key={el.id}
                className={style.imageThumbnail}
                src={el.image}
                alt={el.name}
              />
            ))}
          </div>
        </div>

        <div className={style.info}>
          <Title>{name}</Title>
          <div className={style.infoContent}>
            <div className={style.ratingWrapper}>
              <Rating ratingCount={rating} />

              <div>
                {tags.map((el, i) => (
                  <span className={style.tagWrapper} key={el.id}>
                    {i > 0 && ", "}
                    <Link className={style.tag} to={el.name}>
                      {el.name}
                    </Link>
                  </span>
                ))}
              </div>
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
      </section>
    </main>
  );
};
