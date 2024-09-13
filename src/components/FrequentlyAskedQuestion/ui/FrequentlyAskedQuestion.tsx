import { useState } from "react";
import { CrossIcon } from "../../../shared/icons";

import style from "./FrequentlyAskedQuestion.module.css";

export const FrequentlyAskedQuestion = ({
  question,
  answer,
  isOpen = false,
}: {
  question: string;
  answer: string;
  isOpen?: boolean;
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className={`${style.faq} ${open ? style.open : ""} `}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className={style.question}>
        {question}
        <CrossIcon className={`${style.icon} ${open ? style.iconOpen : ""}`} />
      </div>
      <div className={style.answer}>{answer}</div>
    </div>
  );
};
