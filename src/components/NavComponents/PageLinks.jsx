import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// ==================================================================
// React Icons
// ==================================================================
import { WiDayCloudy } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
import { SiLinuxserver } from "react-icons/si";
import { IoClose, IoGrid } from "react-icons/io5";
import { FaAddressBook, FaHeadphonesAlt, FaHome } from "react-icons/fa";

// ==================================================================
// Stored Theme function
// ==================================================================
const StorageTheme = () => {
  let theme = "night";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

// =====================================================================
// slice reducer
// ======================================================================
import { themeValue, closeSideBar } from "../../utils/features/navSlice";

const PageLinks = () => {
  const dispatch = useDispatch();
  const [Theme, setTheme] = useState(StorageTheme());
  const { isDay, isSideBar } = useSelector((store) => store.navBar);

  const toggleTheme = () => {
    const newTheme = Theme === "day" ? "night" : "day";
    setTheme(newTheme);
    dispatch(themeValue(newTheme === "day"));
  };

  useEffect(() => {
    document.documentElement.className = Theme;
    localStorage.setItem("theme", Theme);
  }, [Theme]);

  return (
    <Wrapper className="lg:hidden">
      <div
        className={`${
          isDay ? "bg-white " : "bg-black text-white"
        }   absolute  top-[7%] right-[-5%] w-[85%] h-[98vh] rounded-b-l-[1rem] rounded-l-[1rem] overflow-hidden border-2 border-gray-300 shadow-lg transition duration-700 ease-in-out transform  ${
          isSideBar ? "translate-x-[10px]" : "translate-x-[120%]"
        }`}
      >
        <ul className="flex flex-col h-full p-[1.5rem]">
          <button
            className="h-[4%] flex justify-end items-center  md:pr-[2rem]"
            onClick={() => dispatch(closeSideBar())}
          >
            <IoClose className="font-extrabold text-[1.5rem] cursor-pointer hover:text-red-600" />
          </button>

          <li>
            <NavLink
              to={"/"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.21em] py-[1rem] group md:text-[1.35rem]"
              }
            >
              <FaHome
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              />
              <h4
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              >
                Home
              </h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/about"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.21em] py-[1rem] group md:text-[1.35rem]"
              }
            >
              <FaAddressBook
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              />
              <h4
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              >
                About
              </h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/projects"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.21em] py-[1rem] group md:text-[1.35rem]"
              }
            >
              <SiLinuxserver
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              />
              <h4
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              >
                Projects
              </h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/admin-Dashboard"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.3em] py-[1rem] group"
              }
            >
              <IoGrid
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              />
              <h4
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              >
                DashBoard
              </h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/contact"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.21em] py-[1rem] group md:text-[1.35rem]"
              }
            >
              <FaHeadphonesAlt
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              />
              <h4
                className={`${
                  isDay
                    ? "group-hover:text-gray-500"
                    : "group-hover:text-blue-500"
                }`}
              >
                Contact Us
              </h4>
            </NavLink>
          </li>

          <div
            onClick={toggleTheme}
            className="flex items-center gap-[0.5rem] cursor-pointer font-bold text-[1.21em] py-[0.5rem] md:text-[1.4rem]"
          >
            <h2>{isDay ? "Day" : "Night"}</h2>
            {isDay ? (
              <WiDayCloudy className="text-[1.8rem]" />
            ) : (
              <GiNightSleep className="text-[1.4rem]" />
            )}
          </div>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PageLinks;
