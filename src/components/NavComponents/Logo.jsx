import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ==================================================================
// React Icons
// ==================================================================
import { FaBars } from "react-icons/fa6";

// ==================================================================
// nav slice
// ==================================================================
import { openSideBar } from "../../utils/features/navSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="h-full w-full lg:w-[15%]">
      <div className="h-full  flex items-center justify-between">
        <a href="/" referrerPolicy="no-referrer">
          <h1
            className={`font-extrabold text-[1.25rem] uppercase md:text-[1.5rem] lg:text-[1.4rem] ${
              isDay ? "text-blue-500" : "text-black"
            }`}
          >
            Clifford
          </h1>
        </a>

        <button
          className="p-[0.3rem] px-[0.5rem] md:p-[0.5rem] md:px-[0.8rem] shadow-[0px_0px_8px_4px] shadow-gray-400 rounded-[8px] bg-black text-white lg:hidden cursor-pointer"
          onClick={() => dispatch(openSideBar())}
        >
          <FaBars className="font-extrabold text-[1.4rem] md:text-[1.6rem]" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Logo;
