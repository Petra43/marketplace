type ListingComment = {
  owner: string;
  text: string;
}

type ParentComment = {
  comment: ListingComment
  children: ListingComment[]
}