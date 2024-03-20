import React, { useState } from 'react'
import Header from '../Components/Header'
import Orb from '../Components/Orb'
import { Link } from 'react-router-dom'


const SignUpPage = () => {

    const [registrationDetails, setRegistrationDetails] = useState({
        username: '',
        userEmail: '',
        userPassword: '',
        confirmPassword: '',
    });

    // const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        setRegistrationDetails(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(registrationDetails)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(registrationDetails.userPassword !== registrationDetails.confirmPassword){
            setPasswordMatch(false);
            return;
        }
    }

    const [passwordMatch, setPasswordMatch] = useState(true);

    const inputStyles = 'justify-center border invalid:border-pink-500 invalid:text-pink-600 items-start py-4 pr-16 pl-4 mt-11 bg-gray-100 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full'

  return (
    <>
    <Header hidden='hidden'/>
    <Orb/>
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm max-md:px-5 max-md:max-w-full">
        <form className='flex flex-col px-4 max-w-full w-[511px]' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold'>Create an Account</h1>
            <p className='mt-4 text-sm'>Security is our top priority. We use multi-factor authentication to keep your account safe.</p>

            <input 
                type="text" 
                placeholder='Name' 
                required
                minLength='3'
                maxLength='16'
                autoComplete='off'
                onChange={handleChange} 
                name='username' 
                className={inputStyles}/>

            <input 
                type="email" 
                placeholder='Email' 
                required
                autoComplete='off'
                onChange={handleChange} 
                name='userEmail' 
                className={inputStyles}/>

            <input 
                type="password" 
                placeholder='Password'
                required 
                minLength='8'
                name='userPassword'
                onChange={handleChange}  
                className={inputStyles}/>

            <input 
                type="password" 
                required
                placeholder='Password (Confirm)'
                name='confirmPassword'
                onChange={handleChange}
                className={inputStyles}/>
            {!passwordMatch && <p className='text-red-500'>Passwords do not match</p>}

            <button className={`flex justify-center align-middle m-auto items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap bg-blue-500 rounded-xl text-white sm:w-[230px] sm:h-[30px] md:h-[35px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`} type='submit'>Create Account</button>
        
        </form>

        <p className='font-light mt-[30px] text-gray-600'>Already have an account? <Link to='/Login' className='font-bold'>Log in</Link></p>
        <p className='font-light my-[10px]'>OR</p>
        <Link to='/Dashboard'><p className='font-bold'>Try the demo</p></Link>
    </main>
    </>
  )
}

export default SignUpPage