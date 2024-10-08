import image from "./image.png";

export const mock_cart_data = {
  total_count: 3,
  total_price: 590,
  no_discount_price: 700,
  products: [
    {
      id: 1,
      name: "Essence Mascara Lash Princess",
      price: 110,
      count: 1,
      deleted: false,
      image,
    },
    {
      id: 2,
      name: "Essence Mascara Lash Princess",
      price: 110,
      count: 1,
      deleted: false,
      image,
    },
    {
      id: 3,
      name: "Essence Mascara Lash Princess",
      price: 110,
      count: 5,
      deleted: false,
      image,
    },
    {
      id: 4,
      name: "Essence Mascara Lash Princess",
      price: 110,
      count: 0,
      deleted: true,
      image,
    },
  ],
};
