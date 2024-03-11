import React from 'react'

function TipsTemplate(props) {
  return (
    <>
    <h1 className='font-bold text-[#637587] md:text-[64px] sm:text-[32px] text-center'>{props.title}</h1>
    <p className='text-center font-bold md:text-[24px] sm:text-[12px]'>Tips & Tricks</p>

    {/* First section of the page */}
    <section className='grid grid-cols-12 mt-20 min-h-[200px]'>
      <div className='md:col-start-3 md:col-span-3 sm:col-start-2 sm:col-span-10 text-center font-bold'>
        <p>{props.article1}</p>
      </div>
      <div className='md:col-start-6 md:col-span-7 sm:col-start-1 sm:col-span-12 sm:mt-10 md:mt-0 place-items-center overflow-hidden rounded-[20px]'>
        <img src={props.image1} alt="" className={`${props.image1Dimensions} object-cover rounded-[20px] mx-auto`}/>
      </div>
    </section>

    {/* Second section of the page */}
    <section className='grid grid-cols-12 mt-20 '>
      <div className='h-[310px] md:col-start-2 md:row-start-1 sm:row-start-2 md:col-span-6 sm:col-start-1 sm:col-span-12'>
          <img src={props.image2} alt="" className={`${props.image2Dimensions} object-cover sm:mt-[20px] md:mt-[0] mx-auto`} />
      </div>
      <div className='md:col-start-8 md:col-span-3 sm:row-start-1 sm:col-start-2 sm:col-span-10 text-center font-bold'>
        <p>{props.article2}</p>
      </div>
    </section>

    {/* Third section of the page */}
    <section className='grid grid-cols-12 mb-20'>
    <div className='col-start-3 col-span-3 md:col-start-3 md:col-span-3 sm:col-start-2 sm:col-span-10 text-center font-bold'>
        <p>{props.article3}</p>
      </div>
      <div className='col-start-6 col-span-7 md:col-start-6 md:col-span-7 sm:col-start-1 sm:col-span-12 sm:mt-10 md:mt-[0]'>
        <img src={props.image3} alt="" className={`${props.image3Dimensions} object-cover rounded-[20px] md:mt-[0] mx-auto`}/>
      </div>
    </section>
  </>
  )
}

export default TipsTemplate