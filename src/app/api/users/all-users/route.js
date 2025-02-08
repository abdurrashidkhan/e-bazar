import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request) {
  await connectMongodb();
  const allUser = await users.find({}).catch();
  // console.log(allUser)
  return NextResponse.json({ allUser });
}
