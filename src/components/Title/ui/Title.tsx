import React from "react";

import style from "./Title.module.css";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={style.title}>{children}</h2>;
};
