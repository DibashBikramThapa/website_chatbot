import React, { useState } from "react";


export default function input({user_date, getUserInput}) {

  const [text, setText] = useState('');

  const handleTextChange = (e)=>{
    setText(e.target.value)
  }

  const returntUserInput = ()=>{
    getUserInput(text)
    setText('')
  }


  return (
    <div className="mt-1 bg-astro text-white sm:w-[40rem] lg:w-[55rem] w-[20rem]">
        <div className="content flex justify-between">
            <textarea
               value={text}
                onChange={handleTextChange}
                placeholder="Yes, let’s begin."
                className="p-2 w-[8rem] md:w-[35rem] focus:ring-blue-600 astro-scrollbar"
                type='text'
            />
              <button
                onClick={returntUserInput}
                className='p-3 bg-blue-800 hover:bg-purple-800'
                data-te-toggle="tooltip"
                title="Click to chat!"
              >
                <img className='' src={'/images/astro-enter.png'}/>
              </button>
        </div>
    </div>
  )
}
