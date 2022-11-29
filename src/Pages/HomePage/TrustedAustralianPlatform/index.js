import React from 'react'
import style from './TrustedAustralian.module.css'
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
      
            <div className={style.textCenter}>
            <img src="	https://www.coinspot.com.au/public/img/adcca-industry.png?v=321" 
            alt="adcca industry certified" width="170px"/>
            </div>
            <h2 className={style.sectionHeading}>The
             <span className={style.gradientText}> trusted
             </span> Australian platform
            </h2>
            <p className={`text-center mx-auto ${style.textDefault}`}>
            Since 2013, we at CoinSpot have worked hard to maintain our trustworthy character. Certified with Blockchain Australia and Sci Qual, we want our users to feel as safe and secure as possible when taking the leap into crypto.
            </p>
            <div className={`row ${style.row}`}>
                <div className='col-md-4 col-12'>
                <img width="40px" height="40px" className="block-icon" src="https://www.coinspot.com.au/public/img/secure-blue.svg?v=321" alt="blockIcon"/>
                <div className={style.blockHeading}>Two-factor authentication</div>
                <div className={style.blockText}>
                   We have an active community of 2.5 million valued customers
                </div>
                </div>
                <div className='col-md-4 col-12'>
                <img width="40px" height="40px" className="block-icon" src="	https://www.coinspot.com.au/public/img/user-blue.svg?v=321"  alt="blockIcon"/>
                <div className={style.blockHeading}>Home for 2.5 million people</div>
                <div className={style.blockText}>
                    Enable 2FA for an extra layer of security to your Coinspot account
                </div>
                </div>
                <div className='col-md-4 col-12'>
                <img width="40px" height="40px" className="block-icon" src="https://www.coinspot.com.au/public/img/btc-blue.svg?v=321"  alt="blockIcon"/>
                <div className={style.blockHeading}>Blockchain Australia Certified</div>
                <div className={style.blockText}>
                 As a certified member of Blockchain Australia, you can can be confident CoinSpot meets best practice standards.
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default index
