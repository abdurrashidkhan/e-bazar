import Swal from "sweetalert2";
export default async function putBannerSeriesSubtitles(
  category,
  id,
  insertData,
  seIsLoading,
  reset
) {
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/update/banner/${category}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(insertData),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to insert Data");
    }
    if (res.ok) {
      seIsLoading(false);
      reset();
      Swal.fire("update data success", "", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
