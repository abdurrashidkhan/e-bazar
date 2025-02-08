import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { email } = params;
  const { photoURL } = await request.json();

  const filter = { email: email };
  const updateDoc = {
    $set: { photoURL }, // Use $set to ensure the field is updated
  };

  try {
    await connectMongodb();

    // Update the existing user or do nothing if no changes are required
    const result = await users.updateOne(filter, updateDoc);

    if (result.modifiedCount > 0) {
      return NextResponse.json(
        { message: "Profile Picture Updated", status: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "No changes made", status: false },
        { status: 200 }
      );
    }

  } catch (error) {
    console.log("Error updating profile picture:", error);
    return NextResponse.json(
      { message: "Failed to update profile picture", status: false },
      { status: 500 }
    );
  }
}

