// listing details page types

type ListingComment = {
  id: string
  owner: string;
  text: string;
}

type ParentComment = {
  comment: ListingComment;
  children: ListingComment[];
}


// database types
//db -- user types --
type DbUser = {
  id: string;
  name: string;
  password: string;
}

// db -- Listing api types --
type DbListing = {
  _id: string;
  OwnerId: string;
  description: string;
  images: DbImage[];
  timeCreated: Date;
  lastUpdated: Date;
}

// db -- Image api types --
type DbImage = {
  id: string;
  order: number;
  altText: string;
}

// db -- Comment types --

type ParentType = "comment" | "listing"

type CommentParent = {
  ownerId:string;
  type: ParentType;
}

type DbComment = {
  _id: string;
  ownerId: string;
  content: string;
  parent: CommentParent;
  timeCreated: Date;
  lastUpdated: Date;
}