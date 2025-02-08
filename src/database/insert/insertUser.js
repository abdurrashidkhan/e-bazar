export default async function insertUser(data) {
  // console.log(data);
  const res = await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = res.json();
  if (res.ok) {
    // router.push('/')
    // console.log(result)
    // console.log("add insert success");
  }
  // else if(e){
  //   alert('please try agin')
  // }

  // return NextResponse.json(result);
}
