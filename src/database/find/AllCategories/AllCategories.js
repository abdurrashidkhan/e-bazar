export default async function findAllCategories() {
  // console.log(email)
  const res = await fetch(`/api/products/categories`, {
    cache: 'no-cache'
  });
  return res.json();
}
