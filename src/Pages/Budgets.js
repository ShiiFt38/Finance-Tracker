import React from 'react'
import Dashside from '../Components/Dashside'
import Header from '../Components/Header'

const Budgets = () => {
  return (
    <>
    <Header
        hidden="hidden"
    />
        <Dashside/>

    <div class="p-4 sm:ml-64">
        <h1 className='text-[22px] font-bold'>Budgets</h1>
    </div>
    </>
  )
}

export default Budgets