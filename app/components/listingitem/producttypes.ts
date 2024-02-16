export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    thumbnailURL: string;
  };
  
  export type ListingResult = {
    data: Product[];
  };