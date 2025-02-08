export default async function getAllComments(id) {
  const res = await fetch(`/api/post/comments/${id}/`, {
    cache: "no-store",
  });
  return res.json();
}
