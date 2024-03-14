import React from 'react'
import Header from '../Components/Header'
import Dashside from '../Components/Dashside'
import Orb from '../Components/Orb';

const Reports = () => {
  return (
    <>
    <Header hidden="hidden"/>
    <Dashside/>
    <Orb/>

    <main className='p-4 sm:ml-[80px]'>
        <h1 className='text-[22px] font-bold'>Reports</h1>
    </main>
    </>
  );
};

export default Reports;