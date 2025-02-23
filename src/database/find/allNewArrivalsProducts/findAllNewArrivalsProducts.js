export default async function findAllNewArrivalsProducts(sectionName, page) {
  const res = await fetch(`/api/products/new-arrivals-products/${sectionName}/${page}`, {
    cache: 'no-cache'
  });
  return res.json();
}
