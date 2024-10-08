import image from "./product_image.png";

export const mock_product_data = {
  id: 1,
  name: "Essence Mascara Lash Princess",
  price: 7.17,
  image: image,
  rating: 4,
  thumbnails: [
    { image: image, id: 1, name: "Essence Mascara" },
    { image: image, id: 2, name: "Essence Mascara" },
    { image: image, id: 3, name: "Essence Mascara" },
    { image: image, id: 4, name: "Essence Mascara" },
    { image: image, id: 5, name: "Essence Mascara" },
    { image: image, id: 6, name: "Essence Mascara" },
  ],
  discount: 14.5,
  old_price: 9.99,
  available_count: 5,
  tags: [
    { id: 1, name: "electronics" },
    { id: 2, name: "selfie accessories" },
  ],
  warranty_duration: 1,
  ships_in: 1,
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
};
