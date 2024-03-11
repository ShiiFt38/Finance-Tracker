import React from 'react'
import TipsTemplate from '../Components/TipsTemplate'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Pager from '../Components/Pager'

function TipsTricks3() {
  return (
    <>
    <Header />
    <main>
        <TipsTemplate
        title="Reports"
        image1="./images/Untitled design(8).png"
        image1Dimensions="md:w-[320px] sm:w-[301px]"
        image2="./images/Untitled design(9).png"
        image2Dimensions="md:w-[470px] sm:w-[280px]"
        image3="./images/Untitled design(10).png"
        image3Dimensions= "sm:w-[301px] md:w-[500px]"
        article1="Easily filter your transactions by type, whether it's expenses, income, or specific categories, to gain insights into your spending habits. Customize your view with a variety of chart types, such as pie charts or bar graphs, to visualize your data in a way that suits you best. Plus, with the option to filter by year, you can track your financial progress over time and make informed decisions about your budget."
        article2="This intuitive display allows you to track your expenses and income over time with ease, enabling you to identify trends, spot patterns, and make informed decisions about your finances. With a chart for each month, you can quickly visualize your financial progress and gain valuable insights into your spending and earning habits throughout the year."
        article3="With FinTracker, users can easily compare their expenses and income in a single chart, facilitating clear visualization of differences and trends over time. This feature provides a comprehensive overview of financial inflows and outflows, empowering users to make informed decisions and optimize their budgeting strategies effectively."
      />
      <section className='grid grid-cols-12 mt-20 '>
      <div className='h-[310px] md:col-start-2 md:row-start-1 sm:row-start-2 md:col-span-6 sm:col-start-1 sm:col-span-12'>
          <img src="./images/Untitled design(11).png" alt="" className={`object-cover md:w-[500px] sm:w-[300px] mx-auto sm:mt-[20px] md:mt-[0] mx-auto`} />
      </div>
      <div className='md:col-start-8 md:col-span-3 sm:row-start-1 sm:col-start-2 sm:col-span-10 sm:mt-10 md:mt-[0] text-center font-bold'>
        <p>
          Experience ultimate flexibility with FinTracker's custom report feature, allowing users to create and fully customize their own report charts. Tailor your reports to your specific needs by selecting the data parameters, chart types, and visual elements that matter most to you.</p>
      </div>
    </section>
    </main>

    <Pager
        prevLink="/Dashboards-Tips"
        prevPage="Dashboards"
        nextLink="/Tracking-Tips"
        nextPage="Finance Tracking"
      />
      <Footer/>
    </>

  )
}

export default TipsTricks3