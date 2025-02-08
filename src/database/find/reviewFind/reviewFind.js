export default async function allReviewInfo() {
  // console.log(email)
  const res = await fetch(`/api/review/`, {
    cache: 'no-store'
  });
  return res.json();
}
