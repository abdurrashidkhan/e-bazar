export default async function findAllPost(email) {
  // console.log(email);
  const res = await fetch(`/api/all-post/${email}`, {
    cache: "no-store",
  });
  return res.json();
}
