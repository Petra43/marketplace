export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnailURL: string;
  };
  
  export type ListingResult = {
    data: Product[];
  };