import React from 'react'
import Header from '../Components/Header'
import Dashside from '../Components/Dashside'
import Plus from '../assets/plus-solid.svg';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import MultiChart from '../Components/Charts/MultiChart';
import PieChart from '../Components/Charts/PieChart';
import BarChart from '../Components/Charts/BarChart';
import { useAccentColor } from '../Context/AccentColorContext';
import CustomReportForm from '../Components/CustomReportForm';


const Reports = () => {
    ChartJS.register(ArcElement,CategoryScale,LinearScale,Tooltip, Legend);

    const {accentColor} = useAccentColor();

    const [showForm, setShowForm] = useState(false);

    const [year, setYear] = useState(2023);
    const [chartType, setChartType] = useState('pie');
    const [transactionType, setTransactionType] = useState('expense');
    const [multiChartType, setMultiChartType] = useState('line');
    const [multiChartYear, setMultiChartYear] = useState('Line/Bar')

      // Function to set filter option for year 
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };
      // Function to set filter option for chart type
    const handleChartTypeChange = (event) => {
      setChartType(event.target.value);
    };
  
      // Function to set filter option for transaction type
    const handleTransactionTypeChange = (event) => {
      setTransactionType(event.target.value);

    };

    const handleMultiChartType = (event) => {
      setMultiChartType(event.target.value);
    }

    const handleMultiChartYear = (event) => {
      setMultiChartYear(event.target.value);
    }



    const filterLabels = "block md:text-sm sm:text-[14px] font-medium mb-1"
    const filterStyles = `md:w-full sm:w-[70px] rounded-xl sm:text-[10px] md:text-[14px] ${accentColor} border border-gray-300 sm:px-1 md:px-3 text-white focus:outline-none font-bold focus:ring-1 focus:ring-indigo-500`

  return (
    <>
    <Header hidden="hidden"/>
    <Dashside/>
    {showForm ? <CustomReportForm onClose={() => setShowForm(false)} /> : null}

    <main className='p-4 sm:ml-[80px]'>
        <section className='snap-mandatory grid-cols-12 grid-rows-12'>
          <div className='row-start-1 row-span-2 mb-[20px]'><h1 className='md:text-[22px] sm:text-[18px] font-bold'>Monthly Reports</h1></div>

          {/* Monthly summary filter options */}
          <div className='flex md:place-content-end  sm:place-content-center gap-[20px] row-start-3 row-span-2'>
            
            <div className='md:w-[120px] sm:w-[80px] h-full'>
              <label className={filterLabels} htmlFor="chartType">
                 Transaction:
               </label>
               <select name="transactionType" id="transactionType " className={filterStyles}
               value={transactionType}
               onChange={handleTransactionTypeChange}>
                <option value='income'>Income</option>
                <option value='expense'>Expenses</option>
               </select>
            </div>

          {/* Filter for chart type */}
            <div className='md:w-[120px] sm:w-[80px] h-full'>
              <label className={filterLabels} htmlFor="chartType">
                 Chart Type:
               </label>
               <select
                 id="chartType"
                 name="chartType"
                 className={filterStyles}
                 value={chartType}
                 onChange={handleChartTypeChange}>
                 <option value="pie">Pie</option>
                 <option value="bar">Bar</option>
               </select>
            </div>

            {/* Filter for year */}
            <div className='md:w-[120px] sm:w-[80px] h-full'>
              <label className={filterLabels} htmlFor="year">Year:</label>
              <select id="year" name="year"
              className={filterStyles}
              value={year} onChange={handleYearChange}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* Charts Here */}
          <div className='flex flex-row gap-[50px] snap-mandatory col-start-2 col-span-10 h-[370px] mt-[30px] overflow-x-scroll overflow-y-hidden'> 
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>January</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>February</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>March</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>April</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>May</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>June</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>July</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>August</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>September</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>October</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>November</h1>
            </div>
            <div className='row-span-6 h-full snap-start'>
              {chartType === "pie" ? <PieChart transactionType={transactionType}/> : <BarChart transactionType={transactionType}/> }
              <h1 className='m-auto font-bold text-[15px] w-full text-center mt-[10px]'>December</h1>
            </div>
            
          </div>

        </section>
        <section className='col-rows-12 mt-[20px]'>
          <div className='row-start-1 row-span-2'><h1 className='md:text-[22px] sm:text-[18px] font-bold'>Income vs Expense Summary</h1></div>

          {/* Income vs Expense filter options */}
          <div className='flex md:place-content-end sm:place-content-center my-[20px] gap-[20px] row-start-3 row-span-2'>

            <div className='md:w-[120px] sm:w-[80px] h-full'>
            <label className={filterLabels} htmlFor="year">Year:</label>
              <select id="year" name="year"
              className={filterStyles}
              value={multiChartYear} onChange={handleMultiChartYear}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className='md:w-[120px] sm:w-[80px] h-full'>
              <label className={filterLabels} htmlFor="chartType">
                 Chart Type:
               </label>
               <select
                 id="chartType"
                 name="chartType"
                 className={filterStyles}
                 value={multiChartType}
                 onChange={handleMultiChartType}>
                 <option value="line">Line/Bar</option>
               </select>
            </div>

          </div>

          {/* Charts Here */}
          <div className='h-fit overflow-x-scroll'><MultiChart/></div>

        </section>
        <section className='col-rows-12 mt-[30px]'>
          <div className='row-start-1 row-span-2'><h1 className='md:text-[22px] sm:text-[18px] font-bold'>Custom Reports</h1></div>

          <div className='row-start-3 row-span-2'>
            <article className='flex place-content-center align-middle rounded-xl mt-[20px] mb-10 bg-white h-[70px]'>
              <button onClick={() => {setShowForm(true)}} className='bg-gray-300 m-auto rounded-md hover:bg-gray-700 w-[45px] h-[45px]'>
                <img src={Plus} alt='Add budget' className='m-auto w-[16px]'/>
              </button>
            </article>
          </div>

          {/* Charts here */}
          <div></div>

        </section>
    </main>
    </>
  );
};

export default Reports;