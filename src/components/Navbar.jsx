import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// ==================================================================
// Navbar components
// ==================================================================
import {
  Logo,
  PageLinks,
  SocialIcons,
  DesktopPageLinks,
} from "./NavComponents";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDay } = useSelector((store) => store.navBar);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper
      className={`${
        isDay ? "bg-black" : "bg-slate-100"
      } w-full fixed top-0 left-0 z-50  px-[1rem] md:px-[2rem] lg:px-[4rem] ${
        isScrolled && "shadow-[0px_0px_8px_4px] shadow-gray-400 "
      }`}
    >
      <nav>
        <div
          className={`flex justify-between items-center lg:h-[11vh] h-[10vh]  relative lg:overflow-hidden`}
        >
          {/* =========================================================================================== */}
          {/* Logo */}
          <Logo />

          {/* =========================================================================================== */}
          {/* page links */}
          <PageLinks />
          <DesktopPageLinks />

          {/* =========================================================================================== */}
          {/* Social icons */}
          <SocialIcons />
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Navbar;
