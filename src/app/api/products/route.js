
import connectMongodb from "@/lib/mongodb";
import products from "@/models/productsSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request) {
  await connectMongodb();
  const allProducts = await products.find({}).catch();
  // console.log(allProducts)
  return NextResponse.json({ allProducts });
}
