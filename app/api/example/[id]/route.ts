import { NextRequest, NextResponse } from 'next/server';

export async function GET(request:NextRequest ,{params}: {params: {id: string}}) {
  // get information from the server
  const id = params.id
  return NextResponse.json({message: `get request: ${id}`}, {status: 200})
}