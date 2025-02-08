export default async function uesDeleteUser(id) {
  const res = await fetch(`/api/users/action/${id}/`, {
    method: "DELETE",
    cache: 'no-store'
  });
  return res.json();
}