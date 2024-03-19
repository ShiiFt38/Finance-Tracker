import React, { useState } from 'react'
import Dashside from '../Components/Dashside'
import Header from '../Components/Header'
import Orb from '../Components/Orb'
import groceriesIcon from '../assets/Groceries.png'
import restaurantIcon from '../assets/Restaurant.png'
import gasIcon from '../assets/Gas.png'
import { useAccentColor } from '../Context/AccentColorContext'
import Plus from '../assets/plus-solid.svg'
import Wallet from '../assets/wallet-solid.svg'
import AddTransactionForm from '../Components/AddTransactionForm'
import Trash from '../assets/trash-solid.svg'
import Edit from '../assets/pen-to-square-solid.svg'

const Transactions = () => {
    const {accentColor} = useAccentColor();

    const [ transactionType, setTransactionType ] = useState('all');
    const [ category, setCategory ] = useState('all');
    const [ showForm, setShowForm ] = useState(false);
    const [ transactionsList, setTransactionsList ] = useState([
        {id:1, category: 'expense', name: 'Groceries', date: 'Jan 29', amount: -100, icon: groceriesIcon},
        {id:2, category: 'expense', name: 'Restaurant', date: 'Jan 28', amount: -50, icon: restaurantIcon},
        {id:3, category: 'expense', name: 'Gas', date: 'Jan 27', amount: -40, icon: gasIcon},
        {id:4, category: 'income', name: 'Paycheck', date: 'Jan 26', amount: 5000, icon: Wallet}
    ]);

    const filterStyles = `md:w-full sm:w-[70px] rounded-xl sm:text-[10px] md:text-[14px] ${accentColor} border border-gray-300 sm:px-1 md:px-3 text-white focus:outline-none font-bold focus:ring-1 focus:ring-indigo-500`;
    const filterLabels = "block md:text-sm sm:text-[14px] font-medium mb-1";

    const handleDelete = (id) => {
        const updatedTransactionsList = transactionsList.filter(transaction => transaction.id !== id)
      
        setTransactionsList(updatedTransactionsList);
      };
      
      const handleEdit = (id) => {
        const index = transactionsList.findIndex(item => item.id === id);
        const editedTransaction = transactionsList[index];
      
        setShowForm(true);
        return editedTransaction;
      
        }

  return (
    <>
    <Header hidden='hidden'/>
    <Dashside/>
    <Orb/>
    <Orb/>

    <main className='p-4 sm:ml-[80px]'>
        {showForm ? <AddTransactionForm onClose={() => setShowForm(false)} /> : null}
        <h1 className='md:text-[22px] sm:text-[18px] font-bold'>Transactions</h1>

        <section className='w-full flex flex-row md:place-content-end gap-[20px] sm:place-content-center '>
            <div className='md:w-[120px] sm:w-[80px] h-full'>
                <label className={filterLabels} htmlFor="category" id='category'>Category</label>
                <select className={filterStyles} name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Gas">Gas</option>
                    <option value="Restaurant">Restaurants</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Travel">Travel</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                </div>

            <div className='md:w-[120px] sm:w-[80px] h-full'>
                <label className={filterLabels} htmlFor="transactionType">Transaction</label>
                <select className={filterStyles} name="transactionType" id="transactionType" onChange={(e) => setTransactionType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expenses</option>
                </select>
            </div>
        </section>

        <section className='flex flex-col'>
            <article className='flex place-content-center align-middle rounded-xl mt-[20px] mb-10 bg-white h-[70px]'>
                <button onClick={() => setShowForm(true)} className='bg-gray-300 m-auto rounded-md hover:bg-gray-700 w-[45px] h-[45px]'>
                    <img src={Plus} alt="" className='m-auto w-[16px]'/>
                </button>
            </article>
        </section>

        {transactionsList.map(transaction => {
            return (
                <article key={transaction.id} className={`flex mt:5 sm:mt-[10px] md:mt-[20px] ${category === 'all' || transaction.name === category ? null : 'hidden'} bg-white flex-wrap md:flex-row ${transaction.category === 'expense' && transactionType === 'income' ? 'hidden' : null} ${transaction.category === 'income' && transactionType === 'expense' ? 'hidden' : null} justify-between gap-[10px] min-h-[70px] justify-between py-2 rounded-xl px-5`} >
                    <div className='grid grid-cols-4 w-[200px]'>
                        <div className='cols-start-1 flex place-content-center cols-span-1'>
                            <img className='w-[24px] h-[24px] m-auto' src={transaction.icon} alt={transaction.name} />
                        </div>
                        <div className='grid grid-rows-2 cols-start-2 col-span-3'>
                            <div className='row-start-1 row-span-1 font-bold'>
                                <p>{transaction.name}</p>
                            </div>
                            <div><span className='font-light text-start mx-auto text-[10px]'>{transaction.date}</span></div>
                        </div>
                    </div>

                    <div className='flex justify-center my-auto font-bold w-[200px]'>
                        {transaction.amount < 0 ? <span className='text-red-400'>$</span> : <span className='text-blue-400'>+$</span>}<p className='font-normal'>{transaction.amount}</p>
                    </div>

                    <div className='flex flex-row gap-7 ml-auto my-auto'>
                        <button className='' onClick={() => {
                          handleDelete(transaction.id)
                        }}>
                          <img alt="icon" className='w-[16px] cursor-pointer' src={Trash}></img>
                        </button>
                        <button onClick={() => {
                          handleEdit(transaction.id)
                        }}>
                          <img alt="icon" className='w-[16px] cursor-pointer' src={Edit}></img>
                          </button>
                  </div>

                </article>
            )
        })}
    </main>
    
    </>
  )
}

export default Transactions