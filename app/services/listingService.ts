"use server"

import { MongoClient, ObjectId } from "mongodb"
import { collections, dbName } from "../constants";

/**
 * 
 * @param listingId 
 * @returns 
 * Created by: Ryn
 */
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

/**
 * 
 * @returns 
 * Created by: Ryn
 */
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


/**
 * 
 * Created by: Ryn
 */
export async function updateListing(listing: DbListing) {
  const client = new MongoClient(process.env.MONGODB_URI as string)
  const filter = {_id: new ObjectId(listing._id)}
  const update = {
    $set: {
      name: listing.name,
      description: listing.description,
      price: listing.price,
      images: listing.images,
      lastUpdated: new Date(),     
    }
  }
  console.log(update)

  try {
    const database = client.db(dbName)
    const collection = database.collection(collections.listing)
    const updatedListing = await collection.updateOne(filter, update)
    
    return updatedListing
  } catch (error) {
    return error
  } finally {
    await client.close()
  }
}

/**
 * 
 * Created by: Ryn
 */
export async function createListing(listing: CreateDbListing) {
  const client = new MongoClient(process.env.MONGODB_URI as string)

  try {
    const database = client.db(dbName)
    const collection = database.collection(collections.listing)
    const newListing = await collection.insertOne(listing) as unknown as DbListing
    return newListing
  } catch (error) {
    return error
  } finally {
    await client.close()
  }
}