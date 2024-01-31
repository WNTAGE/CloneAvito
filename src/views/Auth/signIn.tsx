import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CONFIG } from "@/config";
import Cookies from "js-cookie";

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

      if (response.status === 201) {
        Cookies.set("token", response.data.token, { path: "/" });

        navigate("/personalCabinet");
      } else {
        console.error("Не удалось войти. Статус ответа:", response.status);
      }
    } catch (error) {
      //@ts-ignore
      console.error("Sign in failed", error.response?.data);
    }
  };

  const tokenCookie = Cookies.get("token");

  console.log(
    tokenCookie ? 'Куки "token" найдены:' : 'Куки "token" не найдены',
    tokenCookie
  );
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
