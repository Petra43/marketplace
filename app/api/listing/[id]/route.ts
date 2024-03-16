"use server"

import {getListingById} from "@/app/services/listingService";
import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param request 
 * @param id - id of the lsiting
 * @returns a single listing
 * created by: Ryn Parker
 */
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const listingId = await params.id
  const response = await getListingById(listingId)
  return NextResponse.json(response)
}