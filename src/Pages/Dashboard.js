import React from 'react'
import Header from '../Components/Header'
import Dashside from '../Components/Dashside'
import Orb from '../Components/Orb'

const Dashboard = () => {
  return (
    <>
    <Header hidden='hidden' />
    <Dashside/>
    <Orb/>
    <Orb/>

    <main className='p-4 sm:ml-[80px]'>
        <h1 className='text-[22px] font-bold'>Dashboard</h1>
    </main>
    </>
  )
}

export default Dashboard