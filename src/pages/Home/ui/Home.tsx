import { Button } from "../../../components/Button";
import { CartIcon } from "../../../shared/icons";
import style from "./Home.module.css";
import { data } from "./data";

export const Home = (): JSX.Element => {
  return (
    <main className={style.main}>
      <div className={style.content}>
        <h2 className={style.title}>Catalog</h2>
        <div className={style.search}>
          <input
            className={style.searchInput}
            type="search"
            name="search"
            id="search"
            placeholder="Search by title"
          />
        </div>

        <div className={style.productsList}>
          {data.map((product) => (
            <div className={style.card}>
              <img
                className={style.image}
                src={product.image}
                alt={product.name}
              />
              <div className={style.cardFooter}>
                <div>
                  <h2 className={style.cardTitle}>{product.name}</h2>
                  <div className={style.price}>${product.price}</div>
                </div>
                <Button variant="icon">
                  <CartIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={style.buttonWrapper}>
          <Button type="button">Show more</Button>
        </div>
      </div>
    </main>
  );
};
