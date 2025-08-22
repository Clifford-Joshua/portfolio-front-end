import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Intro = () => {
  const { isDay } = useSelector((store) => store.navBar);

  return (
    <Wrapper className="lg:w-[50%]">
      <div className="flex flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="font-bold text-[1.25rem] md:text-[1.4rem]">
            Let's talk for your next project
          </h3>
          <p
            className={`${
              isDay ? "text-gray-300" : "text-gray-500"
            } text-[0.85rem] md:text-[1rem] font-[500]`}
          >
            Welcome! I’m glad you’re here. If you have any questions or just
            want to reach out, please feel free to send a message. I look
            forward to connecting with you!
          </p>
        </div>

        <article className="flex flex-col gap-[1.5rem]">
          {/* =================================================================== */}
          {/* Address */}
          <div className="flex  items-center gap-[0.7rem] cursor-grab">
            <div className="border-2 p-[0.6rem] rounded-[10px]">
              <IoLocationSharp className="text-[1.85rem]" />
            </div>

            <div className="flex flex-col">
              <h4 className="capitalize text-[0.95rem] md:text-[1.15rem]">
                address
              </h4>
              <p
                className={`${
                  isDay ? "text-gray-300" : "text-gray-500"
                } text-[0.8rem] md:text-[1rem] font-[500]`}
              >
                Assembles Of God Church at Akara Junction inside Gariki, Enugu
                State
              </p>
            </div>
          </div>

          {/* =================================================================== */}
          {/* email */}
          <div className="flex  items-center gap-[0.7rem] cursor-grab">
            <div className="border-2 p-[0.6rem] rounded-[10px]">
              <IoIosMail className="text-[1.85rem]" />
            </div>

            <div className="flex flex-col">
              <h4 className="capitalize text-[0.95rem] md:text-[1.15rem]">
                email address
              </h4>
              <p
                className={`${
                  isDay ? "text-gray-300" : "text-gray-500"
                } text-[0.8rem] md:text-[1rem] font-[500]`}
              >
                cliffordgb45@gmail.com
              </p>
            </div>
          </div>

          {/* =================================================================== */}
          {/* Phone number*/}
          <div className="flex  items-center gap-[0.7rem] cursor-grab">
            <div className="border-2 p-[0.6rem] rounded-[10px]">
              <IoCall className="text-[1.85rem]" />
            </div>

            <div className="flex flex-col">
              <h4 className="capitalize text-[0.95rem] md:text-[1.15rem]">
                phone number
              </h4>
              <p
                className={`${
                  isDay ? "text-gray-300" : "text-gray-500"
                } text-[0.8rem] md:text-[1rem] font-[500]`}
              >
                (+234) 816-548-7439
              </p>
            </div>
          </div>

          {/* =================================================================== */}
          {/* Whatsapp */}
          <div className="flex  items-center gap-[0.7rem] cursor-grab">
            <div className="border-2 p-[0.6rem] rounded-[10px]">
              <FaWhatsapp className="text-[1.85rem]" />
            </div>

            <div className="flex flex-col">
              <h4 className="capitalize text-[0.95rem] md:text-[1.15rem]">
                whatsapp number
              </h4>
              <p
                className={`${
                  isDay ? "text-gray-300" : "text-gray-500"
                } text-[0.8rem] md:text-[1rem] font-[500]`}
              >
                (+234) 816-342-8439
              </p>
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Intro;
