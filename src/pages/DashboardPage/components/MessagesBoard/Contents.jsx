/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader";

const url = import.meta.env.VITE_PROJECT_DEPLOYED_URL;

const Contents = () => {
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isDay } = useSelector((store) => store.navBar);

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      if (!token) {
        setIsError(true);
        setMsg("No token found. Please log in again.");
        return;
      }

      const res = await fetch(`${url}/contact/Messages`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMsg(data.msg);
        return;
      }

      setMessages(data.allMessages || []);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMsg("An error occurred while fetching messages");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (e) => {
    const id = e.currentTarget.getAttribute("data-id");

    const res = await fetch(`${url}/contact/deleteMessage/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    toast.error(data.msg);

    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="flex items-center justify-center">
          <h2 className="text-red-500 text-[1.5rem] font-bold">{msg}</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-[1rem]">
          {messages.map(({ name, subject, message, email, _id }, ind) => {
            /* ====================================================================== */
            /* Messages */

            return (
              <div
                className={`flex flex-col gap-[0.5rem] bg-white text-black border-1 border-gray-300 p-[1rem] rounded-lg 
            
             ${
               isDay
                 ? "object-[70%_35%] shadow-[0_0_10px_white]"
                 : "shadow-[0_0_10px_lightgray]"
             } 
            `}
                key={ind}
              >
                <h2 className="capitalize font-bold text-[1rem] lg:text-[1.3rem]">
                  {name}
                </h2>
                <p className="text-[0.9rem] lg:text-[1rem] text-gray-500">
                  {email}
                </p>
                <h3 className="font-bold text-[1rem] lg:text-[1.1rem] text-red-600 capitalize">
                  {subject}
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] text-gray-700">
                  {message}
                </p>

                <div>
                  <button
                    className="flex items-center justify-center gap-[0.5rem] cursor-pointer py-[0.4rem] px-[1.2rem] rounded-[8px] font-bold  bg-red-500 shadow-lg shadow-cyan-500/50 capitalize text-white hover:bg-red-700 transition-all duration-300"
                    data-id={`${_id}`}
                    onClick={handleDelete}
                  >
                    <h2 className="text-[0.9rem] md:text-[1rem] py-[0.1rem]">
                      delete
                    </h2>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Contents;
