import React from "react";
import styled from "styled-components";

// ==================================================================
// Image imports
// ==================================================================
import email from "../../assets/Contact_img/gmail_logo.png";
import github from "../../assets/Contact_img/github_logo.png";
import faceBook from "../../assets/Contact_img/facebook_logo.jpg";
import linkedIn from "../../assets/Contact_img/linkedIn_logo.png";

const SocialIcons = () => {
  return (
    <Wrapper className="hidden lg:block w-[15%]">
      <div className="flex justify-evenly items-center  h-full">
        <a href="" referrerPolicy="no-referrer">
          <img src={github} alt="Github" className="w-[25px] object-cover" />
        </a>
        <a href="" referrerPolicy="no-referrer">
          <img
            src={faceBook}
            alt="Facebook"
            className="w-[30px] object-cover"
          />
        </a>
        <a href="" referrerPolicy="no-referrer">
          <img
            src={linkedIn}
            alt="linkedIn"
            className="w-[30px] object-cover"
          />
        </a>
        <a href="" referrerPolicy="no-referrer">
          <img src={email} alt="Email" className="w-[30px] object-cover" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SocialIcons;
