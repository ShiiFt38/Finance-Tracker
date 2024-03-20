import React from 'react'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const navigate = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="flex flex-col place-items-center text-center bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className='font-bold text-[22px] mb-[20px]'>Take Note</h1>
        <p>You are now going to be redirected to the demo of the web app, some functions may not function as expected or at all.</p>
        <button onClick={() => {navigate('/Dashboard')}} className={`text-white mt-[30px] w-[200px] h-[30px] text-middle mx-auto bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none`}>Continue</button>

      </div>
    </div>
  )
}

export default Message