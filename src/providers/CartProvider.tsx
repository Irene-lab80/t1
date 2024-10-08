import { getCart } from "@/app/store/cart/cart";
import { useAppDispatch } from "@/app/store/store";
import { ReactNode, useEffect } from "react";

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const cart_id = 6;

  useEffect(() => {
    dispatch(getCart(cart_id));
  }, [dispatch]);

  return <>{children}</>;
};
