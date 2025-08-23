import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { LocalData } from "../../../utils/LocalData";

const Technology = () => {
  const { Tech_Img } = LocalData;
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="py-[1rem]">
      <div className="flex flex-col gap-[1rem]">
        <h2
          className={`font-bold text-[2.2rem] text-center md:text-[2.8rem] animate_color animate-pulse text-shadow-2xs   ${
            isDay ? "text-shadow-white" : "text-shadow-[1px_1px_4px_black]"
          }`}
        >
          Technology
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(78px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[0.8rem]  lg:p-[1rem] place-content-center place-items-center ">
          {Tech_Img.map((images, ind) => {
            return (
              <div
                className={`border-2 w-[100%] h-[80px] md:w-[100px] md:h-[100px] rounded-2xl flex items-center justify-center drop-shadow-gray-500     ${
                  isDay
                    ? "object-[70%_35%] shadow-[0_0_10px_white]"
                    : "shadow-[0_0_10px_black]"
                } `}
                style={{
                  background:
                    "linear-gradient(to left, #ff5f6d, #ff512f, #dd2476, #ffc371",
                }}
                key={ind}
              >
                <img
                  src={images}
                  alt="tech-img"
                  className="object-cover w-[90%] h-[90%] rounded-[10px] "
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Great Vibes", cursive;

  .animate_color {
    animation: animate_color 10s infinite linear;
  }

  @keyframes animate_color {
    0% {
      color: gray;
    }
    25% {
      color: blue;
    }
    50% {
      color: orange;
    }
    75% {
      color: purple;
    }
    100% {
      color: green;
    }
  }
`;

export default Technology;
