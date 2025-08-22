import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Quote = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper>
      <h3
        className={`
        
        text-[1.25rem] md:text-[1.45rem] lg:text-[1.8rem] font-bold text-center py-[1.5rem]
        
        ${isDay ? "text-gray-400" : "text-gray-600"}`}
      >
        <q>
          Addiction is anything that drains life of meaning while making it seem
          better.
        </q>
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Quote;
