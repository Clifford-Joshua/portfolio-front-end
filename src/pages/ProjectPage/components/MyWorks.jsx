import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Loader from "../../../components/Loader";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// ==============================================================
// api url
const url = import.meta.env.VITE_PROJECT_API_DEPLOYED_URL;
const baseUrl = import.meta.env.VITE_PROJECT_DEPLOYED_URL;

const MyWorks = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`${url}/projects`);

      const { data } = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage("Failed To Fetch Project something went wrong");
        return;
      }

      if (data.length < 1) {
        setIsError(true);
        setMessage(`Sorry I don't have any current project`);
        return;
      }

      setData(data);
    } catch (error) {
      setIsError(true);
      console.log(error);

      setMessage("Internal server 500 , Service timeout");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Wrapper>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[2rem] md:items-stretch">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className="flex items-center justify-center">
            <h2 className="text-red-500 text-[1.5rem] font-bold">{message}</h2>
          </div>
        ) : (
          data.map(({ title, description, techStack, liveLink, img, _id }) => {
            /* ============================================================================== */
            /* navigate link */
            return (
              <a href={liveLink} referrerPolicy="no-referrer" key={_id}>
                <div className=" relative overflow-hidden rounded-[0.5rem] md:h-full  shadow-[0_0_10px_5px_gray] cursor-pointer group bg-white p-[0.5rem]  flex flex-col ">
                  {/* ============================================================================== */}
                  {/* dark background */}
                  <div className="w-[100%] h-[100%] absolute left-0 top-0 z-10 bg-[#000000ab] hidden group-hover:flex items-center justify-center gap-[0.5rem] text-[white] text-[1.2rem] cursor-pointer  transition ease-in-out duration-300 hover:text-blue-300">
                    <FaArrowUpRightFromSquare />
                    <h2>Visit Site</h2>
                  </div>

                  {/* ============================================================================== */}
                  {/* image*/}
                  <img
                    src={`${baseUrl}${img}`}
                    alt="project name"
                    className="w-[100%] h-[200px] lg:h-[250px] object-cover rounded-[0.5rem]  relative"
                  />

                  {/* ============================================================================== */}
                  {/* Project name */}
                  <div className="flex flex-col gap-[0.4rem] md:gap-[0.2rem] pt-[0.5rem]">
                    <h2 className="text-blue-700 font-bold text-[1.1rem] md:text-[1rem]">
                      {title}
                    </h2>

                    <h3 className="text-[0.8rem] font-bold md:text-[0.75rem] lg:text-[0.7rem] text-black">
                      {techStack}
                    </h3>

                    <p className="text-[0.8rem] md:text-[0.75rem] lg:text-[0.7rem]">
                      {description}
                    </p>
                  </div>

                  <div className="py-[1rem] mt-auto">
                    <button className="flex items-center w-[100%] justify-center gap-[0.5rem] cursor-pointer py-[0.4rem] px-[1.2rem] rounded-[8px] font-bold  bg-red-500 shadow-lg shadow-cyan-500/50 capitalize text-white hover:bg-red-700 transition-all duration-300">
                      <h2 className="text-[0.9rem] md:text-[1rem] py-[0.1rem]">
                        delete
                      </h2>
                    </button>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #555454a7;
`;

export default MyWorks;
