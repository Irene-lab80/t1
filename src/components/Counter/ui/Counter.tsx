import { MinusIcon, PlusIcon } from "../../../shared/icons";
import { pluralize } from "../../../utils/helpers";
import { Button } from "../../Button";

import style from "./Counter.module.css";

interface IProps {
  count: number;
  setCount: (count: number) => void;
}

export const Counter = ({ count, setCount }: IProps) => (
  <div className={style.wrapper}>
    <Button variant="icon" onClick={() => setCount(count - 1)}>
      <MinusIcon />
    </Button>
    <div className={style.text}>{pluralize(count, "item")}</div>
    <Button variant="icon" onClick={() => setCount(count + 1)}>
      <PlusIcon />
    </Button>
  </div>
);
