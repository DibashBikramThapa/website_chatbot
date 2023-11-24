import React from 'react'
import {Button,} from "@material-tailwind/react";
import Link from 'next/link';


export default function hero() {
  return (
      <div className='flex flex-col md:relative'>
        <div className='md:absolute bg-black md:bg-opacity-40  w-full lg:h-[43rem] md:h-[30rem] flex justify-center'>
          <div className='w-[30rem] p-5 mt-5'>
            <h2 className='text-white text-3xl'>One-stop shop for business setup and support services in Saudi Arabia and the UAE,
              powered by ChatGPT.
            </h2>
            <p className='pt-5 text-white'>
              Get started today
            </p>
          </div>
        </div>
        <div className="md:absolute flex flex justify-end w-full md:h-[30rem] items-center place-content-center">
          <Link href="/chat-al">
            <Button className="md:transform md:rotate-[-90deg] p-5 hover:p-7 text-xl md:translate-x-10">Try ChatGPT-AL
            </Button>
          </Link>
        </div>
        <img className='order-first md:order-last w-full lg:h-[43rem] md:h-[30rem]' src={'/images/uae.webp'}/>
      </div>
  )
}
