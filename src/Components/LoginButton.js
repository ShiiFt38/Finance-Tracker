import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
    <button onClick={() => loginWithRedirect()}>
        <p className='w-[89px] font-bold text-[#197fe5] m-auto text-[14px] align-middle'>Log in</p>
    </button>);
}

export default LoginButton