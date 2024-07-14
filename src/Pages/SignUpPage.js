import React, { useState } from 'react'
import Header from '../Components/Header'
import Orb from '../Components/Orb'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignUpPage = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formik.values)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                navigate('/Login');

            } else {
                throw new Error(data.message);
            }
        } catch (error){
            console.error("Error: ", error);
            setMessage("Error: " + error.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            userEmail: '',
            userPassword: '',
            cUserPassword: ''
        },
        onSubmit: ()=> {console.log(formik.values)},
        validationSchema: Yup.object({
            username: Yup.string().min(3, "Should be atleast 3 characters minimum"),
            userPassword: Yup.string().min(8, "Should be atleast 8 characters minimum"),
            userEmail: Yup.string().email("Invalid email address"),
            cUserPassword: Yup.string().oneOf([Yup.ref("userPassword")], "Passwords do not match")
        })
    })

    /*
    const [registrationDetails, setRegistrationDetails] = useState({
        username: '',
        userEmail: '',
        userPassword: ''
    });

        const handleChange = (e) => {
        setRegistrationDetails(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(registrationDetails)
    };
    */

    const [ message, setMessage ] = useState('');

    const navigate = useNavigate();

    // const [ errors, setErrors ] = useState({})

    const inputStyles = 'justify-center border invalid:text-pink-600 items-start py-4 pr-16 pl-4 mt-11 bg-gray-100 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full'

  return (
    <>
    <Header hidden='hidden'/>
    <Orb/>
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm max-md:px-5 max-md:max-w-full">
        <form onsubmit={formik.handleSubmit} className='flex flex-col px-4 max-w-full w-[511px]' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold'>Create an Account</h1>
            <p className='mt-4 text-sm'>Security is our top priority. We use multi-factor authentication to keep your account safe.</p>

            <input 
                type="text" 
                placeholder='Name' 
                required
                autoComplete='off'
                value = {formik.values.username}
                onChange={formik.handleChange} 
                name='username' 
                className={inputStyles}/>
            <div className='mt-[20px]'><p className='text-red-400'>{formik.errors.username}</p></div>

            <input 
                type="email" 
                placeholder='Email' 
                required
                autoComplete='off'
                value = {formik.values.userEmail}
                onChange={formik.handleChange} 
                name='userEmail' 
                className={inputStyles}/>
            <div className='mt-[20px]'><p className='text-red-400'>{formik.errors.userEmail}</p></div>

            <input 
                type="password" 
                placeholder='Password'
                required 
                name='userPassword'
                value={formik.values.userPassword}
                onChange={formik.handleChange}  
                className={inputStyles}/>
            <div className='mt-[20px]'><p className='text-red-400'>{formik.errors.userPassword}</p></div>

            <input 
                type="password" 
                required
                placeholder='Confirm Password'
                name='cUserPassword'
                value={formik.values.cUserPassword}
                onChange={formik.handleChange}
                className={inputStyles}/>
            <div className='mt-[20px]'><p className='text-red-400'>{formik.errors.cUserPassword}</p></div>
            <div className='mt-[20px]'><p className='text-red-400'>{message}</p></div>

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