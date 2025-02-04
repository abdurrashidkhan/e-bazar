import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

const UseToken = (users) => {
  // const [token, setToken] = useState("");
  useEffect(() => {
    // updateProfile({ displayName: users.user.displayName });
    console.log(users?.user?.displayName);
    const displayName = users?.user?.displayName;
    const email = users?.user?.email;
    const userData = { displayName: displayName, email: email };
    console.log(userData);
    if (email) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/api/v1/users/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(userData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // localStorage.setItem("token", data.token);
          // setToken(data.token);
          console.log(data);
        });
    }
  }, [users]);
  return [];
};

export default UseToken;
