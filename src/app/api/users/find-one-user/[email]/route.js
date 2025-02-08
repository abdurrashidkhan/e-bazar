import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // Access the email from dynamic route params
    const { email } = params;

    // console.log("Email received:", email);

    // Validate the email parameter
    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongodb();

    // Find the user by email
    const allUserInfo = await users.findOne({ email: email }).exec();

    if (!allUserInfo) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Return the found user
    return NextResponse.json({ allUserInfo });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
