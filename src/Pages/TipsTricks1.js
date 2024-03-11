import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TipsTemplate from '../Components/TipsTemplate';
import Pager from '../Components/Pager';

function TipsTricks1() {
  return (
    <>
      <Header />
      <main>
      <TipsTemplate
        title="Finance Tracking"
        image1="./images/Transaction Filter .png"
        image1Dimensions="md:w-[501px] sm:w-[301px]"
        image2="./images/Untitled design (1).png"
        image2Dimensions="md:w-[320px] sm:w-[280px]"
        image3="./images/Untitled design (2).png"
        image3Dimensions= "sm:w-[301px] md:w-[500px]"
        article1="In FinTracker's transaction page, users can easily filter their transaction history by category or type, providing a streamlined and organized view of their financial activity.With the ability to filter by category or type, managing your financial transactions has never been more convenient. "
        article2="Adding a transaction in FinTracker is quick and seamless, ensuring that your financial data is accurately reflected across all relevant sections, including reports, budgets, and the dashboard. Simply input the details of your transaction into the add transaction form and select add to update your records instantly."
        article3="
        The transaction page in FinTracker serves as a central hub for managing all your financial transactions. Here, you can easily view, add, edit, or delete transactions with just a few clicks, ensuring that your records are always up to date. This intuitive interface provides you with full control over your financial data, allowing you to effortlessly track your expenses, monitor your income, and maintain accurate records for effective financial management."
      />
      </main>

      <Pager
        prevLink="/Reports-Tips"
        prevPage="Reports"
        nextLink="/Dashboards-Tips"
        nextPage="Dashboards"
      />

      <Footer />
    </>
  );
};

export default TipsTricks1