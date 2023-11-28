import React, { useState, useEffect } from "react";
import Link from "next/link";

import sendMsg from "../api/openai";

import { FaUserAlt } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";


export default function hero({user_input, getChatLog}) {

    const [chatLog, setchatLog] = useState([]);

    const handleUserInputChange = async()=>{
        if(user_input){
            const user_data={
                'content': user_input,
                'role':'user'
            }
            setchatLog( oldArray => [...oldArray,user_data]);
            const data = await sendMsg(user_data, chatLog)
            if(data?.choices?.length){
                const resp_data = {
                    'content': data.choices[0]['message']['content'],
                    'role': 'system',
                }
                setchatLog( oldArray => [...oldArray,resp_data]);
                getChatLog(resp_data)
            }else if(data?.error){
                getChatLog({'error': data.error})
            }
        }
    }

    const getChatBorder = (index)=>{
        const key=index%5
        switch(key){
            case 1:
                return 'rounded-tl-[2rem] '
            case 2:
                return 'rounded-tr-[2rem] '
            case 3:
                return 'rounded-bl-[2rem] '
            case 4:
                return 'rounded-br-[2rem] '
            default:
                return 'rounded-[2rem] '
        }

    }
    const getChatOutline = (role, forOutline=true)=>{
        if(forOutline){
            var chatOutline = 'flex flex-col justify-center mb-5 '
            role == 'user' ?
                    chatOutline += 'items-end':
                    chatOutline += 'items-start'
        }
        else{
            var chatOutline= 'py-2 px-8 border-[.1rem] break-words '
            role == 'user'?
            chatOutline +='bg-white mr-5 ':
            chatOutline +='bg-blue-700 text-white '
        }
        return chatOutline
    }

    const getAIText = (content, index)=>{
        return(
            <>
                {content} {chatLog.length-1 == index ? <div className="m-1 border-white p-1 border-2 w-[8rem] hover:bg-white hover:text-blue-700">
                    <Link href='/contact-us'>Contact Us!</Link></div> : '' }
            </>
        )
    }

    const UpdatedUserInput = ()=>{
        return (
            <>
                { chatLog.map((each,index)=>
                    <div  key={index} className={getChatOutline(each.role,true)}>
                        <div className="flex gap-5 items-center">
                            <div className={getChatBorder(index) + getChatOutline(each.role,false) + ' text-xl text-black'}>
                                { each.role=='user'? each.content : getAIText(each.content, index)}
                            </div>
                            {each.role=='user'?
                                <span className="rounded-full border-2 p-2 text-blue-700 mr-5 "> <FaUserAlt className="text-xl "/></span>:
                                <span className="rounded-full border-2 p-2 order-first text-blue-700">
                                    <RiOpenaiFill className="text-3xl"/>
                                    {/* <img src={'/images/gpt.png'} alt='Icon'/> */}
                                </span>
                             }
                        </div>
                    </div>
                )}
                {chatLog[chatLog.length-1].role=='user' ?
                <div className="flex gap-4 items-center">
                    <span className="rounded-full border-2 p-2 order-first text-blue-700">
                    {/* <img src={'/images/gpt.png'} alt='Icon'/> */}
                        <RiOpenaiFill className="text-3xl"/>
                    </span>
                    <svg class="ms-4 animate-[bounce_0.1s_infinite] w-2 h-1 p-1 bg-white"/>
                    <svg class="animate-[bounce_0.4s_infinite] w-2 h-1 p-1 bg-white"/>
                    <svg class="animate-[bounce_0.6s_infinite] w-2 h-1 p-1 bg-white"/>
                </div>
                 : ''}
            </>
        )
    }

    const clearChat =()=>{
        setchatLog([])
    }

    useEffect(() => {
        handleUserInputChange()
      }, [user_input]);

    return (
        <div className="pt-20 grid justify-items-end align-items-end h-[100%]">
            {/* <Button
                onClick={clearChat}
                className="bg-red-600 text-white">Clear Chat?
            </Button> */}

            <div className="text-blue-700 mt-5 pt-5 h-[25rem] sm:h-[30rem] md:h-[34rem] italic astro-scrollbar overflow-y-auto w-full">
                {chatLog.length ?
                    <UpdatedUserInput/>
                    :
                    <p className="text-xl text-white font-bold">Begin Chat?
                    </p>
                }
            </div>
        </div>
    )
}
