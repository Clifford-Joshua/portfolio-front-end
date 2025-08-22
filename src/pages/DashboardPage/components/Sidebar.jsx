import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaEnvelope } from "react-icons/fa";
import { IoGrid, IoSettings } from "react-icons/io5";

// =================================================================================
// content slice
import {
  openDashboard,
  openMessage,
  openSettings,
  openSideContent,
} from "../../../utils/features/contentSlice";
// =================================================================================

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper className="lg:w-[25%] h-[100%] bg-[#374151]">
      <div className="  pt-[6rem] md:pt-[7rem] lg:pt-[6.5rem]  px-[1rem] pb-[3rem] md:px-[2rem]  flex flex-col gap-[1rem] text-white">
        {/* ========================================================================== */}
        {/* Dashboard */}
        <div
          className="flex items-center  gap-[0.5rem] cursor-pointer py-[0.4rem]"
          onClick={() => {
            dispatch(openDashboard());
            dispatch(openSideContent());
          }}
        >
          <IoGrid className="text-[1.5rem] md:text-[1.8rem]" />

          <h2 className="text-[1.2rem] md:text-[1.3rem]">DashBoard</h2>
        </div>

        {/* ========================================================================== */}
        {/* Messages */}
        <div
          className="flex items-center  gap-[0.5rem] cursor-pointer py-[0.4rem]"
          onClick={() => {
            dispatch(openMessage());
            dispatch(openSideContent());
          }}
        >
          <FaEnvelope className="text-[1.5rem] md:text-[1.8rem]" />

          <h2 className="text-[1.2rem] md:text-[1.3rem]">Messages</h2>
        </div>

        {/* ========================================================================== */}
        {/* Settings */}
        <div
          className="flex items-center  gap-[0.5rem] cursor-pointer py-[0.4rem]"
          onClick={() => {
            dispatch(openSettings());
            dispatch(openSideContent());
          }}
        >
          <IoSettings className="text-[1.5rem] md:text-[1.8rem]" />

          <h2 className="text-[1.2rem] md:text-[1.3rem]">Settings</h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Sidebar;
