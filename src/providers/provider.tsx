import { Dispatch, createContext, useEffect, useState } from "react";

type TContext = {
  token: string | null;
  setToken: Dispatch<string>;
};

type TContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext(null as unknown as TContext);

const getInitialState = (): string | null => {
  const token = localStorage.getItem("access_token");
  return token ? JSON.parse(token) : null;
};

const AuthProvider = ({ children }: TContextProviderProps) => {
  const [token, setToken] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <CartContext.Provider value={{ token, setToken }}>
      {children}
    </CartContext.Provider>
  );
};

export default AuthProvider;
