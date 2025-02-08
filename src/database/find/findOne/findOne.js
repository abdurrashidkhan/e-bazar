export default async function findOne(email) {
  console.log(email);
  const res = await fetch(`/api/find-one/${email}/`, {
    cache: "no-store",
  });
  return res.json();
}
