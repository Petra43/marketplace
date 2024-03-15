// database types
//db -- user types --
type DbUser = {
  _id: string;
  name: string;
  password: string;
}

type DbUserInfo = {
  
  _id: string;
  name: string;
}

// db -- Listing api types --
type DbListing = {
  _id: string;
  name: string;
  ownerId: string;
  description: string;
  price: number;
  images: DbImage[];
  timeCreated: Date;
  lastUpdated: Date;
}

type CreateDbListing = {
  name: string;
  ownerId: string;
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

// db -- responses --
type ResponseInsert = {
  acknowledged: boolean;
  insertedId: string;
}