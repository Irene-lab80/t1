import style from "./Button.module.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "icon" | "default";
}

const buttonType = {
  default: style.default,
  icon: style.icon,
};

export const Button = ({ children, variant = "default" }: IProps) => {
  return <button className={`${style.button} ${buttonType[variant]}`}>{children}</button>;
};
