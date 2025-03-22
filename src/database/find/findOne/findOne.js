export default async function FindOne(id) {
  const res = await fetch(`/api/find-one/${id}/`, {
    cache: "no-store",
  });
  return res.json();
}
