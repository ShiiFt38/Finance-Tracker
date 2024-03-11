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
        article1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur."
        article2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur."
        article3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur."
      />
      <section></section>
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