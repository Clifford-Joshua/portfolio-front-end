import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Message, Dash, Settings } from "./components";

// =================================================================================
// content slice
import { closeSideContent } from "../../utils/features/contentSlice";
// =================================================================================

const Dashboard = () => {
  const { isDay } = useSelector((store) => store.navBar);
  const { isSideContent, isDashboard, isMessage, isSettings } = useSelector(
    (store) => store.content
  );

  const dispatch = useDispatch();

  return (
    <Wrapper className={`flex flex-col justify-between h-[100vh]  `}>
      <div className="relative lg:flex h-[100%]">
        {/* ========================================================================= */}
        {/* sidebar */}
        <Sidebar />

        {/* ========================================================================= */}
        {/* content */}
        <div
          className={`
           absolute top-0  left-0 w-full h-[100%]  pt-[6rem] md:pt-[7rem]  px-[1rem] pb-[3rem] md:px-[2rem] lg:px-[4rem] overflow-y-auto
           
           transition-all duration-500 ease-in-out

           ${isDay ? "bg-black text-white" : "bg-slate-100"}

           ${isSideContent ? "translate-x-[0]" : "translate-x-[100%]"}

           lg:relative lg:translate-x-0 lg:w-[75%]

           `}
        >
          {/* ================================================================== */}
          {/* Mobile device back button */}
          <div className="flex items-center justify-end lg:hidden">
            <button
              className="flex items-center justify-center gap-[0.5rem] cursor-pointer py-[0.4rem] px-[1.2rem] rounded-[8px] font-bold  bg-cyan-500 shadow-lg shadow-cyan-500/50 capitalize text-white hover:bg-cyan-600 transition-all duration-300"
              onClick={() => dispatch(closeSideContent())}
            >
              <FaArrowLeft className="text-[0.9rem] md:text-[1rem] " />
              <h2 className="text-[0.9rem] md:text-[1rem] py-[0.1rem]">back</h2>
            </button>
          </div>

          {/* ====================================================================== */}
          {/* current content */}
          {isDashboard && <Dash />}
          {isMessage && <Message />}
          {isSettings && <Settings />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Dashboard;
