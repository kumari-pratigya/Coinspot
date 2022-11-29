import React from 'react'
import style from './Footer.module.css'
import {BsMoonFill} from 'react-icons/bs'
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row '>
            <div className='col-md-4 col-lg-2 col-6 d-lg-block d-none'>
                <div className={style.whiteSpace}>
                    <a href="/" className={style.footerLogo}>
                        <img alt="logo" src="https://www.coinspot.com.au/public/img/coinspot-logo-40x40.png?v=321"/>
                        <span className={style.text}>CoinSpot</span>
                    </a>
                </div>
                <div className={style.whiteSpace}>
                <img alt="img2" className={style.img2} src="https://www.coinspot.com.au/public/img/adcca-industry.png?v=321"/>
                </div>
                <div className={style.scl}>
                    <div className='d-flex'>
                        <img  className={style.sclImage} src="https://www.coinspot.com.au/public/img/security-image1-white.png?v=321" alt="scl"/>
                        <span className={style.sclText}><strong>SCI QUAL</strong><br/>INTERNATIONAL</span>
                    </div>
                    </div>
                    <div className={style.footerText}>
                   Certified since: 13.02.2020<br/>Certificate number: 5660
                    </div>
            </div>
            
            <div className='col-md-4 col-lg-2 col-6'>
                <ul className={style.footerGroup}>
                    <li className={style.footerTitle}>
                        Products
                    </li>
                    <li  className={style.footerList}><a href="/buy/BTC">Buy Bitcoin</a></li>
                    
<li className={style.footerList}><a href="/trade/BTC">Bitcoin Trading</a></li>
<li className={style.footerList}><a href="/tradecoins">Instant Buy/Sell</a></li>
<li className={style.footerList}><a href="/swap">Instant Swap</a></li>
<li className={style.footerList}><a href="/markets">CoinSpot Markets</a></li>
<li className={style.footerList}><a href="/bundles">CoinSpot Bundles</a></li>
<li className={style.footerList}><a href="/card">CoinSpot Mastercard</a></li>
<li className={style.footerList}><a href="/nft">Buy NFTs</a></li>
<li className={style.footerList}><a href="/defi">Buy &amp; Sell DeFi Projects</a></li>
<li className={style.footerList}><a href="/nfts">Buy &amp; Sell NFT Projects</a></li>
<li className={style.footerList}><a href="/multicoinwallets">Multicoin Wallets</a></li>
<li className={style.footerList}><a href="/otc">Over the Counter (OTC)</a></li>
<li className={style.footerList}><a href="/smsf">Self Managed Super (SMSF)</a></li>
<li className={style.footerList}><a href="/api">API</a></li>
<li className={style.footerList}><a href="/mobile">CoinSpot App</a></li>
<li >
<a href="!#" className={` btn btn-default ${style.setnightmodebtn}`}>
<BsMoonFill/><span className='px-2'>Night</span>
</a>
</li>
                </ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
            <li className={style.footerTitle}> ABOUT</li>
          
<li className={style.footerList}><a href="/security">Security</a></li>
<li className={style.footerList}><a href="/tradesafely">Trade Safely With CoinSpot</a></li>
<li className={style.footerList}><a href="/press">Press Enquiries</a></li>
<li className={style.footerList}><a href="/fees">Fees</a></li>
<li className={style.footerList}><a href="/terms">Terms of Use</a></li>
<li className={style.footerList}><a href="/privacy">Privacy Policy</a></li>
<li className={style.footerList}><a href="/aml">AML</a></li>
<li className={style.footerList}><a href="/2-million-customers/terms">2 Million Competition Terms</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footergroupEarn}>
<li className={style.footerTitle}>EARN</li>
<li className={style.footerList}><a href="/affiliate">Affiliate Program</a></li>
<li className={style.footerList}><a href="/referrals">Referral Program</a></li>
</ul>
<ul  className={`d-none d-lg-block ${style.footerGroup}`}>
<li className={style.footerTitle}>COMMUNITY</li>
<li className={style.footerList}><a href="https://www.facebook.com/coinspotau/">Facebook</a></li>
<li className={style.footerList}><a href="https://twitter.com/coinspotau/" >Twitter</a></li>
<li className={style.footerList}><a href="https://www.instagram.com/coinspot/">Instagram</a></li>
<li className={style.footerList}><a href="https://www.reddit.com/r/coinspotau/">Reddit</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
<li className={style.footerTitle}>LEARN</li>
<li className={style.footerList}><a href="/learn">Learn with CoinSpot</a></li>
<li className={style.footerList}><a href="/how-to-buy-bitcoin">How to buy Bitcoin</a></li>
<li className={style.footerList}><a href="/how-to-buy-ethereum-in-australia">How to buy Ethereum</a></li>
<li className={style.footerList}><a href="/cryptotax">Cryptocurrency &amp; Tax</a></li>
</ul>
            </div>
           
            <div className="d-lg-none col-6 col-md-4 col-lg-2">
                <ul className={style.footerGroup}>
                <li className={style.footerTitle}>COMMUNITY</li>
                <li  className={style.footerList}><a href="https://www.facebook.com/coinspotau/" >Facebook</a></li>
                <li  className={style.footerList}><a href="https://twitter.com/coinspotau/" >Twitter</a></li>
                <li  className={style.footerList}><a href="https://www.instagram.com/coinspot/" >Instagram</a></li>
                <li  className={style.footerList}><a href="https://www.reddit.com/r/coinspotau/" >Reddit</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
<li className={style.footerTitle} >SUPPORT</li>
<li className={style.footerList} ><a href="https://coinspot.zendesk.com/hc/en-us">Help Centre</a></li>
<li className={style.footerList}><a href="/contact">Contact Support</a></li>
<li className={style.footerList}><a href="/accountrecovery/email">Account Recovery</a></li>
<li className={style.footerList}><a href="https://coinspot.zendesk.com/hc/en-us/articles/115001019874">Complaints &amp; Disputes</a></li>
<li className={style.footerList}><a  href="https://coinspot.zendesk.com/hc/en-us/articles/333757066344">Protect Yourself Online</a></li>
<li className={style.footerList}><a href="/requestacoin">Request a Coin</a></li>
</ul>
            </div>
        </div>
        <div className="d-lg-none">
<div className="mt-5 text-start">
<a className={style.footerlogo} href="/"><img src="https://www.coinspot.com.au/public/img/coinspot-logo-40x40.png?v=321" alt="CoinSpot"/>CoinSpot</a>
</div>
<div className="d-flex mt-2">
<div>
<a href="https://blockchainaustralia.org/member/member-profile-coinspot/" >
<img alt="footerLogo" src="https://www.coinspot.com.au/public/img/adcca-industry.png?v=321" className={style.footerLogo1} /><br/>
<span className="footer-text">Member since: 02.02.2014</span>
</a>
</div>
<div className={`${style.footerIso} ms-3 ms-sm-5`}>
<a href="https://coinspot.zendesk.com/hc/en-us/articles/360001428615">
<div className="d-flex">
<img alt="123" src="https://www.coinspot.com.au/public/img/security-image1-white.png?v=321" className={style.sclFooterImage}/>
<span className={style.isoText}><strong>SCI QUAL</strong><br/>INTERNATIONAL</span>
</div>
<div className={style.footerText}>
<p className='mb-0'>Certified since: 13.02.2020</p>
<p>Certificate number: 5660</p>
</div>
</a>
</div>
</div>
</div>
      </div>
      </div>
  )
}

export default index
