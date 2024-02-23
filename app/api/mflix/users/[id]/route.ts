import { MongoClient, ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const userId = await params.id
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('users');

    const filter = { _id: new ObjectId(userId)}
    const data = await collection.findOne(filter)
    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ message: error });
  } finally {
    await client.close();
  }
}
