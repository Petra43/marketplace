"use server"

import {getCommentsByParentId} from "@/app/services/CommentService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
  const commentId = await params.id

  try {
    const comments: ListingComment[] = await getCommentsByParentId(commentId, "comment")
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json(error)
  }
}