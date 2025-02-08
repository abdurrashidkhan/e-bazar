export default async function findAllPosts() {

  const res = await fetch(`/api/all-post/`, {
    cache: "no-store",
  });
  return res.json();
}
