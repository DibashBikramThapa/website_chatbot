import React, { useState } from "react";

import {Button } from "@material-tailwind/react";

import Head from 'next/head';
import Layout from '../components/layout';
import Navbar from "../components/navbar";
import Chat from '../components/chat';
import Input from '../components/input';


export default function ChatAl() {

    const [user_input, settUserInput] = useState('');
    const [wait_gpt, setWaitGPT] = useState(false);
    const [show_greeting, setshow_greeting] = useState(false);

    const getUserInput = (text)=>{
        settUserInput(text)
        setWaitGPT(true)
        setshow_greeting(true)
    }

    const getChatLog = (resp_data)=>{
        if(resp_data?.role =='system')setWaitGPT(false)
        if(resp_data?.error) setWaitGPT(false)
    }

    return (
    <>
        <Head>
            <title>AI Consultancy</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Navbar for_chat={true}/> */}
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-11/12 bg-white p-2 flex items-center rounded" style={{"boxShadow":"0px 0px 28px -3px #6177E1"}}>
            <img src={"/images/LogoText.svg"} alt="arnifiLogo" className="ml-4"/><span className="font-semibold text-3xl mx-2 text-[#3955D9]">Labs</span>
        </div>
        <div className="h-[100vh] w-full my-auto bg-[#EBEEFB] p-4">
            <div className="md:px-[5rem] lg:px-[10rem] px-[2rem] fixed inset-x-0 bottom-0 flex flex-col justify-center items-center">
                {!show_greeting ? (
                    <div className="flex flex-col justify-center items-center" >
                        <img src={"../images/Logo.svg"} alt="arnifiLogo" />
                        <p className="text-xl font-semibold text-[#0C0048]">How Can I help you today ?</p>
                        <p className="text-[#9E99B6]">Here are few sample questions you can ask to arnifi labs</p>
                    </div>
                ): <></>}
                <Chat user_input={user_input} getChatLog={getChatLog} getUserInput={getUserInput}/>
                <Input getUserInput={getUserInput} wait_gpt={wait_gpt}/>
            </div>
        </div>
    </>
    )
}
