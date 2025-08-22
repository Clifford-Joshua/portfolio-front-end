import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-[200px] h-[200px] border-[10px] border-l-0 border-r-0 border-b-0 rounded-[50%] border-cyan-300 animate-spin"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Loader;
