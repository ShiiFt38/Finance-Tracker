import React, { useState } from 'react'
import Homeicon from '../assets/Home.png';
import Transactionicon from '../assets/transaction.png'
import Budgetsicon from '../assets/budget.png';
import Goalsicon from '../assets/Goals.png';
import Reportsicon from '../assets/Reports.png'
import Settingsicon from  "../assets/Settings.png";
import Helpicon from '../assets/Help.png';
import Logout from '../assets/right-from-bracket-solid.svg'

const Dashside = () => {
    const [open, setOpen] = useState(false)

    const Menus = [
        {name: "Dashboard", icon: Homeicon, alt: "home"},
        {name: "Transactions", icon:Transactionicon, alt: "transaction"},
        {name: "Budgets", icon: Budgetsicon, alt: "Budget" },
        {name: "Goals", icon: Goalsicon, alt: "Goals"},
        {name: "Reports", icon: Reportsicon, alt: "Reports"}
    ];

  return (
    <aside className={`absolute z-40 bg-white h-screen transition-all overflow-hidden duration-1000ms ease-in ${open ? 'w-[220px]' : 'w-[75px]'}`}>
        <nav className='h-full flex flex-col space-y-3 pt-5 px-5 border-r shadow-sm'>
            <div>

                {open ? <img src="./images/angle-left-solid.svg" className='w-[17px] h-[30px] cursor-pointer' alt="open menu" onClick={() => {setOpen(!open)}}></img> : <img src="./images/angle-right-solid.svg" className='w-[17px] h-[30px] mx-auto cursor-pointer' alt="close menu" onClick={() => {setOpen(!open)}}></img>}

                {Menus.map(menu => {
                    return (
                        <div key={menu.name} className={`flex px-2 w-[180px] space-x-3 ${!open ? 'hover:none' : 'sm:hover:none md:hover:bg-gray-300'} p-2 rounded-xl`}>
                            <img className={`${!open ? 'sm:hover:bg-gray-200' : 'hover:none'} rounded-md`} src={menu.icon} alt={menu.alt} />
                            <p className={`${!open ? 'translate-x-[-208px]' : 'translate-x-0'} font-medium`}>{menu.name}</p>
                        </div>
                            )
                         })}

                <div>
                <button
                  className={`flex justify-center align-middle items-center mt-3.5 font-bold bg-blue-600 gap-2 rounded-xl text-white ${open ? 'w-[150px] px-6' : 'w-[40px]'} h-[30px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`}>
                  <img src={Logout} alt="Logout" className="w-5 aspect-square m-auto" />
                  <span className={`${!open ? 'translate-x-[-208px] hidden' : 'translate-x-0'} w-full `}>Log Out</span>
                </button>

                    <div className={`flex px-2 w-[180px] space-x-3 ${!open ? 'hover:none' : 'sm:hover:none md:hover:bg-gray-300'} p-2 rounded-xl`}>
                        <img className={`${!open ? 'sm:hover:bg-gray-200' : 'hover:none'} rounded-md`} src={Settingsicon} alt='settings' />
                        <p className={`${!open ? 'translate-x-[-208px]' : 'translate-x-0'}`}>Settings</p>
                    </div>
                    <div className={`flex px-2 w-[180px] space-x-3 ${!open ? 'hover:none' : 'sm:hover:none md:hover:bg-gray-300'} p-2 rounded-xl`}>
                        <img className={`${!open ? 'sm:hover:bg-gray-200' : 'hover:none'} rounded-md`} src={Helpicon} alt='help' />
                        <p className={`${!open ? 'translate-x-[-208px]' : 'translate-x-0'}`}>Help</p>
                    </div>
                </div>
            </div>
        </nav>
    </aside>
  )
}

export default Dashside;