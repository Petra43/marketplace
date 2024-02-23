import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('users');
    
    const data = await collection.find({}).project({name: 1, email: 1}).toArray();

    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ message: error });
  } finally {
    await client.close();
  }
}

export async function POST(request: NextRequest) {
  
  const data = await request.json(); // await is really important
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('test-collection');
    
    await collection.insertOne({ data });

    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ message: error });
  } finally {
    await client.close();
  }
}