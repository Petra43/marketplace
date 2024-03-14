/** Anna Created this type for listing results so that the information can be pulled into other pages nicely */

export type ListingResult = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    thumbnailURL: string;
  };