import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GiPolarStar } from "react-icons/gi";
import DayImage from "../../../assets/About_Img/Day_Profile_Picture.jpg";
import DataCalculation from "../../../utils/Functionality/DataCalculation";
import NightImage from "../../../assets/About_Img/Night_Profile_Picture.jpg";
const Article = () => {
  const refContainer = useRef();
  const [Height, setHeight] = useState(0);
  const { seconds, years, days } = DataCalculation();
  const { isDay } = useSelector((store) => store.navBar);
  const responsiveScreenSize = window.innerWidth >= 1024;

  useEffect(() => {
    const updateWidth = () => {
      const Height = refContainer.current.getBoundingClientRect().height;
      setHeight(Height);
    };

    updateWidth(); // run initially
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:gap-[2rem]">
        <div
          className="relative py-[2rem] md:w-[40%] md:py-[0]  lg:w-[30%]"
          style={{ height: responsiveScreenSize && `${Height + 5}px` }}
        >
          <GiPolarStar
            className={`absolute top-[-1%] left-[-8%] md:left-[-12%] md:top-[-8%] lg:top-[-7%] text-[5rem] 
                 ${isDay ? "text-gray-400" : "text-gray-600"}
                        `}
          />
          <img
            src={isDay ? DayImage : NightImage}
            alt="profile"
            className={`relative  h-[450px] w-[100%] object-cover rounded-[10px]  drop-shadow-gray-500  cursor-pointer md:w-[100%] md:h-[100%] 
          ${
            isDay
              ? "object-[70%_35%] shadow-[0_0_10px_white]"
              : "shadow-[0_0_10px_black]"
          } 
          
          `}
          />
        </div>

        <article
          className="flex flex-col  gap-[0.5rem] md:w-[60%] md:justify-between lg:justify-normal lg:gap-[2rem]  lg:w-[70%]"
          ref={refContainer}
        >
          <h1
            className={` uppercase text-[2.2rem] lg:text-[2.4rem] font-bold ${
              isDay ? "text-gray-400" : "text-gray-600"
            } `}
          >
            about me
          </h1>

          <p
            className={`capitalize font-bold  text-[1.15rem] lg:text-[1.4rem] ${
              isDay ? "text-gray-400" : "text-gray-600"
            }`}
          >
            hey!.........
          </p>

          <h2
            className={`capitalize font-bold text-[1.1rem] lg:text-[1.3rem] ${
              isDay ? "text-gray-400" : "text-gray-600"
            }`}
          >
            this chukwudera joshua
          </h2>

          <p className="text-[1rem] lg:text-[1.2rem]">
            I'm a creative and results-driven front-end developer with a strong
            focus on React.js. With proficiency in HTML, CSS, and JavaScript, I
            am skilled at creating seamless, responsive, and user-friendly
            interfaces. My ability to quickly learn new technologies and solve
            complex problems allows me to adapt to the fast-evolving tech
            landscape. I am open to opportunities and collaborations that aim to
            leverage technology to make a meaningful impact on the world.
          </p>

          <p className="capitalize lg:text-[1.2rem]">
            i've been working with web technologies and studying for
            <span
              className={`font-bold  drop-shadow-sm
                
                ${isDay ? "text-emerald-400" : "text-emerald-700"}
                
                `}
            >
              {" "}
              {`${years} years `}{" "}
            </span>
            ,
            <span
              className={`font-bold  drop-shadow-sm
                
                ${isDay ? "text-sky-400" : "text-sky-700"}
                
                `}
            >
              {" "}
              {` ${days} days`}{" "}
            </span>
            ,
            <span
              className={`font-bold  drop-shadow-sm
                
                ${isDay ? "text-pink-400" : "text-pink-700"}
                
                `}
            >
              {" "}
              {`${seconds} `}{" "}
            </span>
          </p>

          <p className="capitalize lg:text-[1.2rem]">
            during those period i've gain hands-on experience with developing
            full-stack web applications
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Article;
