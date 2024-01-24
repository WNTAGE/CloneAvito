import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { CONFIG } from "@/config";

type FormData = {
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        `
        ${CONFIG.API}/auth/signUp`,
        data
      );
      console.log("Sign up successful", response.data);
    } catch (error) {
      //@ts-ignore
      console.error("Sign up failed", error.response?.data);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { useRecoilState } from "recoil";
// import axios from "axios";
// import { userState } from "@/Utils/helpers/atoms/atoms";

// const SignUp: React.FC = () => {
//   const [user, setUser] = useRecoilState(userState);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     //@ts-ignore
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSignUp = async () => {
//     try {
//       const response = await axios.post(
//         "https://avitobackend.na4u.ru/auth/signUp",
//         user
//       );
//       console.log("Sign up successful", response.data);
//     } catch (error) {
//       //@ts-ignore
//       console.error("Sign up failed", error.response?.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form>
//         <label>
//           Email:
//           <input type="text" name="email" onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" onChange={handleChange} />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignUp}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
