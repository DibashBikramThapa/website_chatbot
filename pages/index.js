import React, { useState } from "react";

import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Chat from '../components/chat';
import Input from '../components/input';
import Datepicker from '../components/datepicker';
import PopoverWithImage  from "../components/popover";

export default function Home() {

  const [user_input, settUserInput] = useState('');
  const [user_date, settUserDate] = useState('');
  const [reset_chat, setResetChat] = useState(false);

  const getUserInput = (text)=>{
    settUserInput(text)
  }

  return (
    <div className="min-w-[38rem]">
      <Head>
        <title>Website ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <PopoverWithImage setResetChat={setResetChat}>
            <Chat
              user_input= {user_input}
              user_date={user_date}
              reset_chat={reset_chat}
              />
            <Input
              user_date={user_date}
              getUserInput={getUserInput}
            />
            </PopoverWithImage>

          {/* <Datepicker
            settUserDate={settUserDate}
          /> */}
      </Layout>

    </div>
  );
}
