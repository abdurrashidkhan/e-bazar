import Swal from "sweetalert2";

export default async function commentsInsert(comment, seIsLoading, reset) {
  try {
    const res = await fetch(`/api/post/comments/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(comment),
    });

    if (!res.ok) {
      Swal.fire("Failed", "Try again later", "error");
      return null;
    }

    seIsLoading(false);
    reset();

    // Handle empty response gracefully
    if (res.headers.get("content-length") === "0") {
      return {};
    }

    // Parse JSON response
    return await res.json();
  } catch (error) {
    console.error("Error:", error);
    Swal.fire("Error", "Something went wrong. Please try again.", "error");
  }
}
