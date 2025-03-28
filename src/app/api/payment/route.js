import axios from "axios";
import { NextResponse } from "next/server";
const mongoose = require('mongoose');
export async function POST(request) {
  const trxId = new mongoose.Types.ObjectId();
  try {
    const payment = await request.json();
    console.log(payment)
    const initiate = {
      store_id: process.env.STORE_ID,
      store_passwd: process.env.STORE_PASSWORD,
      total_amount: payment.totalPrice,
      currency: "BDT",
      tran_id: trxId,
      success_url: "/payment/success-payment",
      fail_url: "/payment/fail",
      cancel_url: "/payment/cancel",
      ipn_url: "/payment/ipm-payment-success",
      cus_name: "Customer Name",
      cus_email: payment.email,
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
      payment_status: "padding"
    };
    const isResponse = await axios({
      url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      method: "POST",
      data: initiate,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    console.log(isResponse?.data?.GatewayPageURL)






    return NextResponse.json({
      status: 200,
      message: "payment init",
      success: true,
      gatewayUrl: isResponse?.data?.GatewayPageURL,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", status: false },
      { status: 500 }
    );
  }
}
