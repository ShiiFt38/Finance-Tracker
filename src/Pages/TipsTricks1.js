import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function TipsTricks1() {
  return (
    <>
      <Header />
      <main className='text-center'>
      <h1 className='font-bold text-[#637587] md:text-[64px] sm:text-[32px] text-center'>Finance Tracking</h1>
      <p className='text-center font-bold md:text-[24px] sm:text-[12px]'>Tips & Tricks</p>

      <section className='grid grid-cols-12 mt-20 min-h-[200px]'>
        <div className='md:col-start-3 md:col-span-3 sm:col-start-2 sm:col-span-10 text-center font-bold'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
        </div>
        <div className='md:col-start-6 md:col-span-7 sm:col-start-1 sm:col-span-12 sm:mt-10 place-items-center overflow-hidden rounded-[20px]'>
          <img src="./images/Transaction Filter .png" alt="" className='md:w-[501px] sm:w-[301px] object-cover rounded-[20px] m-auto'/>
        </div>
      </section>

      <section className='grid grid-cols-12 mt-20 '>
        <div className='h-[200px] h-[310px] md:col-start-2 md:col-span-6 sm:col-start-1 sm:col-span-12'>
            <img src="./images/Untitled design (1).png" alt="" className='object-cover w-[350px] m-auto' />
        </div>
        <div className='md:col-start-8 md:col-span-3 sm:col-start-2 sm:col-span-10 font-bold'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
        </div>
      </section>

      <section className='grid grid-cols-12 my-20'>
      <div className='col-start-3 col-span-3 md:col-start-3 md:col-span-3 sm:col-start-2 sm:col-span-10 font-bold'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.</p>
        </div>
        <div className='col-start-6 col-span-7 md:col-start-6 md:col-span-7 sm:col-start-1 sm:col-span-12 mt-10'>
          <img src="./images/Untitled design (2).png" alt="" className='mx-auto sm:w-[301px] md:w-[500px] rounded-[20px]'/>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default TipsTricks1