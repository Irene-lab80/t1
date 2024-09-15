import { Helmet } from "react-helmet";
import { mock_product_data } from "./data";
import { Gallery, Info } from "../ProductComponents";

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
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <section className={style.content}>
        <Gallery image={image} name={name} thumbnails={thumbnails} />
        <Info
          available_count={available_count}
          description={description}
          discount={discount}
          name={name}
          old_price={old_price}
          price={price}
          rating={rating}
          ships_in={ships_in}
          tags={tags}
          warranty_duration={warranty_duration}
        />
      </section>
    </main>
  );
};
