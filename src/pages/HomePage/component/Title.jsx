import React from "react";
import styled from "styled-components";
import HireBtn from "../../../components/HireBtn";
import { useTypewriter } from "react-simple-typewriter";

const Title = () => {
  const [text] = useTypewriter({
    words: ["I’m Clifford Chukwudera — a passionate Full Stack Developer"],
    loop: 0,
  });

  return (
    <Wrapper className="lg:w-[50%] lg:h-[100%]">
      <div
        className={`capitalize  flex lg:flex-col items-center justify-center text-center gap-[1.5rem] lg:h-[100%]`}
      >
        <h1
          className={`text-[1.13rem] min-h-[80px] lg:min-h-[150px]  md:text-[1.3rem] lg:text-[2.4rem] font-bold flex items-center justify-center `}
        >
          <span>{text}</span>
        </h1>

        <p className="hidden lg:block text-[1.2rem]">
          I specialize in building dynamic, user-friendly web applications from
          front to back. Whether it's designing sleek interfaces or developing
          robust backend systems, I love turning ideas into functional,
          beautiful digital experiences.
        </p>

        <div className="hidden lg:flex w-full py-[1rem]">
          <HireBtn text={"Hire Me"} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Title;
