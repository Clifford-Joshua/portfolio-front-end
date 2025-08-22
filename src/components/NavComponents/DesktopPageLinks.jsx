import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// ==================================================================
// React Icons
// ==================================================================
import { IoGrid } from "react-icons/io5";
import { WiDayCloudy } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
import { SiLinuxserver } from "react-icons/si";
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
import { themeValue } from "../../utils/features/navSlice";

const DesktopPageLinks = () => {
  const dispatch = useDispatch();
  const [Theme, setTheme] = useState(StorageTheme());
  const { isDay } = useSelector((store) => store.navBar);

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
    <Wrapper className="hidden lg:block lg:w-[70%]  h-full    overflow-x-hidden">
      <div
        className={`${isDay ? "bg-white " : "bg-black text-white"}  h-full `}
      >
        <ul className="flex flex-row h-full items-center justify-center gap-[1.5rem]">
          <li>
            <NavLink
              to={"/"}
              className={
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.3em] py-[1rem] group"
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
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.3em] py-[1rem] group"
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
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.3em] py-[1rem] group"
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
                "flex items-center  gap-[0.5rem] font-bold cursor-pointer text-[1.3em] py-[1rem] group"
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
            className="flex items-center justify-center gap-[0.5rem] cursor-pointer font-bold text-[1.3em]"
          >
            <h2>{isDay ? "Day" : "Night"}</h2>
            {isDay ? (
              <WiDayCloudy className="text-[1.5rem]" />
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

export default DesktopPageLinks;
