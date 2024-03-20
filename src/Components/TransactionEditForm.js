import React, { useState } from 'react'
import { useAccentColor } from '../Context/AccentColorContext'

const TransactionEditForm = ({onClose}) => {
  const { accentColor } = useAccentColor();

  const [transactionType, setTransactionType] = useState('expense')

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Edit Transaction</h2>

      <form>
        <div className='mb-4'>
        <label htmlFor="transactionType" className="font-semibold text-gray-600 block mb-1">Type</label>
        <select onChange={(e) => setTransactionType(e.target.value)} name="transactionType" id="transactionType" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
        <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        </div>

      {transactionType && transactionType === 'income' ? (<div className="mb-4">
          <label htmlFor="category" className="font-semibold text-gray-600 block mb-1">Select Category</label>
          <select id="category" name="category" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
            <option value="Salary">Salary</option>
            <option value="Wages">Wages</option>
            <option value="Freelance">Freelance</option>
            <option value="Investments">Investments</option>
            <option value="Side Hustle">Side Hustle</option>
            <option value="Gifts">Gifts</option>
            <option value="Reimbursements">Reimbursements</option>
            <option value="Royalties">Royalties</option>
            <option value="Other">Other</option>
          </select>
        </div>) : null}

        {transactionType && transactionType === 'expense' ? (<div className="mb-4">
          <label htmlFor="category" className="font-semibold text-gray-600 block mb-1">Select Category</label>
          <select id="category" name="category" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
            <option value="Groceries">Groceries</option>
            <option value="Gas">Gas</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Transportation">Transportation</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Clothing">Clothing</option>
            <option value="Travel">Travel</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>) : null}

        <div className="mb-4">
          <label htmlFor="amount" className="font-semibold text-gray-600 block mb-1">Total Amount</label>
          <input type="number" id="amount" name="totalAmount" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" placeholder="Enter total amount" />
        </div>

        <div className='mb-4'>
          <label htmlFor="date" className="font-semibold text-gray-600 block mb-1">Date</label>
          <input type="date" id='date' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"/>
        </div>

        <div className='flex flex-row w-full place-content-end gap-5'>
          <div className="text-right">
            <button onClick={onClose} className={`${accentColor} text-white px-4 py-2 rounded-md hover:${accentColor} focus:outline-none focus:${accentColor}`}>Cancel</button>
          </div>
          <div className="text-right">
            <button type="submit" onSubmit={(e) => e.preventDefault()} className={`${accentColor} text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}>Add</button>
          </div>
        </div>

      </form>

    </div>
  </div>
  )
}

export default TransactionEditForm