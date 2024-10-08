import style from "./SearchInput.module.css";

type IProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = (props: IProps) => {
  return <input className={style.input} {...props} />;
};
