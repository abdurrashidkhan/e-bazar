export default async function uesDeleteBanner(id) {
  // console.log(id)
  const res = await fetch(`/api/add-banner/${id}/`, {
    method: "DELETE",
    cache: 'no-store'
  });
  return res.json();
}
