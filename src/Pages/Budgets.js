import React from 'react'
import Dashside from '../Components/Dashside'
import Header from '../Components/Header'
import Groceriesicon from '../assets/Groceries.png';
import Restauranticon from '../assets/Restaurant.png';
import Gasicon from '../assets/Gas.png';
import Orb from '../Components/Orb'
import Bar from '../Components/Bar';

const Budgets = () => {
  const budgetList = [
    {budgetName: "Groceries", icon: Groceriesicon, alt: "gas", percent: 83, spent: 1000, total: 1200 },
    {budgetName: "Restaurants", icon: Restauranticon, alt: "Res icon", percent: 75, spent: 300, total: 400},
    {budgetName: "Gas", icon: Gasicon, percent: 67, alt: "Gas", spent: 200, total: 300}
  ]

  return (
    <>
    <Header
        hidden="hidden"
    />
        <Dashside/>

    <main class="p-4 sm:ml-[80px]">
        <h1 className='text-[22px] font-bold'>Budgets</h1>

        <section>

          <Orb/>
          {budgetList.map(budget => {
               return (
               <article className='flex sm:flex-col md:flex-row justify-between gap-[10px] min-h-[70px] justify-between py-2 hover:bg-gray-200 rounded-xl px-5 '>
                {/* budget info */}
                  <div className='grid grid-cols-4 w-[200px]'>
                    <div className='cols-start-1 align-middle cols-span-1'>
                      <img src={budget.icon} alt={budget.alt} className='m-auto bg-gray-200 rounded-md p-2 ' />
                    </div>
                    <div className='grid grid-rows-2 cols-start-2 col-span-3'>
                      <div className='row-start-1 row-span-1'><p>{budget.budgetName}</p></div>
                      <div><span>{`$${budget.spent} of $${budget.total}`}</span></div>
                    </div>
                  </div>

                  <div className='flex justify-center w-[200px]'>
                    <Bar
                      percent = {budget.percent}
                    />
                  </div>

                  <div></div>
                </article>
                )
          })}
        </section>
    </main>
    </>
  )
}

export default Budgets