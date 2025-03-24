import Swal from "sweetalert2";
export default async function PaymentWithSslc(insertData, seIsLoading) {
  console.log(insertData)
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/payment/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(insertData),
    });
    // }
    if (!res.ok) {
      Swal.fire("Failed", "Try again late", "error");
      seIsLoading(false);
    }
    if (res.ok) {
      seIsLoading(false);

      Swal.fire("Done", "Event annulment submitted", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
