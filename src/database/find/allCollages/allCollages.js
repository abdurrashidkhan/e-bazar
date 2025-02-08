export default async function allCollages() {
  // console.log(email)
  const res = await fetch(`/api/add-collage/`, {
    cache: 'no-cache'
  });
  return res.json();
}
