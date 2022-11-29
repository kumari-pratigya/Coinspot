import React from 'react'
import style from './BuyNft.module.css'
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row gx-0'>
            <div className={`col-lg-6 text-center text-lg-start mx-auto ${style.leftContent}`}>
              <h1 class={style.heading4}>CoinSpot NFT Marketplace</h1>
                <h2 class={style.heading1}>Buy NFTs using any crypto with CoinSpot</h2>
                <p class={style.subHeading}>
                CoinSpot is the easiest place to buy NFTs (Non-Fungible Tokens). We provide everything you need to buy
                or list your NFT for sale in seconds. Use any digital currency on CoinSpot and purchase your favourite NFTs,
                all within the safety of your CoinSpot account.
                </p>
            </div>
            <div className='col-lg-6'>
            <img class={`d-none d-lg-inline ${style.imgHero}`} src="https://www.coinspot.com.au/public/img/hero/nft-lg.png?v=321"/>
            <img class={`d-lg-none ${style.imgHero1}`} src="https://www.coinspot.com.au/public/img/hero/nft-sml.png?v=321"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
