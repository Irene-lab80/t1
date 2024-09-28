import { MinusIcon, PlusIcon } from "@/shared/icons";
import { pluralize } from "@/utils/helpers";
import { Button } from "../../Button";

import style from "./Counter.module.css";

interface IProps {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  isLoading: boolean;
}

export const Counter = ({ count, onAdd, onRemove, isLoading }: IProps) => (
  <div className={style.wrapper}>
    <Button
      disabled={isLoading}
      aria-label="minus"
      variant="icon"
      onClick={onRemove}
    >
      <MinusIcon />
    </Button>
    <div className={style.text}>{pluralize(count, "item")}</div>
    <Button
      disabled={isLoading}
      aria-label="plus"
      variant="icon"
      onClick={onAdd}
    >
      <PlusIcon />
    </Button>
  </div>
);
