import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const {
    displayName,
    userNumber,
    email,
    emailVerified,
    photoURL,
    accessToken,
  } = await request.json();
  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    displayName,
    userNumber,
    email,
    emailVerified,
    photoURL,
    accessToken,
    role: "normal",
  };
  await connectMongodb();
  await users.findOneAndUpdate(updateDoc, filter, options);
  return NextResponse.json(
    { message: "User Registered", status: true },
    { status: 201 }
  );
}
