export default async function uesDeleteComingSoon(id) {
  // console.log(id)
  const res = await fetch(`/api/coming-soon/${id}/`, {
    method: "DELETE",
    cache: "no-store",
  });
  return res.json();
}
