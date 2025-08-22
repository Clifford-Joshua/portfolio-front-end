import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Quote, Article, Experience, Technology } from "./component";

const About = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper
      className={`pt-[5.5rem] md:pt-[7rem]  px-[1rem] pb-[3rem] md:px-[2rem] lg:px-[4rem] min-h-[100vh] flex flex-col justify-between  ${
        isDay ? "bg-black text-white" : "bg-slate-100"
      } `}
    >
      <div className="flex flex-col gap-[1rem] lg:gap-[2.5rem]">
        <Quote />

        <Article />

        <Technology />
        
        <Experience />

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default About;
