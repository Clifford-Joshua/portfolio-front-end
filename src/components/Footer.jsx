import React from "react";
import styled from "styled-components";

// ==================================================================
// Image imports
// ==================================================================
import email from "../assets/Contact_img/gmail_logo.png";
import github from "../assets/Contact_img/github_logo.png";
import faceBook from "../assets/Contact_img/facebook_logo.jpg";
import linkedIn from "../assets/Contact_img/linkedIn_logo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className={`lg:hidden ${isDay ? "bg-black" : "bg-slate-100"} `}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] justify-center items-center gap-[1.5rem] p-[1rem] ">
        <div
          className={`border-2 h-[50px] flex justify-center items-center rounded-[15px] md:h-[60px] ${
            isDay ? "border-gray-500" : "border-black"
          }`}
        >
          <a href="" referrerPolicy="no-referrer">
            <img
              src={github}
              alt="Github"
              className="w-[25px] object-cover md:w-[40px]"
            />
          </a>
        </div>

        <div
          className={`border-2 h-[50px] flex justify-center items-center rounded-[15px] md:h-[60px] ${
            isDay ? "border-gray-500" : "border-black"
          }`}
        >
          <a href="" referrerPolicy="no-referrer">
            <img
              src={faceBook}
              alt="Facebook"
              className="w-[30px] object-cover md:w-[45px]"
            />
          </a>
        </div>

        <div
          className={`border-2 h-[50px] flex justify-center items-center rounded-[15px] md:h-[60px] ${
            isDay ? "border-gray-500" : "border-black"
          }`}
        >
          <a href="" referrerPolicy="no-referrer">
            <img
              src={linkedIn}
              alt="linkedIn"
              className="w-[30px] object-cover md:w-[45px]"
            />
          </a>
        </div>

        <div
          className={`border-2 h-[50px] flex justify-center items-center rounded-[15px] md:h-[60px] ${
            isDay ? "border-gray-500" : "border-black"
          }`}
        >
          <a href="" referrerPolicy="no-referrer">
            <img
              src={email}
              alt="Email"
              className="w-[25px] object-cover md:w-[40px]"
            />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Footer;
