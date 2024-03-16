import React, { useState } from 'react'
import { useAccentColor } from '../Context/AccentColorContext';

const BudgetForm = ({ onClose }) => {
  const {accentColor} = useAccentColor(); 

  const [budgetFormData, setBudgetFormData] = useState({
    category: "", totalAmount: ""}
  )

  console.log(budgetFormData)

  const handleChange = (event) => {
    setBudgetFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Budget</h2>

        <form>
            
          <div className="mb-4">
            <label htmlFor="category" className="font-semibold text-gray-600 block mb-1">Select Category</label>
            <select id="category" onChange={handleChange} name="category" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
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
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="font-semibold text-gray-600 block mb-1">Total Amount</label>
            <input onChange={handleChange} type="number" id="amount" name="totalAmount" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" placeholder="How much are you budgeting?" />
          </div>

          <div className='flex flex-row w-full place-content-end gap-5'>
            <div className="text-right">
              <button onClick={onClose} className={`${accentColor} text-white px-4 py-2 rounded-md hover:${accentColor} focus:outline-none focus:${accentColor}`}>Cancel</button>
            </div>
            <div className="text-right">
              <button type="submit" onClick={(e) => {e.preventDefault()}}className={`${accentColor} text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}>Submit</button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default BudgetForm