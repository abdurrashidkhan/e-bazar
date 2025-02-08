export default async function allEvent() {
  // console.log(email)
  const res = await fetch(`/api/add-event/`, {
    cache: 'no-cache'
  });
  return res.json();
}
