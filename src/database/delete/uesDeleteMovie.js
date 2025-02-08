export default async function uesDeleteMovie(id) {
  // console.log(id)
  const res = await fetch(`/api/movies/${id}/`, {
    method: "DELETE",
    cache: 'no-store'
  });
  return res.json();
}
