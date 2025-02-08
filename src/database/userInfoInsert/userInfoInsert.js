// "use client";

export default async function userInfoInsert(data) {
  console.log(data)
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/users/`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to insert user info");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
