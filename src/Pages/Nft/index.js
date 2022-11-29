import React from 'react'
import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import PopularCollection from '../Nft/PopularCollection/index'
import BuyNft from '../Nft/BuyNft/index'
const index = () => {
  return (
    <div>
      <NavBar/>
      <BuyNft/>
      <PopularCollection/>
      <Footer/>
    </div>
  )
}

export default index
