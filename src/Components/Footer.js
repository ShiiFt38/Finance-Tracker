import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
<footer className=" flex sm:flex-col md:flex-row sm:text-center w-[100%] min-h-[150px] end-0 bg-[#637587]">
  
    <div className='w-[300px] h-[80%] m-auto'>
      <div className='row-start-1 row-span-1'>
        <h1 className='font-bold text-white text-[24px]'>Features</h1>
      </div>
      <div className='row-start-2 row-span-6'>
        <ul className='font-bold'>
          <li><Link to='/Reports-Tips'>Reports</Link></li>
          <li><Link to='/Tracking-Tips'>Finance Tracking</Link></li>
          <li><Link to='/Dashboards-Tips'>Dashboard</Link></li>
        </ul>
      </div>
    </div>

    <div className='w-[300px] h-[80%] m-auto'>
      <div className='row-start-1 row-span-1'>
        <h1 className='font-bold text-white text-[24px]'>Product</h1>
      </div>
      <div className='row-start-2 row-span-6'>
        <ul className='font-bold'>
          
          <li><HashLink smooth to='/#About-Us'>About Us</HashLink></li>
          <li><HashLink smooth to='/#Why-Us'>Why Us</HashLink></li>
        </ul>
      </div>
    </div>

    <div className='w-[300px] h-[80%] m-auto'>
      <div className='row-start-1 row-span-1'>
        <h1 className='font-bold text-white text-[24px]'>Legal</h1>
      </div>
      <div className='row-start-2 row-span-6'>
      <ul className='font-bold'>
          <li>Terms & Services</li>
      </ul>
      </div>
    </div>
</footer>
  )
}

export default Footer