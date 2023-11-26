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

    const getUserInput = (text)=>{
        settUserInput(text)
        setWaitGPT(true)
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
        <Navbar/>
        <div className="md:px-[10rem] lg:px-[15rem] bg-blue-100">
            <Chat user_input={user_input} getChatLog={getChatLog}/>
            <Input getUserInput={getUserInput} wait_gpt={wait_gpt}/>
        </div>
    </>
    )
}
