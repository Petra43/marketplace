import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  
  const data = await request.json(); // await is really important
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();

    const database = client.db('marketplace_playground');
    const collection = database.collection('test-collection');
    
    await collection.insertOne({ data });

    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ message: error });
  } finally {
    await client.close();
  }
}