import { useAppSelector } from "@/app/store/store";

export const useGetProductCountInCart = () => {
  const { cart } = useAppSelector((state) => state.cartReducer);

  const getInitialProductCount = (product_id: number) =>
    cart?.products.find((el) => el.id === product_id)?.quantity || 0;

  return getInitialProductCount;
};
