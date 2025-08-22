import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper>
      <h3
        className={`
        
        text-[1.7rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold text-center py-[1rem] lg:py-[0rem] uppercase 
        
        ${isDay ? "text-gray-400" : "text-gray-600"}`}
      >
        contact me
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Title;
