import connectMongodb from "@/lib/mongodb";
import products from "@/models/productsSchema";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectMongodb();

  // Fetch all products and select only the 'categories' field
  const allCategories = await products.find({}, { categories: 1, _id: 0 });
  // Extract unique categories names
  const uniqueCategories = [...new Set(allCategories.map(item => item.categories))];


  return NextResponse.json({ categories: uniqueCategories });
}
