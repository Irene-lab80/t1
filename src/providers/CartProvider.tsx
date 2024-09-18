import { getCart } from "@/app/store/cart/cart";
import { useAppDispatch } from "@/app/store/store";
import { ReactNode, useEffect } from "react";

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  console.log("first");
  useEffect(() => {
    dispatch(getCart(6));
  }, [dispatch]);

  return <>{children}</>;
};
