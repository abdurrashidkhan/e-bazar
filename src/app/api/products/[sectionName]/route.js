import connectMongodb from "@/lib/mongodb";
import products from "@/models/productsSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // Access the email from dynamic route params
    const { sectionName } = params;

    // console.log("Email received:", email);

    // Validate the email parameter
    if (!sectionName) {
      return NextResponse.json(
        { error: "Section Name Doesn't Match" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongodb();

    // Find the user by email
    const findProducts = await products.find({
      section: sectionName
    }).exec();

    if (!findProducts) {
      return NextResponse.json(
        { error: "Section Name Doesn't Match" },
        { status: 404 }
      );
    }

    // Return the found user
    return NextResponse.json({ findProducts });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
