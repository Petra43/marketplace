'use server'

import { createUser } from "@/app/services/userService"
import { NextRequest, NextResponse } from "next/server"

/**
 * create a new user
 * @param request 
 * @returns created user info or error
 * created by: Ryn Parker
 */
export async function POST(request: NextRequest) {
  const newUser = await request.json() as UserCreate
  const response = await createUser(newUser)
  return NextResponse.json(response)
}