import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useRole = () => {
  const [role, setRole] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/users/role", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return role;
};

export default useRole;
