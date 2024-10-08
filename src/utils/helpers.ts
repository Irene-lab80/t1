import { Cart } from "@/app/store/cart/types";

export const getNewProducts = (cart: Cart, id: number, q: number) => {
  const res = cart?.products.map((product) => {
    if (product.id === id) {
      return {
        id,
        quantity: q,
      };
    } else {
      return {
        id: product.id,
        quantity: product.quantity,
      };
    }
  });

  if (!cart?.products.find((product) => product.id === id)) {
    res.push({
      id,
      quantity: q,
    });
  }

  return res;
};
