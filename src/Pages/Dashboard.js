import React from 'react'
import Header from '../Components/Header'
import Dashside from '../Components/Dashside'
import MultiLineChart from '../Components/Charts/MultiLineChart'

const Dashboard = () => {
  const user = 'Demo User'

  return (
    <>
    <Header hidden='hidden' />
    <Dashside/>

    <main className='p-4 sm:ml-[80px]'>
        <h1 className='md:text-[22px] sm:text-[18px] font-bold'>Welcome Back, {user}</h1>
        <section className='grid md:grid-cols-4 my-[30px] grid-cols-2 space-between sm:gap-2 md:gap-2 py-3 mt-[30px]'>
          <div className='border-2 rounded-xl border-gray-500 sm:h-10 md:w-48 md:h-20'></div>
          <div className='border-2 rounded-xl border-gray-500 sm:h-10 md:w-48 md:h-20'></div>
          <div className='border-2 rounded-xl border-gray-500 sm:h-10 md:w-48 md:h-20'></div>
          <div className='border-2 rounded-xl border-gray-500 sm:h-10 md:w-48 md:h-20'></div>
        </section>

        <section>
          <MultiLineChart/>
        </section>

        <section className='md:text-[22px] sm:text-[18px] my-[30px] font-bold '>
          <h1>Recent Transactions</h1>
        </section>
    </main>
    </>
  )
}

export default Dashboard