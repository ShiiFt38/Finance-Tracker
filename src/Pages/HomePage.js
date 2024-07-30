import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '../Components/Button';

import { useAccentColor } from '../Context/AccentColorContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function HomePage() {

  const {accentColor} = useAccentColor();
  const { isAuthenticated } = useAuth0();

  return (
    <>
    <Header />
    <main className="flex flex-col space-y-10  font-bold bg-white w-[100%] justify-center w-full">

      {/* Introduction section */}
      <section className='grid grid-cols-12 w-[100%] mt-8 min-h-[400px] '>

        {/* First column of intro section */}
        <div className='grid grid-rows-6 bg-white place-items-center align-middle sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-4 h-[100%]'>
          <div className='row-start-1 row-span-4'>
            <p className='mx-30px align-middle text-center'>FinTracker is your all-in-one expense and income tracking web app designed to streamline your financial management. With FinTracker, you can effortlessly track your transactions, gain insights into your spending habits, and take control of your finances like never before. Our user-friendly interface allows you to input and categorize your transactions with ease, ensuring that you have a clear overview of your financial activities.</p>
          </div>

          {isAuthenticated === true && 
          <button
            className={`flex justify-center align-middle items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap ${accentColor} rounded-xl text-white sm:w-[130px] sm:h-[30px] md:h-[35px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`}>
            <Link to="/Dashboard">
              <span className='sm:text-[14px] md:text-[18px]'>Get Started</span> 
              </Link>
        </button>}
        </div>

        {/* Second column of intro section */}
        <div className=' sm:col-start-1 sm:col-span-12 md:col-start-7 md:col-span-5'>
          <img src='./images/undraw_Transfer_money_re_6o1h (1).png' alt='carousel'className=' w-[327px] h-[287px] object-cover m-auto end-0'></img>
        </div>
      </section>

      {/* About Us section */}
      <section className='grid grid-cols-12 w-[100%] mt-8 min-h-[300px] my-3' id='About-Us'>

        {/* First column of about us section */}
        <div className='grid grid-rows-6 sm:col-start-2 md:col-start-3 sm:col-span-10 md:col-span-4'>
          <h1 className='font-bold text-[28px] mx-auto row-start-1 '>About Us</h1>
          <p className='text-center row-start-2 row-span-5'>At FinTracker, we're passionate about helping individuals take control of their finances. Our mission is to provide a user-friendly and comprehensive platform that empowers users to track their expenses, analyze their financial history, and make informed decisions about their money. With a focus on simplicity and efficiency, we strive to make financial management accessible to everyone, helping our users save money and budget better.
          </p>
        </div>

        {/* Second column of the about us section */}
        <div className='sm:col-start-1 md:col-start-7 sm:col-span-12 md:col-span-5'>
          <img src='./images/Logo.png' alt='Logo'className=' w-[327px] h-[287px] top-[139px] left-[411px] object-cover m-auto end-0'></img>
        </div>
      </section>

      {/* Features section */}
      <section className='grid grid-rows-12 col-auto gap-6 justify-center w-[100%] min-h-[500px] my-100px'>
        <div className='row-start-1 row-span-1 text-center h-fit'>
          <h1 className='font-bold text-[28px] mx-auto '>Features</h1>
        </div>

        <div className='row-start-2 row-span-10 flex flex-wrap gap-5 place-content-center'>
          {/* First card of features section */}
          <div className='mx-30px w-[315px] h-[400px] rounded-[20px] border [border-style:solid] border-[#e5e8ea] my-auto overflow-hidden space-between text-center'>
              <img src='./images/Reports Page.png' alt='Reports Page'className='w-[310px] h-[220px] object-cover'></img>
              <p className='font-bold m-10'>Real-Time Interactive and Customisable Reports.</p>
              <div className='flex place-content-center'>
                <Button text='Tips & Tricks' link='/Reports-Tips'/>
              </div>
          </div>

          {/* Second card of features section */}
          <div className='mx-30px w-[315px] h-[400px] rounded-[20px] border [border-style:solid] border-[#e5e8ea] overflow-hidden space-between text-center'>
              <img src='./images/Transaction Page.png' alt='Reports Page'className='w-[310px] h-[220px] object-cover'></img>
              <p className='font-bold m-10'>Simple Income and Expense Tracking</p>
              <div className='flex place-content-center'>
                <Button text='Tips & Tricks' link='/Tracking-Tips'/>
              </div>
          </div>

          {/* Third card of features section */}
            {/* <div className="w-[355px] h-[487px] top-[124px] left-[25px] bg-[#111416] rounded-[20px] blur-[100px]"></div> */}
            <div className='mx-30px w-[315px] h-[400px] rounded-[20px] border [border-style:solid] border-[#e5e8ea] overflow-hidden space-between text-center'>
              <img src='./images/Home Page.png' alt='Reports Page'className='w-[310px] h-[220px] object-cover'></img>
              <p className='font-bold m-10'>Interactive Dashboard for Overview Insights</p>
              <div className='flex place-content-center'>
                <Button text='Tips & Tricks' link='/Dashboards-Tips'/>
              </div>
          </div>
        </div>


      </section>

      {/* Why Us section */}
      <section className='grid grid-cols-12 w-[100%] mt-8 min-h-[400px]' id='Why-Us'>

        {/* First colulmn of why us section */}
      <div className='grid grid-rows-6 sm:col-start-2 md:col-start-3 sm:col-span-10 md:col-span-4'>
          <h1 className='font-bold text-[28px] mx-auto row-start-1 '>Why Us</h1>
          <p className='text-center row-start-2 row-span-5'>
            Our platform stands out for its intuitive user interface, making it effortless for anyone to get started with tracking expenses and income. With FinTracker, you don't need to be a financial expert to take control of your money. Our simple UI guides you through the process, allowing you to input and categorize transactions with ease. Say goodbye to complex spreadsheets and tedious manual tracking. Join FinTracker today and simplify your financial management journey.</p>
        </div>

        {/* Second column of the Why us section */}
        <div className='sm:col-start-1 md:col-start-7 sm:col-span-12 md:col-span-5'>
          <img src='./images/undraw_Online_banking_re_kwqh.png' alt='Logo'className=' w-[327px] h-[287px] top-[139px] left-[411px] object-cover m-auto end-0'></img>
        </div>
      </section>
  </main>
  <Footer />
  </>
  )
}

export default HomePage