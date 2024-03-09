import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SignInButton from '../Components/SignInButton';


function HomePage() {
  return (
    <>
    <Header />
    <main className="flex flex-col space-y-10 bg-white w-[100%] justify-center w-full">

      {/* Introduction section */}
      <section className='grid grid-cols-12 w-[100%] min-h-[400px] '>

        {/* First column of intro section */}
        <div className='grid grid-rows-6 bg-white place-items-center align-middle sm:col-start-2 sm:col-span-10 lg:col-start-3 lg:col-span-3 h-[100%]'>
          <div className='row-start-1 row-span-4'>
            <p className='mx-30px align-middle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
          </div>
          <div className=''>
            <SignInButton text='Get started' link='/Login'/>
          </div>
        </div>

        {/* Second column of intro section */}
        <div className=' sm:col-start-1 sm:col-span-12 lg:col-start-7 lg:col-span-5'>
          <img src='./images/undraw_Insert_re_s97w.png' alt='carousel'className=' w-[327px] h-[287px] top-[139px] left-[411px] object-cover m-auto end-0'></img>
        </div>
      </section>

      {/* About Us section */}
      <section className='grid grid-cols-12 w-[100%] min-h-[400px] my-3'>

        {/* First column of about us section */}
        <div className='grid grid-rows-6 sm:col-start-2 lg:col-start-2 sm:col-span-10 lg:col-span-5'>
          <h1 className='font-bold text-[28px] mx-auto row-start-1 '>About Us</h1>
          <p className='text-center row-start-2 row-span-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
        </div>

        {/* Second column of the about us section */}
        <div className='sm:col-start-1 lg:col-start-7 sm:col-span-12 lg:col-span-5'>
          <img src='./images/Logo.png' alt='Logo'className=' w-[327px] h-[287px] top-[139px] left-[411px] object-cover m-auto end-0'></img>
        </div>
      </section>

      {/* Features section */}
      <section className='flex flex-wrap space-x-5 space-y-10 justify-center w-[100%] min-h-[500px] my-100px'>
        <div className='mx-30px w-[355px] rounded-[20px] border [border-style:solid] border-[#e5e8ea] overflow-hidden space-between text-center'>
            <img src='./images/Reports Page.png' alt='Reports Page'className='w-[327px] h-[287px] object-cover'></img>
            <p className='font-bold m-10'>Real-Time Interactive and Customisable Reports.</p>
            <div className='flex place-content-center'>
              <SignInButton text='Tips & Tricks' link='/Reports-Tips'/>
            </div>
        </div>
        <div className='mx-30px w-[355px] min-h-[500px] rounded-[20px]  border [border-style:solid] border-[#e5e8ea] overflow-hidden'>
        <img src='./images/Transaction Page.png' alt='Transaction Page' className='w-[327px] h-[287px] object-cover'></img>
            <p className='font-bold m-10'>Simple Income and Expense Tracking.</p>
            <div className='flex place-content-center'>
              <SignInButton text='Tips & Tricks' link='/Tracking-Tips
              '/>
            </div>
        </div>
        <div className='mx-30px w-[355px] min-h-[500px] rounded-[20px]  border [border-style:solid] border-[#e5e8ea] overflow-hidden'>
          {/* <div className="w-[355px] h-[487px] top-[124px] left-[25px] bg-[#111416] rounded-[20px] blur-[100px]"></div> */}
          <div className='w-[327px] h-[287px] object-cover'>
            <img src='./images/Home Page.png' alt='Home Page' className='w-[327px] h-[287px] object-cover'></img>
          </div>
            <p className='font-bold m-10'>Interactive Dashboard for Overview Insights</p>
            <div className='flex place-content-center'>
              <SignInButton text='Tips & Tricks' link='Dashboards-Tips'/>
            </div>
        </div>
      </section>

      {/* Why Us section */}
      <section className='flex flex-wrap w-[100%] h-[400px] my-100px'></section>
  </main>
  <Footer />
  </>
  )
}

export default HomePage