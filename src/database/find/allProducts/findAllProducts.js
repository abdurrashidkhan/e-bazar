export default async function findAllProducts() {
  // console.log(email)
  const res = await fetch(`/api/products`, {
    cache: 'no-cache'
  });
  return res.json();
}
