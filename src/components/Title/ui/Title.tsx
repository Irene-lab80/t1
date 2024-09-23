import React from "react";

import style from "./Title.module.css";

export const Title = ({
  children,
  bold,
}: {
  children: React.ReactNode;
  bold?: boolean;
}) => {
  return <h2 className={bold ? style.titleBold : style.title}>{children}</h2>;
};
