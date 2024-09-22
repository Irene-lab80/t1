import style from "./NoItems.module.css";

export const NoItems = ({children}: {children: React.ReactNode}) => {
  return <div className={style.notFound}>{children}</div>
};
