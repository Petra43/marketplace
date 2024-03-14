// listing details page types

type ListingDetails = {
  name: string;
  id: string;
  ownerId:string;
  description: string;
  price: number;
}

type ListingComment = {
  id: string
  owner: string;
  text: string;
}

type ParentComment = {
  comment: ListingComment;
  children: ListingComment[];
}