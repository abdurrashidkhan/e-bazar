import connectMongodb from '@/lib/mongodb';
import paymentForAdmin from '@/models/paymentForAdminSchema';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type');
    let paymentData;

    // Parse incoming data
    if (contentType?.includes('application/json')) {
      paymentData = await request.json();
    } else if (contentType?.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      paymentData = Object.fromEntries(formData.entries());
    } else {
      const textData = await request.text();
      try {
        paymentData = JSON.parse(textData);
      } catch {
        const params = new URLSearchParams(textData);
        paymentData = Object.fromEntries(params.entries());
      }
    }

    // Validate payment data
    if (!paymentData || Object.keys(paymentData).length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid payment data received" },
        { status: 400 }
      );
    }
    // this for db operation 
    await connectMongodb();
    const payment = await paymentForAdmin.insertOne(paymentData);
    console.log(payment)


    // Create secure redirect URL
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const redirectUrl = new URL('/payment/statement', `${protocol}://${host}`);

    // Debug logs
    console.log('Processed payment data:', paymentData);
    console.log('Redirecting to:', redirectUrl.toString());
    if (paymentData) {
      return NextResponse.redirect(redirectUrl.toString(), 307);
    }
    // Return both JSON response and redirect URL
    // return NextResponse.json(
    //   {
    //     success: true,
    //     data: paymentData,
    //     redirectUrl: redirectUrl.toString()
    //   },
    //   {
    //     status: 200,
    //     headers: {
    //       'Location': redirectUrl.toString()
    //     }
    //   }

    // );

  } catch (error) {
    console.error('Payment processing error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: false,
        error: "Payment processing failed",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}