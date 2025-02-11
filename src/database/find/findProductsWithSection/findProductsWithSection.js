export default async function findProductsWithSection(sectionName) {
  const res = await fetch(`/api/products/${sectionName}`, {
    cache: 'no-cache'
  });
  return res.json();
}
