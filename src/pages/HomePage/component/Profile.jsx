import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DayImage from "../../../assets/Home_Img/Day_Home.jpg";
import NightImage from "../../../assets/Home_Img/Night_Home.jpg";
const Profile = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="w-[100%] lg:w-[50%] flex items-center justify-center lg:h-[100%]">
      <img
        src={isDay ? NightImage : DayImage}
        alt="user"
        className={`h-[300px] w-[100%] object-cover rounded-[10px]  drop-shadow-gray-500  cursor-pointer md:w-[70%] md:h-[350px] lg:h-[100%] lg:w-[90%]
          ${
            isDay
              ? "object-[70%_35%] shadow-[0_0_10px_white]"
              : "shadow-[0_0_10px_black]"
          } 
          
          `}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Profile;
