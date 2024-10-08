import { BigMinusIcon, BigPlusIcon } from "@/shared/icons";
import { pluralize } from "@/utils";
import { Button } from "@/components/Button";

import style from "./Counter.module.css";

interface IProps {
  count: number;
  onRemove: () => void;
  onAdd: () => void;
}

export const Counter = ({ count, onAdd, onRemove }: IProps) => (
  <div className={style.wrapper}>
    <Button aria-label="minus" variant="icon" onClick={onRemove}>
      <BigMinusIcon />
    </Button>
    <div className={style.text}>{pluralize(count, "item")}</div>
    <Button aria-label="plus" variant="icon" onClick={onAdd}>
      <BigPlusIcon />
    </Button>
  </div>
);
