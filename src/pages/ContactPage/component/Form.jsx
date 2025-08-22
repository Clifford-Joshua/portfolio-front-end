import Intro from "./Intro";
import styled from "styled-components";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdArrowOutward } from "react-icons/md";

const url = import.meta.env.VITE_PROJECT_DEPLOYED_URL;

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [data, setData] = useState({});

  const { isDay } = useSelector((store) => store.navBar);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message || !values.subject) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(`${url}/contact/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          subject: values.subject,
        }),
      });

      const data = await res.json();

      setData(data);

      if (!res.ok) {
        toast.error(data.msg || "Form submission failed");
        return;
      }

      toast.success(data.msg || "Form submitted successfully");

      // Reset form values after successful submission
      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-col gap-[2rem] lg:flex-row lg:gap-[2rem]">
        <Intro />

        {data && data.success ? (
          <div className="flex items-center justify-center w-full py-[1rem]">
            <h2
              className={`font-bold text-[1.1rem] lg:text-[1.3rem] text-center ${
                isDay ? "text-green-400" : "text-green-700"
              }`}
            >
              Thank you for contacting us. We will get back to you as soon as
              possible.
            </h2>
          </div>
        ) : (
          <form
            className="flex flex-col gap-[1rem] lg:w-[50%]"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={(e) => handleOnchange(e)}
              className="border w-full p-[0.8rem] rounded-[10px]"
              placeholder="Your Name"
            />

            <input
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => handleOnchange(e)}
              className="border w-full p-[0.8rem] rounded-[10px]"
              placeholder="Your Email"
            />

            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={(e) => handleOnchange(e)}
              className="border w-full p-[0.8rem] rounded-[10px]"
              placeholder="Subject"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={values.message}
              onChange={(e) => handleOnchange(e)}
              className="border w-full p-[0.8rem] rounded-[10px] min-h-[150px]"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-[0.5rem] text-[1.3rem] w-full h-[50px] bg-blue-500 cursor-pointer text-white font-bold capitalize rounded-[8px] shadow-[0_0_10px_gray] hover:bg-blue-600 transition-all duration-300"
            >
              <h1>Submit</h1>
              <MdArrowOutward />
            </button>
          </form>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Form;
