import connectMongodb from "@/lib/mongodb";
import products from "@/models/productsSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // const { searchParams } = new URL(request.url);
  console.log(params.category)
  const category = params.category[0];
  const page = params.category[1];
  console.log(`category = ${category} , page number is = ${page}`,)

  // console.log(category, page);

  try {
    await connectMongodb();
    // Fetch products based on the category
    const result = await products.find({
      categories: category
    }).exec();
    // console.log(result)
    // Pagination logic
    const totalLength = page * 8;
    const calculation = totalLength - 8;
    const productsInfo = result.reverse()?.slice(calculation, totalLength);
    console.log(productsInfo);

    // Pagination button logic
    const totalProjectsLength = result.length;
    const calculationButton = totalProjectsLength / 8;
    const buttonNumber = Math.ceil(calculationButton);
    const paginationButton = [];
    for (let i = 1; i <= buttonNumber; i++) {
      paginationButton.push(i);
    }

    // Handle no data found
    if (productsInfo.length === 0) {
      return NextResponse.json(
        {
          message: "No data found",
          status: false,
        },
        { status: 404 }
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        length: result.length,
        message: "Data found successfully",
        status: true,
        data: productsInfo,
        pagination: paginationButton,
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle internal server error
    return NextResponse.json(
      {
        message: "Internal server error",
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}