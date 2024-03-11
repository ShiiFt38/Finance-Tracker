import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TipsTemplate from '../Components/TipsTemplate'
import Pager from '../Components/Pager'

function TipsTricks2() {
  return (
    <>
      <Header />

      <main>
      <TipsTemplate
        title="Dashboards"
        image1="./images/Untitled design (3).png"
        image1Dimensions="w-[400px]"
        image2="./images/Untitled design (5).png"
        image2Dimensions="md:w-[500px] sm:w-[300px]"
        image3="./images/Untitled design (6).png"
        article1="In the dashboard of your FinTracker account, you'll find a comprehensive summary and overview of your finances at a glance. The top section of the dashboard presents a clear summary of your budgets, showcasing what you've saved, invested, and credited.With FinTracker's dashboard, managing your finances has never been easier."
        article2="You'll find a section dedicated to visualizing your transactions for the current month. This graph provides a clear and concise overview of your spending and income trends, empowering you to track your financial activity in real-time and make informed decisions about your budgeting priorities"
        article3="Customize your FinTracker dashboard experience with the flexibility to display transactions, budgets, or custom reports in the third section. Tailor your dashboard to your specific preferences and priorities by choosing the information that matters most to you. This can easily be done through settings."

      />
      </main>
      
      <Pager
        prevLink="/Tracking-Tips"
        prevPage="Finance Tracking"
        nextLink="/Reports-Tips"
        nextPage="Reports"
      />
      <Footer />
    </>
  )
}

export default TipsTricks2