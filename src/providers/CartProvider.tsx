import { getCart } from "@/app/store/cart/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { ReactNode, useEffect } from "react";

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id: user_id } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (user_id) {
      dispatch(getCart(user_id));
    }
  }, [dispatch, user_id]);

  return <>{children}</>;
};
