import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import { Title, Profile } from "./component";
import { FaSnowflake } from "react-icons/fa";
import HireBtn from "../../components/HireBtn";

const Home = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper
      className={`pt-[5.5rem] lg:pt-[7rem] px-[1rem] md:px-[2rem] lg:px-[4rem] h-[100vh] flex flex-col justify-between  ${
        isDay ? "bg-black text-white" : "bg-slate-100"
      } `}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly lg:h-[80%]">
        <Title />
        <Profile />
      </div>

      <div className="lg:hidden">
        <HireBtn text={"Hire Me"} />
      </div>

      <div className="flex flex-col items-end justify-center gap-[0.3rem] text-center p-[1rem] font-bold">
        <h1
          className={`text-[1.2rem] font-bold flex items-center gap-[0.5rem] `}
        >
          OPEN TO WORK
          <FaSnowflake className={isDay ? "text-gray-400" : "text-gray-600"} />
        </h1>
        <h2 className={isDay ? "text-gray-400" : "text-gray-600"}>
          Based in nigeria
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div``;

export default Home;
