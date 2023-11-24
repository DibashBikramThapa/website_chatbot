import React, { useState, useEffect } from "react";
import sendMsg from "../api/openai";
import { Button} from "@material-tailwind/react";


export default function hero({user_input, user_date, reset_chat}) {

    const [chatLog, setchatLog] = useState([]);

    const handleUserInputChange = async()=>{
        if(user_input){
            const user_data={
                'content': user_input,
                'role':'user'
            }
            setchatLog( oldArray => [...oldArray,user_data]);
            const data = await sendMsg(user_date='', user_data, chatLog)
            if(data?.choices.length){
                const resp_data = {
                    'content': data.choices[0]['message']['content'],
                    'role': 'system',
                }
                setchatLog( oldArray => [...oldArray,resp_data]);
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
            var chatOutline = 'flex flex-col justify-center '
            role == 'user' ?
                    chatOutline += 'items-start':
                    chatOutline += 'items-end'
        }
        else{
            var chatOutline= 'mt-2 pl-4 pr-4  border-[.1rem] break-words '
            role == 'user'?
            chatOutline +='bg-indigo-300':
            chatOutline +='bg-blue-300'
        }
        return chatOutline
    }

    const UpdatedUserInput = ()=>{
        return (
            <>
                {chatLog.length && chatLog.map((each,index)=>
                    <div  key={index} className={getChatOutline(each.role,true,index)}>
                        <div className={getChatBorder(index) + getChatOutline(each.role,false,index)}>
                            {each.content}
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

      useEffect(() => {
        if (reset_chat) clearChat()
      }, [reset_chat]);


    return (
        <div className="bg-astro sm:w-[35rem] w-[20rem]">
            <div className="grid justify-items-end align-items-end bg-black">
                <Button
                    onClick={clearChat}
                    className="bg-red-600 text-white">Clear Chat?
                </Button>

                <div className="text-white pl-[2rem] h-[38rem] sm:h-[35rem] md:h-[20rem] italic astro-scrollbar overflow-y-auto w-full">
                    {chatLog.length ?
                        <UpdatedUserInput/>
                        :
                        <p>Begin Chat?
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}
