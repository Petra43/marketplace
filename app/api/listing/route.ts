"use server"

import { getListings } from "@/app/services/listingService";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getListings()
  return NextResponse.json(response)
}