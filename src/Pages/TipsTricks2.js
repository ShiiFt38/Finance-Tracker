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
        image2Dimensions="md:w-[500px] sm:w-[350px]"
        image3="./images/Untitled design (6).png"
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