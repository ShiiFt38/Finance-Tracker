import React, { useState } from 'react'
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
import BudgetForm from '../Components/BudgetForm';
import EditBudgetForm from '../Components/EditBudgetForm';

const Budgets = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  
  const [budgetList, setBudgetList] = useState([
    {id: 1, budgetName: "Groceries", icon: Groceriesicon, alt: "gas", percent: 83, spent: 1000, total: 1200 },
    {id: 2, budgetName: "Restaurants", icon: Restauranticon, alt: "Res icon", percent: 75, spent: 300, total: 400},
    {id: 3, budgetName: "Gas", icon: Gasicon, percent: 67, alt: "Gas", spent: 200, total: 300}
  ]
);

const handleDelete = (id) => {
  const updatedBudgetList = budgetList.filter(budget => budget.id !== id)

  setBudgetList(updatedBudgetList);
};

const handleEdit = (id) => {
  const index = budgetList.findIndex(item => item.id === id);
  const editedBudget = budgetList[index];

  setShowEditForm(true);
  return editedBudget;

  }


  return (
    <>
    <Header hidden="hidden" />
    <Dashside/>
    <Orb/>
    <Orb/>

    <main className ="p-4 sm:ml-[80px]">
        {showAddForm ? <BudgetForm onClose={() => setShowAddForm(false)}/> : null}
        {showEditForm ? <EditBudgetForm onClose={() => setShowEditForm(false)}/> : null}
        <h1 className='md:text-[22px] sm:text-[18px] font-bold'>Budgets</h1>

        <section className=''>
          <article className='flex place-content-center align-middle rounded-xl mt-[20px] mb-10 bg-white h-[70px]'>
            <button onClick={() => {setShowAddForm(true)}} className='bg-gray-300 m-auto rounded-md hover:bg-gray-700 w-[45px] h-[45px]'>
              <img src={Plus} alt='Add budget' className='m-auto w-[16px]'/>
            </button>
          </article>

          {/* <Orb/> */}
          {budgetList.map(budget => {
               return (
               <article key={budget.id} className='flex mt:5 sm:mt-[10px] md:mt-[20px] bg-white flex-wrap md:flex-row justify-between gap-[10px] min-h-[70px] justify-between py-2 rounded-xl px-5 '>
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

                  <div className='flex sm:order-last md:order-2 justify-center font-bold w-[200px]'>
                    <Bar
                      percent = {budget.percent}
                    />
                  </div>

                  <div className='flex flex-row gap-7 sm:order-2 md:order-last ml-auto my-auto'>
                    <button className='' onClick={() => {
                      handleDelete(budget.id)
                    }}>
                      <img alt="icon" className='w-[16px] cursor-pointer' src={Trash}></img>
                    </button>
                    <button onClick={() => {
                      handleEdit(budget.id)
                    }}>
                      <img alt="icon" className='w-[16px] cursor-pointer' src={Edit}></img>
                      </button>
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