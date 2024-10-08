export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return +(price - (price * discount) / 100).toFixed(2);
};
