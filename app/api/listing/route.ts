"use server"

import { createListingUrl } from "@/app/constants";
import { createListing, getListings, updateListing } from "@/app/services/listingService";
import { NextRequest, NextResponse } from "next/server";


/**
 * get all listings
 * @returns an array of listings
 * created by: Ryn Parker
 */
export async function GET() {
  const response = await getListings()
  return NextResponse.json(response)
}

/**
 * 
 * @param request the information to create or update a listing
 * @returns the new listings id ot the updated results of the listing
 * created by: Ryn Parker
 */
export async function POST(request: NextRequest) {
  const requestListing = await request.json() as ListingDetails

  if (requestListing.id === createListingUrl) {
    const newListing: CreateDbListing = {
      name: requestListing.name,
      description: requestListing.description,
      images: [],
      ownerId: requestListing.ownerId,
      timeCreated: new Date(),
      lastUpdated: new Date(),
    }
    const response = await createListing(newListing)
    return NextResponse.json(response)

  } else {
    const listingUpdate: DbListing = {
      _id: requestListing.id,
      name: requestListing.name,
      description: requestListing.description,
      price: requestListing.price,
      images: [],
      ownerId: requestListing.ownerId,
      timeCreated: new Date(),
      lastUpdated: new Date(),
    }
    const response = await updateListing(listingUpdate)
    return NextResponse.json(response)
  }

}


