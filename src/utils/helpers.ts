import { Cart } from "@/app/store/cart/types";

export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return +(price - (price * discount) / 100).toFixed(2);
};

export const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const login_duration = 60000;

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
