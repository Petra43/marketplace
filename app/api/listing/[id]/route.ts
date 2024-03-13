"use server"

import {getListingById} from "@/app/services/listingService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const listingId = await params.id
  const response = await getListingById(listingId)
  return NextResponse.json(response)
}