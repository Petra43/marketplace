'use server'

import { MongoClient, ObjectId } from "mongodb"
import { collections, dbName } from "../constants";

/**
 * 
 * @param userId id of the user that is being searched for
 * @returns 
 * created by: Ryn Parker
 */
export async function getUserById(userId: string): Promise<ResUser>{
  // db client 
  const client = new MongoClient(process.env.MONGODB_URI as string)
  try {
    //connect to db
    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(collections.user)

    const filter = {_id: new ObjectId(userId)}
    const projection = {_id: 1, name: 1, password: 0}
    const user = await collection.findOne(filter, {projection: projection}) as unknown as DbUserInfo
    const response: ResUser = {
      responseMessage: {
        status: statusCode._200,
        message: userFound,
      },
      user: {
        id: user._id,
        name: user.name
      }
    }
    return response

  } catch (error) { 
    const response: ResUser = {
      responseMessage: {
        status: statusCode._500,
        message: error as string, 
      }
    }
    return response
  } finally {
    client.close()
  }
}

/**
 * adds a new user to the database.
 * @param newUser information needed to create a new user
 * @returns a response message and the users details if successful
 * created by: Ryn Parker
 */
export async function createUser(newUser: UserCreate): Promise<ResUser> {
  // db client 
  const client = new MongoClient(process.env.MONGODB_URI as string)
  
  // reusable error response creation -- maybe move to a const's file?
  const createErrorResponse = (status: number, message: string): ResUser => {
    const response:ResUser = {
      responseMessage: {
        status: status,
        message: message,
      }
    }
    return response
  }
   // do passwords match
  if(newUser.password !== newUser.passwordRepeat) {
    return createErrorResponse(statusCode._400, passwordNoMatch)
  }

  try {
    //connect to db
    await client.connect();
    const database = client.db(dbName)
    const collection = database.collection(collections.user)
  
    // does user already exist
    const filter = {name: newUser.name}
    const alreadyExists = (await collection.find(filter).toArray()).length

    if(alreadyExists != 0) {
      return createErrorResponse(statusCode._403, userAlreadyExits(newUser.name))
    }
    const user = await collection.insertOne({name: newUser.name, password: newUser.password}) as unknown as ResponseInsert

    const response: ResUser = {
      responseMessage: {
        status: statusCode._200,
        message: `user: ${newUser.name} has been created`
      },
      user: {
        id: user.insertedId,
        name: newUser.name
      }
    }
    return response

  } catch (error) {
    // capture any unhandled errors
    return createErrorResponse(statusCode._500,error as string)
  } finally {
    client.close()
  }
}