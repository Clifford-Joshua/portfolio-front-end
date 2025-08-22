import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const HireBtn = ({ text }) => {
  return (
    <Wrapper className="w-[100%]">
      <Link
        to={"/contact"}
        className="flex items-center justify-center gap-[0.5rem] text-[1.3rem] w-full h-[50px] bg-blue-500 cursor-pointer text-white font-bold capitalize rounded-[8px] shadow-[0_0_10px_gray] hover:bg-blue-600 transition-all duration-300"
      >
        <h1>{text}</h1>
        <MdArrowOutward />
      </Link>
    </Wrapper>
  );
};

const Wrapper = Styled.div``;

export default HireBtn;
