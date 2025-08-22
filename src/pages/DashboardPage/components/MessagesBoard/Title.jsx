import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
const Title = () => {
  return (
    <Wrapper className="flex items-center gap-[0.5rem] justify-center h-[10vh] font-bold">
      <FaEnvelope className="text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] text-gray-600 " />
      <h2 className="text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] capitalize ">
        Admin messages
      </h2>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Title;
