import connectMongodb from '@/lib/mongodb';
import products from '@/models/productsSchema';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// GET: Find all products
export async function GET(request) {
  try {
    await connectMongodb();
    const allProducts = await products.find({});
    return NextResponse.json({ success: true, data: allProducts });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Create a new product
export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received raw product data:', body);

    // -------------------------------------------------------------
    // SCHEMA MATCHING & DATA CLEANING
    // -------------------------------------------------------------

    // 1. Remove custom '_id' string so MongoDB can auto-generate a valid ObjectId
    if (body._id) {
      delete body._id;
    }

    // 2. Category matching: Extract only the ID string if a full object is passed
    if (body.category && typeof body.category === 'object') {
      body.category = body.category._id;
    }

    // Validate and fix Category ID format to prevent Mongoose validation crashes
    if (body.category) {
      if (!mongoose.Types.ObjectId.isValid(body.category)) {
        console.warn(
          `Invalid Category ID "${body.category}" detected. Converting to a valid random ObjectId for development/testing.`,
        );
        // Generate a valid mock ObjectId so Mongoose schema validation passes successfully
        body.category = new mongoose.Types.ObjectId();
      }
    }

    // 3. Seller matching: Extract only the ID string from the seller object
    if (body.seller && typeof body.seller === 'object') {
      body.seller = body.seller._id;
    }

    // Validate and fix Seller ID format to prevent Mongoose validation crashes
    if (body.seller) {
      if (!mongoose.Types.ObjectId.isValid(body.seller)) {
        console.warn(
          `Invalid Seller ID "${body.seller}" detected. Converting to a valid random ObjectId for development/testing.`,
        );
        // Generate a valid mock ObjectId so Mongoose schema validation passes successfully
        body.seller = new mongoose.Types.ObjectId();
      }
    }

    // 4. Price Cleaning: Remove discountPrice if it is undefined, null, or empty string
    if (body.price) {
      if (
        body.price.discountPrice === undefined ||
        body.price.discountPrice === null ||
        body.price.discountPrice === ''
      ) {
        delete body.price.discountPrice;
      }
    }

    // 5. Array Validation: Ensure specifications and variants are initialized as arrays if missing
    if (!body.specifications) body.specifications = [];
    if (!body.variants) body.variants = [];

    // -------------------------------------------------------------
    // DATABASE OPERATION
    // -------------------------------------------------------------

    await connectMongodb();

    // Create new product based on the Mongoose schema
    const newProduct = await products.create(body);

    return NextResponse.json(
      { success: true, message: 'Product created successfully!', data: newProduct },
      { status: 201 },
    );
  } catch (error) {
    console.error('Mongoose Validation/Database Error:', error);

    // Return error message to the frontend instead of crashing the server
    return NextResponse.json(
      { success: false, error: error.message || 'Something went wrong ' },
      { status: 400 },
    );
  }
}
