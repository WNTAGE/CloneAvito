import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { CONFIG } from "@/config";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async () => {
    navigate("/personalCabinet");
    try {
      const response = await axios.post(
        `
        ${CONFIG.API}/auth/signIn`,
        formData
      );

      console.log("Sign in successful", response.data);
    } catch (error) {
      //@ts-ignore
      console.error("Sign in failed", error.response?.data);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Email:
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
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
