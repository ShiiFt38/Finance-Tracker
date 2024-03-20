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
        <section className='grid lg:grid-cols-4 place-items-center w-full my-[30px] md:grid-cols-2 space-between sm:gap-2 md:gap-2 py-3 mt-[30px]'>
          <div className='border-2 text-center rounded-xl w-[150px] border-gray-500 md:w-48 h-20'>
            <p className='font-bold text-[28px]'>$0</p>
            <p className='text-gray-500'>Spendable</p>
          </div>
          <div className='border-2 text-center rounded-xl w-[150px] border-gray-500 md:w-48 h-20'>
            <p className='font-bold text-[28px]'>$0</p>
            <p className='text-gray-500'>Saved</p>
          </div>
          <div className='border-2 text-center rounded-xl w-[150px] border-gray-500 md:w-48 h-20'>
            <p className='font-bold text-[28px]'>$0</p>
            <p className='text-gray-500'>Credit Limit</p>
          </div>
          <div className='border-2 text-center rounded-xl w-[150px] border-gray-500 md:w-48 h-20'>
            <p className='font-bold text-[28px]'>$0</p>
            <p className='text-gray-500'>Invested</p>
          </div>
        </section>

        <section className='flex h-[500px] w-full justify-center' >
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