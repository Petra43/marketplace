"use server"

import {getCommentsByParentId} from "@/app/services/CommentService";
import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param request 
 * @param id - id of parent used to find it's children
 * @returns array of comments
 * created by: Ryn Parker
 */
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const listingId = await params.id

  try {
    const comments: ListingComment[] = await getCommentsByParentId(listingId, "listing")
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json(error)
  }
}