'use server'

import { getUserById } from "@/app/services/userService";
import { NextRequest, NextResponse } from "next/server";

/**
 * get user by id
 * @param request 
 * @param param1 user id 
 * created by: Ryn Parker 
 */
export async function GET(request: NextRequest, {params}: {params: {id: string}} ) {
  const response = await getUserById(params.id)
  return NextResponse.json(response)
  
}