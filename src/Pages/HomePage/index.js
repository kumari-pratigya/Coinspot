import React from 'react'
import NavBar from '../../Components/Navbar'
import BuySellCurrency from '../HomePage/BuySellCurrency'
import StartTrading from '../HomePage/StartTrading'
import SupportCurrency from '../HomePage/SupportCryptoCurrency'
import HelpWithInMinutes from '../HomePage/HelpWithInMinutes'
import DownloadCoinSpot from '../HomePage/DownloadCoinSpot'
import TrustedAustralian from '../HomePage/TrustedAustralianPlatform'
import Customers from '../HomePage/Customers'
import FrequentlyAskedQuestion from '../HomePage/FrequentlyAskedQuestion'
import StartEarning from '../HomePage/StartEarning'
import Footer from '../../Components/Footer'
const index = () => {
  return (
    <div>
      <NavBar/>
      <BuySellCurrency/>
      <StartTrading/>
      <SupportCurrency/>
      <HelpWithInMinutes/>
      <DownloadCoinSpot/>
      <TrustedAustralian/>
      <Customers/>
      <FrequentlyAskedQuestion/>
      <StartEarning/>
      <Footer/>
    </div>
  )
}

export default index
