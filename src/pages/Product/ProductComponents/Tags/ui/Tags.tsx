import { Link } from "react-router-dom";

import style from "./Tags.module.css";
import { ITag } from "@/utils/types";

interface IProps {
  tags: ITag[];
}

export const Tags = ({ tags }: IProps) => {
  return (
    <div>
      {tags.map((el, i) => (
        <span className={style.tagWrapper} key={el.id}>
          {i > 0 && ", "}
          <Link className={style.tag} to={el.name}>
            {el.name}
          </Link>
        </span>
      ))}
    </div>
  );
};
