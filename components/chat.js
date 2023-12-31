import React, { useState, useEffect } from "react";
import Link from "next/link";

import queryKnowledgeBase from "../api/openai";

import { FaUserAlt } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { Button } from "@material-tailwind/react";

export default function hero({ user_input, getChatLog, getUserInput }) {
  const [chatLog, setchatLog] = useState([]);
  const [eg_query] = useState([
    { title: "What services do you offer for business setup?" },
    { title: "Can you guide me through the process of setting up a company?" },
    {
      title: "Are there specific documents required during the setup process?",
    },
  ]);

  const handleUserInputChange = async () => {
    if (user_input) {
      const user_data = {
        content: user_input,
        role: "user",
      };
      setchatLog((oldArray) => [...oldArray, user_data]);
      const data = await queryKnowledgeBase(user_data, chatLog);
      if (data?.response?.answer?.length) {
        const resp_data = {
          content:
            data.response.answer +
            (data.response.sources && data.response.sources !== ""
              ? `<br><hr>Source: ${data.response.sources
                  .split(",")
                  .map(
                    (source) =>
                      `<a href='${source.trim()}' target='_blank'>${source.trim()}</a>`
                  )
                  .join("<br>")}`
              : ""),
          role: "system",
        };
        setchatLog((oldArray) => [...oldArray, resp_data]);
        getChatLog(resp_data);
      } else if (data?.error) {
        getChatLog({ error: data.error });
      }
    }
  };

  const getChatBorder = (index) => {
    const key = index % 5;
    switch (key) {
      case 1:
        return "rounded-tl-[2rem] ";
      case 2:
        return "rounded-tr-[2rem] ";
      case 3:
        return "rounded-bl-[2rem] ";
      case 4:
        return "rounded-br-[2rem] ";
      default:
        return "rounded-[2rem] ";
    }
  };
  const getChatOutline = (role, forOutline = true) => {
    if (forOutline) {
      var chatOutline = "flex flex-col justify-center mb-5 ";
      role == "user"
        ? (chatOutline += "items-end")
        : (chatOutline += "items-start");
    } else {
      var chatOutline = "py-2 px-8 border-[.1rem] break-words ";
      role == "user"
        ? (chatOutline += "bg-white mr-5 ")
        : (chatOutline += "bg-blue-700 text-white ");
    }
    return chatOutline;
  };

  const getAIText = (content, index) => {
    return (
      <>
        {/* {content}{" "} */}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {chatLog.length - 1 == index ? (
          <div className="m-1 border-white p-1 border-2 w-[8rem] hover:bg-white hover:text-blue-700">
            <Link href="/contact-us">Contact Us!</Link>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  const UpdatedUserInput = () => {
    return (
      <>
        {chatLog.map((each, index) => (
          <div key={index} className={getChatOutline(each.role, true)}>
            <div className="flex gap-5 items-center">
              <div
                className={
                  getChatBorder(index) +
                  getChatOutline(each.role, false) +
                  " text-xl text-black"
                }
              >
                {each.role == "user"
                  ? each.content
                  : getAIText(each.content, index)}
              </div>
              {each.role == "user" ? (
                <span className="rounded-full border-2 p-2 text-blue-700 mr-5 ">
                  {" "}
                  <FaUserAlt className="text-xl " />
                </span>
              ) : (
                <span className="rounded-full border-2 p-2 order-first text-blue-700">
                  <RiOpenaiFill className="text-3xl" />
                  {/* <img src={'/images/gpt.png'} alt='Icon'/> */}
                </span>
              )}
            </div>
          </div>
        ))}
        {chatLog[chatLog.length - 1].role == "user" ? (
          <div className="flex gap-4 items-center">
            <span className="rounded-full border-2 p-2 order-first text-blue-700">
              {/* <img src={'/images/gpt.png'} alt='Icon'/> */}
              <RiOpenaiFill className="text-3xl" />
            </span>
            <svg className="ms-4 animate-[bounce_0.1s_infinite] w-2 h-1 p-1 bg-white" />
            <svg className="animate-[bounce_0.5s_infinite] w-2 h-1 p-1 bg-white" />
            <svg className="animate-[bounce_0.8s_infinite] w-2 h-1 p-1 bg-white" />
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  const clearChat = () => {
    setchatLog([]);
  };

  const handleEgQueryClick = (e) => {
    getUserInput(e.target.innerText);
  };

  useEffect(() => {
    handleUserInputChange();
  }, [user_input]);

  return (
    <div className="pt-20 w-full grid justify-items-end align-items-end">
      <div className="text-blue-700 mt-5 pt-5 italic astro-scrollbar overflow-y-auto w-full">
        {chatLog.length ? (
          <UpdatedUserInput />
        ) : (
          <>
            {/* <p className="self-center text-xl text-blue-700 font-bold mb-3">
              Some example questions you can ask AI Consultancy
            </p> */}
            <div className="flex justify-center gap-2 flex-col md:flex-row">
              {eg_query.map((each, index) => {
                return (
                  <Button
                    variant="text"
                    size="lg"
                    className="bg-white sm:mx-0 mx-4 text-[#0C0048] hover:bg-[#6177E1] hover:text-white hover:border-[#6177E1] border-2"
                    key={index}
                    style={{ textTransform: "none" }}
                    onClick={handleEgQueryClick}
                  >
                    {each.title}
                  </Button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
