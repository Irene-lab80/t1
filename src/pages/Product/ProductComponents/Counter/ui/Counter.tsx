import { BigMinusIcon, BigPlusIcon } from "@/shared/icons";
import { pluralize } from "@/utils/helpers";
import { Button } from "@/components/Button";

import style from "./Counter.module.css";

interface IProps {
  count: number;
  setCount: (count: number) => void;
}

export const Counter = ({ count, setCount }: IProps) => (
  <div className={style.wrapper}>
    <Button
      aria-label="minus"
      variant="icon"
      onClick={() => setCount(count - 1)}
    >
      <BigMinusIcon />
    </Button>
    <div className={style.text}>{pluralize(count, "item")}</div>
    <Button
      aria-label="plus"
      variant="icon"
      onClick={() => setCount(count + 1)}
    >
      <BigPlusIcon />
    </Button>
  </div>
);
