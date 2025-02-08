import Swal from "sweetalert2";
export default async function insertReview(review,seIsLoading,reset) {
  try {
    const res = await fetch(`/api/review/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to submit review");
    }
    if (res.ok) {
      seIsLoading(false)
      reset()
      Swal.fire("Thank for your feedback", "", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}