
export default async function uaeAllUserFind() {
  // console.log(email)
  const res = await fetch(`/api/users/all-users/`, {
    cache: 'no-store'
  });
  return res.json();
}
