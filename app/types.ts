type ListingComment = {
  owner: string;
  text: string;
}

type ParentComment = {
  comment: ListingComment;
  children: ListingComment[];
}

type ImageInfo = {
  url: string;
  order: number;
  altText: string;
}