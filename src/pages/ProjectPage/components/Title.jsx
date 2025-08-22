import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper>
      <h3
        className={`
        
        text-[1.7rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold text-center py-[1rem] lg:py-[0rem] uppercase text-shadow-2xs
        
        ${
          isDay
            ? "text-[#ffc000] text-shadow-[2px_2px_6px_red]"
            : "text-[#c04000] text-shadow-[1px_1px_3px_blue]"
        }`}
      >
        My Projects
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Title;
