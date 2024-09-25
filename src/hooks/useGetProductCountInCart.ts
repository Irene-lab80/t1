import { useAppSelector } from "@/app/store/store";

export const useGetProductCountInCart = () => {
  const { data } = useAppSelector((state) => state.cartReducer);
  const cart = data?.carts ? data?.carts[0] : null;

  const getInitialProductCount = (product_id: number) =>
    cart?.products.find((el) => el.id === product_id)?.quantity || 0;

  return getInitialProductCount;
};
