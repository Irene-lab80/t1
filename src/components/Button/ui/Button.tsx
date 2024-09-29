import style from "./Button.module.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "icon" | "default";
  link?: string;
}

const buttonType = {
  default: style.default,
  icon: style.icon,
  link: style.link,
};

export const Button = ({
  children,
  variant = "default",
  link,
  ...props
}: IProps) => {
  return (
    <>
      {link ? (
        <a
          data-testid="button"
          href={link}
          className={`${style.button} ${buttonType["link"]}`}
        >
          {children}
        </a>
      ) : (
        <button
          data-testid="button"
          className={`${style.button} ${buttonType[variant]}`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
