"use server"

import { Collection, MongoClient, ObjectId } from "mongodb"
import { collections, dbName } from "../constants";

  // possibly a poor implementation due to number of DB requests
  export async function getCommentsByParentId(parentId: string, parentType: ParentType): Promise<ListingComment[]>{
    const client = new MongoClient(process.env.MONGODB_URI as string)
    const comments: ListingComment[] = []

    try {
      // connect to db
      await client.connect()

      // get comment data
      const database = client.db(dbName);
      const collection = database.collection(collections.comment);

      const filter = {"parent.ownerId": parentId, "parent.parentType": parentType};
      const commentsData = await collection.find(filter).toArray() as unknown as DbComment[];
  
    // make parents useable
      for await (const comment of commentsData) {
        const listingComment: ListingComment = {
          id: comment._id,
          owner: comment.ownerId,
          text: comment.content,
        }      
        // add to final output
        comments.push(listingComment)
      }

      //output
      return comments

    } catch (error) {
      return error
    } finally {
      await client.close()
    }
  }
