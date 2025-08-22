import React from "react";
import styled from "styled-components";

import { Title, Contents } from "./MessagesBoard";

const Message = () => {
  return (
    <Wrapper>
      <div>
        <Title />
        <Contents />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
