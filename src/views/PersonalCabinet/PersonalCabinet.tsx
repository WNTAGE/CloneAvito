import { CONFIG } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

const PersonalCabinet: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("token="))
      ?.split("=")[1];

    if (token) {
      axios
        .post(`${CONFIG.API}/auth/getUser`, { token })
        .then((response) => {
          console.log("User data", response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Failed to get user data", error.response?.data);
        });
    }
  }, []);

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
