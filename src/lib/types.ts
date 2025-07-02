export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: 'Tops' | 'Bottoms' | 'Dresses' | 'Jackets' | 'Accessories';
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  colors: { name: string; hex: string }[];
  description: string;
  details: string[];
  care: string[];
  reviews?: { rating: number; text: string; author: string }[];
};

export type CartItem = {
  product: Product;
  size: string;
  color: { name: string; hex: string };
  quantity: number;
};

export type WishlistItem = {
  product: Product;
};

export type FilterState = {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  search: string;
};
