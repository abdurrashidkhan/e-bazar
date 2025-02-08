export default async function uesDeleteBooks(id) {
  const res = await fetch(`/api/add-book/${id}/`, {
    method: "DELETE",
    cache: "no-store",
  });
  return res.json();
}
