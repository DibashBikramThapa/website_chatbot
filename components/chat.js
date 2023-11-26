import React, { useState, useEffect } from "react";
import sendMsg from "../api/openai";
import { Button} from "@material-tailwind/react";
import { FaUserAlt } from "react-icons/fa";

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
            if(data?.choices.length){
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
                return 'rounded-tl-lg '
            case 2:
                return 'rounded-tr-lg '
            case 3:
                return 'rounded-bl-lg '
            case 4:
                return 'rounded-br-lg '
            default:
                return 'rounded-lg '
        }

    }
    const getChatOutline = (role, forOutline=true,index)=>{
        if(forOutline){
            var chatOutline = 'flex flex-col justify-center mb-5 '
            role == 'user' ?
                    chatOutline += 'items-start':
                    chatOutline += 'items-end'
        }
        else{
            var chatOutline= 'py-2 px-8 border-[.1rem] break-words '
            role == 'user'?
            chatOutline +='bg-white mr-5 ':
            chatOutline +='bg-blue-700'
        }
        return chatOutline
    }

    const UpdatedUserInput = ()=>{
        return (
            <>
                {chatLog.length && chatLog.map((each,index)=>
                    <div  key={index} className={getChatOutline(each.role,true,index)}>
                        <div className="flex gap-5 items-center">
                        {each.role=='user'?
                            <span className="rounded-full border-2 p-2 text-blue-700"> <FaUserAlt className="text-xl "/></span>:
                            <span className="rounded-full border-2 p-2 order-last mr-5 text-blue-700"><img src='' alt='Icon'/></span>
                             }
                            <div className={getChatBorder(index) + getChatOutline(each.role,false,index) + ' text-xl text-black'}>
                                {each.content}
                            </div>
                        </div>
                    </div>
                )}
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
        <div className="pt-20 grid justify-items-end align-items-end">
            {/* <Button
                onClick={clearChat}
                className="bg-red-600 text-white">Clear Chat?
            </Button> */}

            <div className="text-blue-700 mt-5 pt-5 pl-[2rem] h-[25rem] sm:h-[25rem] md:h-[25rem] italic astro-scrollbar overflow-y-auto w-full">
                {chatLog.length ?
                    <UpdatedUserInput/>
                    :
                    <p className="text-xl">Begin Chat?
                    </p>
                }
            </div>
        </div>
    )
}
