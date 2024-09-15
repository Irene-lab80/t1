export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface ICartProduct extends IProduct {
  count: number;
  deleted: boolean;
}
