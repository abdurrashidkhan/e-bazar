import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payment = await request.json();
    const initiate = {
      store_id: process.env.STORE_ID,
      store_passwd: process.env.STORE_PASSWORD,
      total_amount: paymentInfo.price,
      currency: "BDT",
      tran_id: trxId,
      success_url: "http://localhost:3000/success-payment",
      fail_url: "http://localhost:3000/fail",
      cancel_url: "http://localhost:3000/cancle",
      ipn_url: "http://localhost:3000/cancle",
      cus_name: "Customer Name",
      cus_email: $(payment.email),
      cus_add1: "Dhaka&",
      cus_add2: "Dhaka&",
      cus_city: "Dhaka&",
      cus_state: "Dhaka&",
      cus_postcode: 1000,
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      shipping_method: "NO",
      product_name: "Laptop",
      product_category: "Laptop",
      product_profile: "general",
      multi_card_name: "mastercard, visacard, amexcard",
      value_a: "ref001 A&",
      value_b: "ref002_B&",
      value_c: "ref003 C&",
      value_d: "ref004_D",
    };

    return NextResponse.json(
      { message: "User Registered", status: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", status: false },
      { status: 500 }
    );
  }
}
