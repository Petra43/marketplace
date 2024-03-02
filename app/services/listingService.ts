"use server"

import { MongoClient, ObjectId } from "mongodb"
import { collections, dbName } from "../constants";

export async function getListingById(listingId: string) {

  const client = new MongoClient(process.env.MONGODB_URI as string)

  try {
    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(collections.listing)
    
    const filter = {_id: new ObjectId(listingId)}
    const data = await collection.findOne(filter)
    return data
  } catch (error) {
    return error
  } finally {
    await client.close()
  }
}

export async function getListings(): DbListing[] {

  const client = new MongoClient(process.env.MONGODB_URI as string)

  try {
    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(collections.listing)
    const filter = {} 
    
    const data = await collection.find(filter).toArray() as unknown as DbListing[]
    return data
  } catch (error) {
    return error
  } finally {
    await client.close()
  }
}

type listingResponse = {
  
}