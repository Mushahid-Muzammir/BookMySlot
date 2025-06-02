
export type Sport = {
  sportId: number;
  name: string;
  imageUrl: string;
};

export type Product = {
  productId: number;
  name: string;
  description: string;
  selling_price: number;
  imageUrl: string;
  sportId: number;
};

export type BestSeller = {
  productId: number;
  name: string;
  description: string;
  selling_price: number;
  imageUrl: string;
};

export type Review = {
  reviewId: number;
  content: string;
  name: string;
  imageUrl: string;
};

export type CartItem = {
  productId: number;
  name: string;
  description: string;
  selling_price: number;
  imageUrl: string;
  quantity: number;
};

export type Cart = {
  cartId: number;
  userId: number;
  items: CartItem[];
};