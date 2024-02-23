import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // get information from the server

  return NextResponse.json({message: 'get request'}, {status: 200})
}

export async function POST(request: NextRequest) {
  // 
  const body = await request.json()

  return NextResponse.json({message: "post request"}, {status: 200})
}

export async function PUT(request: NextRequest) {
  //
  return NextResponse.json({message: "put request"}, {status: 200})
}

export async function PATCH(request: NextRequest) {
  return NextResponse.json({message: "patch request"}, {status: 200})
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({message: "patch request"}, {status: 200})
}
