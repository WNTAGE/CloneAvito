import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CONFIG } from "@/config";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `
        ${CONFIG.API}/auth/signIn`,
        formData
      );

      console.log("Sign in successful", response.data);

      document.cookie = `token=${response.data.token}; path=/`;

      navigate("/personalCabinet");
    } catch (error) {
      //@ts-ignore
      console.error("Sign in failed", error.response?.data);
    }
  };
  const tokenCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("token="));

  if (tokenCookie) {
    console.log('Куки "token" найдены:', tokenCookie);
  } else {
    console.log('Куки "token" не найдены');
  }
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </label>
        <br />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
