import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Faqs = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="py-[1rem]">
      <div>
        <h3 className="font-bold text-[1.5rem] lg:text-[1.8rem] uppercase">
          Faqs
        </h3>
        <p
          className={` text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] ${
            isDay ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Everything you need to know about the product and billing.Can't find
          the answer you're looking for? please message me.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default Faqs;
