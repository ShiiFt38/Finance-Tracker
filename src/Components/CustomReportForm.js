import React from 'react'
import { useAccentColor } from '../Context/AccentColorContext'

const CustomReportForm = ({onClose}) => {
    const {accentColor} = useAccentColor();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-xl font-semibold mb-4">Customize Report</h2>

    <form>
      <div className="mb-4">
        <label htmlFor="graphType" className="font-semibold text-gray-600 block mb-1">Graph Type</label>
        <select id="graphType" name="graphType" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="timeRange" className="font-semibold text-gray-600 block mb-1">Time Range</label>
        <input type="text" id="timeRange" name="timeRange" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" placeholder="e.g., January 2024 - March 2024" />
      </div>

      <div className="mb-4">
        <label htmlFor="dataSource" className="font-semibold text-gray-600 block mb-1">Data Source</label>
        <select id="dataSource" name="dataSource" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
          <option value="all">All Transactions</option>
          <option value="income">Income Only</option>
          <option value="expenses">Expenses Only</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Add more customization options such as grouping, filters, etc. */}

      <div className="flex justify-end space-x-4">
        <button onClick={onClose} className={`${accentColor} text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}>Cancel</button>
        <button type="submit" onClick={(e) => {e.preventDefault()}} className={`${accentColor} text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}>Generate Report</button>
      </div>
    </form>

  </div>
</div>

  )
}

export default CustomReportForm