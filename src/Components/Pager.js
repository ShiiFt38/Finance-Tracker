import React from 'react'
import { Link } from 'react-router-dom';

function Pager({prevLink, prevPage, nextLink, nextPage}) {
  return (
    <>
    <div className='flex flex-wrap w-[100%] px-20 min-h-[100px] mb-20'>
        {/* Previous button container */}
        <Link to={prevLink} className='sm:w-[100%] grid-rows-2 border-r-2 border-black lg:w-[50%] text-left justify-start'>
          <div className=' flex gap-3 text-center sm:text-[8px] md:text-[16px] row-start-1 h-[40%] '>
            <img src="./images/angle-left-solid.svg" alt="left-directional" className='w-[17px] h-[30px]' />
            <p>Previous</p>
          </div>
          <div className='row-start-2 col-start-3 font-extrabold sm:text-[18px] md:text-[32px]'>
            <p>{prevPage}</p>
          </div>
        </Link>

        {/* Next button container */}
        <Link to={nextLink} className='sm:w-[100%] sm:mt-[20px] md:mt-0 border-l-2 border-black lg:w-[50%] text-right'>
          <div className=' flex gap-3 justify-end row-start-1 sm:text-[8px] md:text-[16px] h-[40%]'>
            <p>Next</p>
            <img src="./images/angle-right-solid.svg" alt="left-directional" className='w-[17px] h-[30px]' />
          </div>
          <div className='row-start-2 col-start-3 font-extrabold sm:text-[18px] md:text-[32px]'>
            <p>{nextPage}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Pager