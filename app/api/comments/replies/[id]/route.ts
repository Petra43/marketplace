"use server"

import {getCommentsByParentId} from "@/app/services/CommentService";
import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param request 
 * @param od - id of parent used to find it's children
 * @returns and array of comments
 * created by: Ryn Parker
 */
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const commentId = await params.id

  try {
    const comments: ListingComment[] = await getCommentsByParentId(commentId, "comment")
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json(error)
  }
}