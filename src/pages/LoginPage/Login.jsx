import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const url = import.meta.env.VITE_PROJECT_DEPLOYED_URL;

const Login = () => {
  const navigate = useNavigate();
  const { isDay } = useSelector((store) => store.navBar);
  const [showPassword, setShowPassword] = useState(false);

  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!adminData.email || !adminData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(`${url}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg);
        return;
      }

      setAdminData({
        email: "",
        password: "",
      });

      if (data.token) {
        toast.success(data.msg);
        localStorage.setItem("token", data.token);
        navigate("/admin-Dashboard");
      } else {
        toast.error("No token received");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <Wrapper
      className={`pt-[6rem] md:pt-[7rem]  px-[1rem] pb-[3rem] md:px-[2rem] lg:px-[4rem] min-h-[100vh] flex flex-col justify-between  ${
        isDay ? "bg-black text-white" : "bg-slate-100"
      } `}
    >
      <div className="flex items-center justify-center lg:h-[70vh]">
        <div className="flex flex-col gap-[1.5rem] w-[100%] lg:w-[50%]">
          <h2 className="uppercase h-[10vh]  flex items-center justify-center font-bold text-[2rem] md:text-[3rem]">
            Login
          </h2>

          <form className="flex flex-col gap-[1.5rem]" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              value={adminData.email}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.8rem] rounded-[10px] "
              placeholder="Your Email"
            />

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={adminData.password}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.8rem] rounded-[10px]"
              placeholder="Your Password"
            />

            <div className="flex items-center justify-between">
              <div>
                {showPassword ? (
                  <div
                    className="flex items-center gap-[0.5rem] cursor-pointer text-[1rem] md:text-[1.2rem]"
                    onClick={() => setShowPassword(false)}
                  >
                    <FaRegEye />
                    <h3>hide password</h3>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-[0.5rem] cursor-pointer text-[1rem] md:text-[1.2rem]"
                    onClick={() => setShowPassword(true)}
                  >
                    <FaRegEyeSlash />
                    <h3>show password</h3>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-[0.5rem]">
                <input
                  type="checkbox"
                  className=" cursor-pointer w-[20px] h-[20px]"
                />
                <label className="cursor-pointer md:text-[1.2rem]">
                  Remember Me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-[0.5rem] text-[1.3rem] w-full h-[50px] bg-blue-500 cursor-pointer text-white font-bold capitalize rounded-[8px] shadow-[0_0_10px_gray] hover:bg-blue-600 transition-all duration-300"
            >
              <h1>Submit</h1>
              <MdArrowOutward />
            </button>

            <h2 className="text-center font-bold text-[1.3rem] capitalize">
              forgot password?
            </h2>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Login;
