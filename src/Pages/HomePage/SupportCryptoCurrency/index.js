import React from 'react'
import style from './SupportCryptoCurrency.module.css'
import BitCoin from '../../../Assets/Images/bitcoin.png';
import ehereum from '../../../Assets/Images/ethereum.png';
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row'>
        <div className={`col-lg-6 col-sm-12 order-lg-last ${style.rightContent}`}>
<h2 className={style.sectionHeading}>Support for <span className={style.gradientText}>360+ cryptocurrencies</span></h2>
<p className={style.textDefault}>We offer a variety of cryptocurrency to buy, sell, or swap. Get started in minutes and start trading your cryptocurrencies!</p>
</div>
            <div className='col-lg-6   mx-md-auto  gx-0 order-lg-first'>
            <div className={`mx-auto ${style.card}`}>
                {/* <h1>Trending Coins</h1> */}
                <table  className={`table table-center ${style.table}`}>
                  <tbody>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img  width="45px" height="45px" src={BitCoin} alt="bitcoin"/>
                      <div className='text-start px-3'>
                      <span>BitCoin</span>
                      <p>BTC</p>
                      </div>
                    </td>
                    <td >
                     <span className={style.bitCoinRating}> -5.23%</span>
                    </td>
                  </tr>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img  width="45px" height="45px" src={ehereum} alt="ethereum"/>
                      <div className='text-start px-3'>
                      <span>Ethereum</span>
                      <p>ETH</p>
                      </div>
                    </td>
                    <td>
                     <span  className={style.bitCoinRating}> 6.25%</span>
                    </td>
                  </tr>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img alt="img1" src="https://www.coinspot.com.au/public/img/coinmd/usd%20coin.png?v=321" width="45px" height="45px"/>
                      <div className='text-start px-3'>
                      <span>USD COIN</span>
                      <p>USDC</p>
                      </div>
                    </td>
                    <td>
                     <span className={style.SolanaCurrency}> -0.51%</span>
                    </td>
                  </tr>
                  <tr className={` ${style.cardano}`}>
                    <td className='d-flex'>
                      <img alt="img" src="https://www.coinspot.com.au/public/img/coinmd/binance%20usd.png?v=321" width="45px" height="45px"/>
                      <div className='text-start px-3'>
                      <span>Binanace USD</span>
                      <p>BUSD</p>
                      </div>
                    </td>
                    <td>
                     <span className={style.SolanaCurrency}> -0.44%</span>
                    </td>
                  </tr>
               
                  </tbody>
                </table>
                <a href="!#" className={style.moreCoins}>360+ more coins</a>
              </div>   
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default index
