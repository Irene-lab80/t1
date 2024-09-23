import style from "./Input.module.css";

type IProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: IProps) => {
  return <input className={style.input} {...props} />;
};
