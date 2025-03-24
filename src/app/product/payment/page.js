"use client"
import Loading from "@/Components/Common/Loading";
import PaymentWithSslc from "@/database/payments/PaymentSslc";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [IsLoading, setLoading] = useState(false);

  const userAddresses = {
    address1: "123 Main St",
    totalPrice: 2000,
    address2: "Apt 4B",
    city: "Dhaka",
    state: "NY",
    zip: "10001",
    country: "Bangladesh",
    status: 'padding'
  }

  const paymentReq = async (userAddresses, setLoading) => {
    setLoading(true);
    const { paymentResponse } = await PaymentWithSslc(userAddresses, setLoading,)
    console.log(paymentResponse)
    setLoading(false);

  }
  useEffect(() => {
    paymentReq(userAddresses, setLoading)  // Call the function here
  }, []);


  if (IsLoading) {
    return <Loading />
  }
  return (
    <section>
      <div className="container mx-auto px-2 pt-[8rem] pb-10">
        <div className=" bg-gray-100 ">
          {/* Shipping Address */}

          <div className="flex items-start gap-5">
            {/* Payment Method */}
            <div className="w-[100%]">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Choose a Payment Method</h2>
                <p className="text-sm text-gray-600">Pay $67.52/month for 12 months plus $41 tax (total $810.23).</p>
                <div className="border p-3 mt-3 rounded-md">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded w-full">
                    Use this Payment Method
                  </button>
                </div>
              </div>



              {/* Offers */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Offers</h2>
                <p className="text-gray-600">No available offers at the moment.</p>
              </div>

              {/* Items and Shipping */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Items and Shipping</h2>
                <p className="text-gray-600">Products that originate from abroad may have import fees.</p>

              </div>
            </div>
            <div className="w-[40%]">
              {/* Order Summary */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                <div className="text-gray-600">
                  <p>Items: <span className="float-right">$929.99</span></p>
                  <p>Shipping & Handling: <span className="float-right">$41.72</span></p>
                  <p>Total before tax: <span className="float-right">$471.72</span></p>
                  <p>Import Fees Deposit: <span className="float-right">$62.51</span></p>
                  <p className="font-semibold mt-2">Order Total: <span className="float-right">$810.23</span></p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
                <p className="text-gray-600">Rashid Khan</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
                <p className="text-gray-600">Dhaka, 4/5 7733</p>
                <button className="mt-2 text-blue-600 hover:underline">Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
