import { CONFIG } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";

interface UserData {
  email: string;
}

const PersonalCabinet: React.FC = () => {
  const tokenCookie = Cookies.get("token");
  const [userData, setUserData] = useState<UserData>();
  useEffect(() => {
    if (tokenCookie) {
      axios
        .post(`${CONFIG.API}/auth/getUser`, { token: tokenCookie })
        .then((response) => {
          console.log("User data", response.data);
          setUserData(response.data as UserData);
        })
        .catch((error) => {
          console.error("Failed to get user data", error.response?.data);
        });
    }
  }, [tokenCookie]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Personal Cabinet</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default PersonalCabinet;
