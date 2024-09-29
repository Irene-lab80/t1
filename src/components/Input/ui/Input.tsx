import style from "./Input.module.css";

type IProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: IProps) => {
  return <input data-testid="input" className={style.input} {...props} />;
};
