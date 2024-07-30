import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// import logout from "../assets/right-from-bracket-solid.svg";

const LogOut = ({open, setOpen}) => {

    const { logout } = useAuth0();

    // ${open ? 'w-[150px] px-6' : 'w-[40px] px-0'}

    return (
        <button
            onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
                setOpen(!open)}}
            className={`flex justify-center text-center align-center mt-[70px] font-bold bg-red-700 gap-2 rounded-xl text-white h-[30px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`}>
            <img src={logout} alt="" className={`${!open ? 'sm:hover:bg-gray-200' : 'hover:none'} rounded-md`} />
            <span className={`${!open ? 'translate-x-[-208px] hidden' : 'translate-x-0'} w-full `}>Log Out</span>
        </button>
    );
}

export default LogOut