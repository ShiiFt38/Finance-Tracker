import React from 'react'
import LeftArrow from '../assets/arrow-left-solid.svg'
import { useNavigate } from 'react-router-dom'
import { useAccentColor } from '../Context/AccentColorContext';
import Orb from '../Components/Orb';
import transactionIcon from '../assets/transaction.png'
import budgetIcon from '../assets/budget.png'
import Reportsicon from '../assets/Reports.png'

const Settings = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    const { accentColor, setAccentColor } = useAccentColor();

    const handleColorChange = (color) => {
        setAccentColor(color);
        }

    const accentColorOptions = [
        {name: 'Blue', color: 'bg-blue-600'},
        {name: 'Red', color: 'bg-red-500'},
        {name: 'Purple', color: 'bg-purple-600'},
        {name: 'Black', color: 'bg-black'},
        {name: 'Yellow', color: 'bg-yellow-400'},
        {name: 'Green', color: 'bg-green-500'}]

const optionStyles ='flex py-[8px] flex space-between w-[90%] mx-auto bg-gray-300 rounded-[5px] px-[5px]';


  return (
    <>
        <header className="flex bg-white flex-row mx-auto gap-[50px] sm:pl-[30px] md:pl-[80px] min-h-[65px] border-b [border-bottom-style:solid] border-[#e5e8ea]">
            <div className='mr-auto'>
                <img src={LeftArrow} onClick={handleClick} alt="back button" className='w-[26px] h-[24px] mt-[20px] mx-auto cursor-pointer' />
            </div>
            <div className="md:items-start sm:place-items-center self-stretch w-full m-auto">
              <h1 className="font-bold sm:text-[18px] md:text-[22px]">Settings</h1>
            </div>
        </header>

        <main className='w-full h-full flex flex-col flex-1'>
            <Orb/>
            <Orb/>

            {/* Accent color option */}
            <div className='flex flex-col sm:w-[90%] md:w-[75%] mx-auto'>
                <div className='bg-gray-600 flex sm:px-[10px] md:px-[50px] py-[8px] rounded-[5px] mt-[35px]'>
                    <p className='font-bold text-[14px] text-white'>Accent Color</p>
                </div>
                <div className='bg-gray-100 gap-[20px] font-bold w-[95%] h-fit py-[30px] mx-auto flex flex-col'>
                    {accentColorOptions.map(option => {
                            return (<div className={optionStyles}>
                            <div className={`rounded-[50%] w-[33px] h-[33px] mx-[20px] ${option.color}`}></div>
                            <p>{option.name}</p>
                            <div className='ml-auto mx-[35px] h-6 w-6 cursor-pointer rounded-xl'>
                                <input type='radio' name='accentColor' value={option.name} checked={accentColor === option.color} onChange={() => handleColorChange(option.color)} className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md`}>
                                </input>
                            </div>
                        </div>)
                    })}


                </div>
            </div>

            {/* Dashboard settings */}
            <div className='flex flex-col sm:w-[90%] md:w-[75%] mx-auto'>
                <div className='bg-gray-600 flex sm:px-[10px] md:px-[50px] py-[8px] rounded-[5px] mt-[35px]'>
                    <p className='font-bold text-[14px] text-white'>Edit Dashboard</p>
                </div>
                <div className='bg-gray-100 gap-[20px] font-bold w-[95%] h-fit py-[30px] mx-auto flex flex-col'>

                <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px]'><img src={transactionIcon} alt="transaction" /></div>
                        <p>Transactions</p>
                        <div className='ml-auto mx-[35px] h-6 w-6 cursor-pointer rounded-xl'>
                            <input type='checkbox' className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                </div>

                <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px]'><img src={budgetIcon} alt="budget" /></div>
                        <p>Budgets</p>
                        <div className='ml-auto mx-[35px] h-6 w-6 cursor-pointer rounded-xl'>
                            <input type='checkbox' className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                </div>

                <div className={optionStyles}>
                        <div className='rounded-[50%] w-[33px] h-[33px] mx-[20px]'><img src={Reportsicon} alt="budget" /></div>
                        <p>Custom Reports</p>
                        <div className='ml-auto mx-[35px] h-6 w-6 cursor-pointer rounded-xl'>
                            <input type='checkbox' className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md`}>
                            </input>
                        </div>
                </div>

                </div>
            </div>

            <div className='flex flex-col sm:w-[90%] mb-[50px] md:w-[75%] mx-auto'>
                <div className='bg-gray-600 flex sm:px-[10px] md:px-[50px] py-[8px] rounded-[5px] mt-[35px]'>
                    <p className='font-bold text-[14px] text-white'>Notifications</p>
                    <input type='checkbox' className={`bg-black ml-auto md:w-6 md:h-6 h-5 w-5 rounded-full my-auto shadow-md`}>
                            </input>
                </div>
                
            </div>

        </main>
    </>
  );
};

export default Settings;