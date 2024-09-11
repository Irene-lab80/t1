import style from "./Footer.module.css";

export const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <div>Goods4you</div>
        <nav>
          <ul className={style.navList}> 
            <li className={style.navItem}>Catalog</li>
            <li className={style.navItem}>FAQ</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
