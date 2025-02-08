export default async function countReact(id, email) {
  try {
    const res = await fetch(`/api/post-react/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }) // Send email directly
    });

    if (!res.ok) {
      throw new Error("Failed to insert Data");
    }

    return res.json(); // Return the JSON response from the backend
  } catch (error) {
    console.error("Error in countReact:", error);
    throw error; // Re-throw to be handled by reactCounter
  }
}
