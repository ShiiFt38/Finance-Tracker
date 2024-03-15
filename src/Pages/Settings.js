import React from 'react'
// import { useState } from 'react';
import LeftArrow from '../assets/arrow-left-solid.svg'
import { useNavigate } from 'react-router-dom'
import DropDown from '../assets/caret-down-solid.svg'

const Settings = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

      
//   const [drawer, setDrawer] = useState([
//     { accentColor: false,
//       themeMode: false, 
//       editDashboard: false}
//   ])

//   const handleDropDown = () => {
//     setDrawer(prevState => ({
//       ...prevState,
//     }))
//   }

  return (
    <>
        <header className="relative flex flex-wrap bg-white sm:flex-col md:flex-row place-items-center justify-between mx-auto pl-[80px] [100%]  md:rounded-[10px] min-h-[65px] top-0 left-0 border-b [border-bottom-style:solid] border-[#e5e8ea]">        <div className="md:items-start sm:place-items-center self-stretch w-full m-auto">
              <h1 className="relative w-fit mt-[-1.00px] font-bold text-variable-collection-secondary-2 align-middle text-[18px] tracking-[-0.27px] leading-[22.5px] ">
                Settings
              </h1>
            </div>
        </header>

        <aside className='h-screen w-[72px] fixed absolute'>
            <img src={LeftArrow} onClick={handleClick} alt="back button" className='w-[26px] h-[24px] mt-[20px] mx-auto cursor-pointer' />
            
        </aside>
        <main className='pl-[80px] w-full h-full flex flex-1'>

            {/* Accent color option */}
            <div className='flex flex-col sm:w-[90%] md:w-[75%] mx-auto'>
                <div className='bg-gray-600 flex sm:px-[10px] md:px-[50px] py-[8px] rounded-[5px] mt-[35px]'>
                    <p className='font-bold text-[14px] text-white'>Accent Color</p>
                    <img className='ml-auto w-[30px] h-[20px]' src={DropDown} alt="more" />
                </div>
                <div className='bg-gray-100 gap-[20px] w-[95%] h-fit py-[30px] mx-auto flex flex-col'>
                    <div className='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]'><p>Dark Blue</p></div>
                    <div className='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]'><p>Dark Blue</p></div>
                    <div className='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]'><p>Dark Blue</p></div>
                    <div className='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]'><p>Dark Blue</p></div>
                    <div className='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]'><p>Dark Blue</p></div>
                </div>
            </div>

        </main>
    </>
  );
};

export default Settings;