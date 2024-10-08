import { Button, Input, Loader, Title } from "@/components";
import { Helmet } from "react-helmet-async";

import style from "./Login.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useLazyGetUserQuery,
  useLazyLoginUserQuery,
} from "@/app/store/login/login";
import { useAppDispatch } from "@/app/store/store";
import { userActions } from "@/app/store/user/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserData, initialData } from "./helpers";

export const Login = (): JSX.Element => {
  const [data, setData] = useState<IUserData>(initialData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLazyLoginUserQuery();
  const [getUser] = useLazyGetUserQuery();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await loginUser({
      username: data.login,
      password: data.password,
      expiresInMins: 10,
    }).unwrap();

    if (response.accessToken) {
      localStorage.setItem("access_token", response.accessToken);
      const userData = await getUser().unwrap();

      if (userData) {
        dispatch(
          userActions.setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            access_token: response.accessToken,
            id: response.id,
          })
        );
        toast.success("Successful!");
        navigate("../", { replace: true });
      }
    }
  };

  return (
    <main className={style.main}>
      {isLoading && <Loader />}
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <section className={style.content}>
        <Title bold>Sign in</Title>
        <form action="" className={style.form} onSubmit={handleSubmit}>
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
            type="password"
          />
          <div className={style.buttonWrapper}>
            <Button>Sign in</Button>
          </div>
        </form>
      </section>
    </main>
  );
};
