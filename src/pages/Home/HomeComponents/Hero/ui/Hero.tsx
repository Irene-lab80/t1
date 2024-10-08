
import { Button } from "@/components";
import style from "./Hero.module.css";

export const Hero = () => (
  <section className={style.wrapper}>
    <div className={style.inner}>
      <h2 className={style.title}>
        Any products from famous brands with worldwide delivery
      </h2>
      <p className={style.text}>
        We sell smartphones, laptops, clothes, shoes and many other products at
        low prices
      </p>
      <div className={style.heroButton}>
        <Button link="#catalog" type="button">
          Go to shopping
        </Button>
      </div>
    </div>
  </section>
);
