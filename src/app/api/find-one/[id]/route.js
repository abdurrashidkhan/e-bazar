import connectMongodb from "@/lib/mongodb";
import products from "@/models/productsSchema";
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  // Validate the ID
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    await connectMongodb();

    const query = { _id: new ObjectId(id) }; // Use new ObjectId(id) instead of Object(id)
    const product = await products.findOne(query); // Use findOne instead of find to get a single document

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
