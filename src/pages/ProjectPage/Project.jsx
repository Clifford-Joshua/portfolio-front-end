import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Title, MyWorks, AddProject, Form } from "./components";

const Project = () => {
  const { isDay } = useSelector((store) => store.navBar);
  const { isModal } = useSelector((store) => store.content);

  return (
    <Wrapper
      className={`pt-[5.5rem] md:pt-[7rem]  px-[1rem] pb-[3rem] md:px-[2rem] lg:px-[4rem] min-h-[100vh] flex flex-col justify-between relative  ${
        isDay ? "bg-black text-white" : "bg-slate-100"
      } `}
    >
      {isModal && <Form />}
      <div className="flex flex-col gap-[1rem] lg:gap-[2.6rem]">
        <Title />
        <AddProject />
        <MyWorks />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Project;
