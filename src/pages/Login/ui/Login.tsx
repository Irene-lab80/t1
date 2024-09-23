import { Button, Input, Title } from "@/components";
import { Helmet } from "react-helmet-async";

import style from "./Login.module.css";
import { ChangeEvent, useState } from "react";

interface IUserData {
  login: string;
  password: string;
}

const initialData = {
  login: "",
  password: "",
};

export const Login = (): JSX.Element => {
  const [data, setData] = useState<IUserData>(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className={style.main}>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <section className={style.content}>
        <Title bold>Sign in</Title>
        <form action="" className={style.form}>
          <Input
            onChange={handleChange}
            value={data.login}
            placeholder="Login"
            name="login"
            id="login"
          />
          <Input
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            name="password"
            id="password"
          />
          <div className={style.buttonWrapper}>
            <Button>Sign in</Button>
          </div>
        </form>
      </section>
    </main>
  );
};
