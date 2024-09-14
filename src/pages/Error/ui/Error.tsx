import style from "./Error.module.css";

export const Error = (): JSX.Element => {
  return (
    <main className={style.main}>
      <section className={style.content}>Error has occured!</section>
    </main>
  );
};
