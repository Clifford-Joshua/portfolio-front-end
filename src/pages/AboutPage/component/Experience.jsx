import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DataCalculation from "../../../utils/Functionality/DataCalculation";

const Experience = () => {
  const { years } = DataCalculation();
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[2rem]">
        {/* ========================================================================== */}
        {/* Years of experience */}
        <div className="border-2 rounded-[15px] p-[2rem] lg:p-[1.3rem] flex items-center justify-center gap-[1.5rem]">
          <h2
            className={`${
              isDay ? " text-[#ffd700]" : "text-[#0000ff] "
            } w-[30%] text-[2.2rem] lg:text-[2rem] font-extrabold`}
          >
            {`${years.length <= 9 ? `0${years}` : years} +`}
          </h2>
          <h3 className="w-[45%] text-[1.4rem] lg:text-[1.2rem] font-bold capitalize">
            Years of experience
          </h3>
        </div>

        {/* ========================================================================== */}
        {/* company served */}
        <div className="border-2 rounded-[15px] p-[2rem] lg:p-[1.3rem] flex items-center justify-center">
          <h2
            className={`${
              isDay ? " text-[#ffd700]" : "text-[#0000ff] "
            } w-[30%] text-[2.2rem] lg:text-[2rem] font-extrabold`}
          >
            0 +
          </h2>
          <h3 className="w-[45%] text-[1.4rem] lg:text-[1.2rem] font-bold capitalize">
            company served
          </h3>
        </div>

        {/* ========================================================================== */}
        {/* completed project */}
        <div className="border-2 rounded-[15px] p-[2rem] lg:p-[1.3rem] flex items-center justify-center">
          <h2
            className={`${
              isDay ? " text-[#ffd700]" : "text-[#0000ff] "
            } w-[30%] text-[2.2rem] lg:text-[2rem] font-extrabold`}
          >
            0 +
          </h2>
          <h3 className="w-[45%] text-[1.4rem] lg:text-[1.2rem] font-bold capitalize">
            completed project
          </h3>
        </div>

        {/* ========================================================================== */}
        {/* satisfied client */}
        <div className="border-2 rounded-[15px] p-[2rem] lg:p-[1.3rem] flex items-center justify-center">
          <h2
            className={`${
              isDay ? " text-[#ffd700]" : "text-[#0000ff] "
            } w-[30%] text-[2.2rem] lg:text-[2rem] font-extrabold`}
          >
            0 +
          </h2>
          <h3 className="w-[45%] text-[1.4rem] lg:text-[1.2rem] font-bold capitalize ">
            satisfied client
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Roboto Slab", serif;
`;

export default Experience;
