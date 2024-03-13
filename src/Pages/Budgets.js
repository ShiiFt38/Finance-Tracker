import React from 'react'
import Dashside from '../Components/Dashside'
import Header from '../Components/Header'
import Groceriesicon from '../assets/Groceries.png';
import Restauranticon from '../assets/Restaurant.png';
import Gasicon from '../assets/Gas.png';
import Orb from '../Components/Orb'
import Bar from '../Components/Bar';
import Trash from '../assets/trash-solid.svg'
import Edit from '../assets/pen-to-square-solid.svg'
import Plus from '../assets/plus-solid.svg'
import Link from 'react-router-dom'

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

        <section className='gap-8'>
          <article className='flex place-content-center align-middle mt-15 mb-10 bg-white h-[70px]'>
            <button className='bg-gray-300 m-auto rounded-md hover:bg-gray-700 w-[45px] h-[45px]'>
              <img src={Plus} alt='Add budget' className='m-auto w-[16px]'/>
            </button>
          </article>

          <Orb/>
          {budgetList.map(budget => {
               return (
               <article className='flex mt:5 sm:mt-[30px] flex-wrap md:flex-row justify-between gap-[10px] min-h-[70px] justify-between py-2 hover:bg-gray-200 rounded-xl px-5 '>
                {/* budget info */}
                  <div className='grid grid-cols-4 w-[200px]'>
                    <div className='cols-start-1 align-middle cols-span-1'>
                      <img src={budget.icon} alt={budget.alt} className='m-auto bg-gray-200 rounded-md p-2 ' />
                    </div>
                    <div className='grid grid-rows-2 cols-start-2 col-span-3'>
                      <div className='row-start-1 row-span-1 font-bold'><p>{budget.budgetName}</p></div>
                      <div><span className='font-light text-start mx-auto text-[10px]'>{`$${budget.spent} of $${budget.total}`}</span></div>
                    </div>
                  </div>

                  <div className='flex order-lastjustify-center font-bold w-[200px]'>
                    <Bar
                      percent = {budget.percent}
                    />
                  </div>

                  <div className='flex flex-row gap-7 ml-auto my-auto'>
                    <img alt="icon" className='w-[16px]' src={Trash}></img>
                    <img alt="icon" className='w-[16px]' src={Edit}></img>
                  </div>
                </article>
                )
          })}
        </section>
    </main>
    </>
  )
}

export default Budgets