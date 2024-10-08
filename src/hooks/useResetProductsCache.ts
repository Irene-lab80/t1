import { tags } from "@/app/store/mainApi";
import { productsApi } from "@/app/store/products/products";
import { useAppDispatch } from "@/app/store/store";

export const useResetProductsCache = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(productsApi.util.invalidateTags([tags.products]));
};
