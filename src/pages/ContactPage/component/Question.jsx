import React from "react";
import styled from "styled-components";
import { LocalData } from "../../../utils/LocalData";
import { useSelector } from "react-redux";

const Question = () => {
  const { FQA } = LocalData;
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="flex flex-col gap-[1.5rem] lg:gap-[2rem]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:gap-6">
        {FQA.map(({ answer, question }, ind) => {
          return (
            <div className="flex flex-col gap-[0.4rem]" key={ind}>
              <h2 className="font-bold text-[1.1rem] lg:text-[1.2rem]">
                {question}
              </h2>
              <p
                className={` text-[0.9rem] md:text-[1rem] lg:text-[0.95rem] ${
                  isDay ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {answer}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-2  bg-gray-900 p-[0.5rem] md:p-[1rem] lg:p-[1.5rem] lg:rounded-[15px] lg:flex lg:flex-col lg:gap-[0.5rem]">
        <h2 className="font-bold text-[1rem] text-white">
          Still have questions ?
        </h2>
        <p
          className={` text-[0.85rem] md:text-[1rem] 
             text-gray-400
          `}
        >
          Can't find the answer you're looking for ? Please message me.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Question;
