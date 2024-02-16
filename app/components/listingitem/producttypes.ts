export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    thumbnailURL: string;
  };
  
  export type ListingResult = {
    data: Product[];
  };