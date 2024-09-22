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

export interface ITag {
  id: number;
  name: string;
}

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}
