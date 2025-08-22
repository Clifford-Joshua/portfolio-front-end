import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../../utils/features/contentSlice";
import { toast } from "react-toastify";

// ==============================================================
// api url
const url = import.meta.env.VITE_PROJECT_API_DEPLOYED_URL;

const Form = () => {
  const dispatch = useDispatch();
  const [imageValue, setImageValue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveLink: "",
    techStack: "",
  });

  const token = localStorage.getItem("token");

  // ======================================================================================
  // upload Image functionality
  const uploadImage = async (e) => {
    const imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        `${url}/projects/uploads`,

        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        toast.error("No file uploaded");
        return;
      }

      const {
        image: { src },
      } = await res.json();

      setImageValue(src);
    } catch (error) {
      setImageValue(null);
      console.log(error);
    }
  };

  // ======================================================================================
  // onChange functionality
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ======================================================================================
  // submit functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.description ||
      !formData.title ||
      !formData.liveLink ||
      !imageValue
    ) {
      toast.error("please fill out all field");
      return;
    }

    const payLoad = { ...formData, img: imageValue };

    try {
      if (!token) {
        toast.error("Access denied. Authentication token missing.");
        return;
      }

      const res = await fetch(`${url}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payLoad),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg);
      }

      toast.success("projected created successfully");
      setFormData({
        title: "",
        description: "",
        liveLink: "",
      });
      dispatch(toggleModal());
      window.location.reload();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Wrapper className="absolute top-0 left-0 h-[100vh] overflow-y-auto w-[100%] bg-[#000000b5] z-[999] flex flex-col items-center justify-center">
      {/* ====================================================================== */}
      {/* Form */}
      <div className="flex items-center justify-center w-[95%] md:w-[80%]   bg-white p-[1rem] md:p-[2rem] ">
        <div className="flex flex-col gap-[1rem] h-[100%] w-[100%] lg:w-[50%]">
          <div className="flex items-center justify-between">
            <h2 className="uppercase md:h-[10vh]  flex items-center justify-center font-bold text-[1.5rem] md:text-[2rem] w-[90%] text-center ">
              project form
            </h2>

            {/* ====================================================================== */}
            {/* close Modal */}
            <button
              className="text-red-600 text-[1.8rem] cursor-pointer"
              onClick={() => dispatch(toggleModal())}
            >
              <IoClose />
            </button>
          </div>

          <form className="flex flex-col gap-[1.5rem]" onSubmit={handleSubmit}>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.7rem] md:p-[0.8rem] text-[0.9rem] md:text-[1rem] rounded-[10px] "
              placeholder="project title"
            />

            <input
              name="techStack"
              type="text"
              value={formData.techStack}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.7rem] md:p-[0.8rem] text-[0.9rem] md:text-[1rem] rounded-[10px] "
              placeholder="tech stack used"
            />

            <input
              name="liveLink"
              type="text"
              value={formData.liveLink}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.7rem] md:p-[0.8rem] text-[0.9rem] md:text-[1rem] rounded-[10px]"
              placeholder="liveLink"
            />

            <input
              type="file"
              accept="image/*"
              onChange={uploadImage}
              className="border w-full p-[0.5rem] md:p-[0.7rem] text-[0.9rem] md:text-[1rem] rounded-[10px]"
            />

            <textarea
              name="description"
              type="text"
              value={formData.description}
              onChange={(e) => handleChange(e)}
              className="border w-full p-[0.6rem] h-[20vh] md:p-[0.8rem] text-[0.9rem] md:text-[1rem] rounded-[10px] "
              placeholder="Tell us more about your project"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-[0.5rem] md:text-[1.3rem] w-full h-[40px] md:h-[50px] bg-blue-500 cursor-pointer text-white font-bold capitalize rounded-[8px] shadow-[0_0_10px_gray] hover:bg-blue-600 transition-all duration-300"
            >
              <h1>add project</h1>
              <MdArrowOutward />
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #000000b5;
`;

export default Form;
