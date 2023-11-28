import React, { useState, useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";


export default function input({getUserInput, wait_gpt}) {

  const [text, setText] = useState('');
  const [response_wait_gpt, setResponseWaitGPT] = useState(false);

  const handleTextChange = (e)=>{
    setText(e.target.value)
  }

  const returntUserInput = ()=>{
    if(text){
      getUserInput(text)
      setText('')
      setResponseWaitGPT(true)
    }
  }

  useEffect(() => {
    if(!wait_gpt) setResponseWaitGPT(false)
  }, [wait_gpt]);


  return (
    <div className="flex justify-between gap-4 items-end mt-[5rem] pb-2">
        <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Ask ChatGpt-AL your question..."
            className="p-4 w-full focus:ring-blue-700 astro-scrollbar"
            type='text'
            disabled={response_wait_gpt}

        />
          <button
            disabled={response_wait_gpt}
            onClick={returntUserInput}
            className={(response_wait_gpt)? 'text-blue-200 p-3' : 'text-blue-700 p-3 hover:text-blue-200'}
            data-te-toggle="tooltip"
            title="Click to chat!"
          >
            <FaCircleArrowRight className="text-5xl"/>
          </button>
    </div>
  )
}
