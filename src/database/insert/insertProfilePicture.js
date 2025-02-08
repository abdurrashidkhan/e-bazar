import Swal from "sweetalert2";

export default async function insertProfilePicture(email, insertData, setIsLoading, reset) {
  // console.log(email);

  try {
    // Send PUT request to update the user profile picture
    const res = await fetch(`/api/users/update-user/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(insertData),
    });

    // Check if the response is successful
    if (!res.ok) {
      // If the response is not ok, show an error message
      Swal.fire("Failed", "Try again later", "error");
      return;
    }

    // If the response is ok, attempt to parse the JSON response
    const responseJson = await res.text(); // Use text() first to avoid the error

    // Check if the response body is empty
    if (responseJson) {
      const parsedData = JSON.parse(responseJson); // Parse it into JSON if there's data
      // console.log(parsedData); // Optionally log the parsed response
    }

    // Hide the loading state and reset the form
    setIsLoading(false);
    reset();

    // Show a success message
    Swal.fire("Done", "Profile picture updated", "success");

  } catch (error) {
    console.log("Error updating profile picture:", error);
    // Handle any network or other errors
    Swal.fire("Error", "Something went wrong", "error");
    setIsLoading(false); // Stop loading in case of an error
  }
}
