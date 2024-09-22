import style from "./Error.module.css";

export const Error = (): JSX.Element => {
  return (
    <div className={style.main} id="main">
      <div className={style.fof}>
        <h1>Error 404</h1>
      </div>
      {/* <button>Go home</button> */}
    </div>
  );
};
