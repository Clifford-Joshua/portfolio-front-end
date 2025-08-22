import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";

import { toggleModal } from "../../../utils/features/contentSlice";

const AddProject = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="flex justify-end items-center">
        <button
          className="flex items-center justify-center gap-[0.5rem] cursor-pointer py-[0.4rem] px-[1.2rem] rounded-[8px] font-bold  bg-cyan-500 shadow-lg shadow-cyan-500/50 capitalize text-white hover:bg-cyan-600 transition-all duration-300"
          onClick={() => dispatch(toggleModal())}
        >
          <IoMdAdd className="text-[1rem] md:text-[1.1rem] " />
          <h2 className="text-[0.9rem] md:text-[1rem] py-[0.1rem]">
            add project
          </h2>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddProject;
