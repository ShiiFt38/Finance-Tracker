import React from 'react'
import LeftArrow from '../assets/arrow-left-solid.svg'
import { useNavigate } from 'react-router-dom'
import DropDown from '../assets/caret-down-solid.svg'
import { useAccentColor } from '../Context/AccentColorContext';

const Settings = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    const { accentColor, setAccentColor } = useAccentColor();

    const handleColorChange = (color) => {
        setAccentColor(color);
        }

const optionStyles ='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]';


  return (
    <>
        <header className="flex bg-white flex-row mx-auto gap-[50px] sm:pl-[30px] md:pl-[80px] min-h-[65px] border-b [border-bottom-style:solid] border-[#e5e8ea]">
            <div className='mr-auto'>
                <img src={LeftArrow} onClick={handleClick} alt="back button" className='w-[26px] h-[24px] mt-[20px] mx-auto cursor-pointer' />
            </div>
            <div className="md:items-start sm:place-items-center self-stretch w-full m-auto">
              <h1 className="font-bold text-[18px]">Settings</h1>
            </div>
        </header>

        <main className='w-full h-full flex flex-1'>

            {/* Accent color option */}
            <div className='flex flex-col sm:w-[90%] md:w-[75%] mx-auto'>
                <div className='bg-gray-600 flex sm:px-[10px] md:px-[50px] py-[8px] rounded-[5px] mt-[35px]'>
                    <p className='font-bold text-[14px] text-white'>Accent Color</p>
                    <img className='ml-auto w-[30px] h-[20px]' src={DropDown} alt="more" />
                </div>
                <div className='bg-gray-100 gap-[20px] font-bold w-[95%] h-fit py-[30px] mx-auto flex flex-col'>

                    <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px] bg-blue-600'></div>
                        <p>Dark Blue</p>
                        <div className='ml-auto mx-[35px] h-6 w-6 cursor-pointer rounded-xl'>
                            <input type='radio' name='accentColor' value='blue' checked={accentColor === 'bg-blue-600'} onChange={() => handleColorChange('bg-blue-600')} className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md transform duration-300 ease-in-out`}>
                            </input>
                        </div>
                    </div>

                    <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px] bg-red-500'></div>
                        <p>Red</p>
                        <div className='ml-auto mx-[35px] h-fit w-fit cursor-pointer rounded-xl'>
                            <input type='radio' name='accentColor' value='red' checked={accentColor === 'bg-red-500'}
                            onChange={() => handleColorChange('bg-red-500')} className={`bg-black md:w-6 md:h-6 h-5 m-auto w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                    </div>

                    <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px] bg-purple-600'></div>
                        <p>Purple</p>
                        <div className='ml-auto mx-[35px] h-fit w-fit cursor-pointer rounded-xl'>
                            <input type='radio' name='accentColor' value='purple' checked={accentColor === 'bg-purple-600'}
                            onChange={() => handleColorChange('bg-purple-600')} className={`bg-black md:w-6 md:h-6 h-5 m-auto w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                    </div>

                    <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px] bg-black'></div>
                        <p>Black</p>
                        <div className='ml-auto mx-[35px] h-fit w-fit cursor-pointer rounded-xl'>
                            <input type='radio' value='black' checked={accentColor === 'bg-black'} 
                            onChange={() => setAccentColor('bg-black')} name='accentColor' className={`bg-black md:w-6 md:h-6 h-5 m-auto w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    </>
  );
};

export default Settings;