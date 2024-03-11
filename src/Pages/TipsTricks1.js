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
        image2Dimensions="md:w-[350px] sm:w-[280px]"
        image3="./images/Untitled design (2).png"
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