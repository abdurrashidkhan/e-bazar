export default async function findProductsWithCategories(categories, page) {
  const res = await fetch(`/api/products/${categories}/${page}`, {
    cache: 'no-cache'
  });
  return res.json();
}
