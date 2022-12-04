import {React,useContext} from 'react'
import style from './Footer.module.css'
import {BsMoonFill,BsFillSunFill} from 'react-icons/bs'
import { DarkModeContext } from '../../Context/DarkMode'
import {BiArrowToTop} from 'react-icons/bi'
const Index = () => {
  const {darkMode,toggleDarkMode}=useContext(DarkModeContext);
  
  const handleClick=()=>{
    toggleDarkMode();
  }
    const ScrollTop=()=>{
        document.documentElement.scrollTop = 0; 
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display="block";
  } else {
    document.getElementById("myBtn").style.display="none";
  }
}
  return (
    <div className={darkMode?style.section:style.darkSection}>
      <div className='container'>
        <div className='row '>
            <div className='col-md-4 col-lg-2 col-6 d-lg-block d-none'>
                <div className={style.whiteSpace}>
                    <a href="/" className={style.footerLogo}>
                        <img alt="logo" src="https://www.coinspot.com.au/public/img/coinspot-logo-40x40.png?v=321"/>
                        <span className={darkMode?style.text:style.darkText}>CoinSpot</span>
                    </a>
                </div>
                <div className={style.whiteSpace}>
                <img alt="img2" className={style.img2} src="https://www.coinspot.com.au/public/img/adcca-industry.png?v=321"/>
                </div>
                <div className={style.scl}>
                    <div className='d-flex'>
                        <img  className={style.sclImage} src="https://www.coinspot.com.au/public/img/security-image1-white.png?v=321" alt="scl"/>
                        <span className={darkMode?style.sclText:style.darksclText}><strong>SCI QUAL</strong><br/>INTERNATIONAL</span>
                    </div>
                    </div>
                    <div className={darkMode?style.footerText:style.darkFooterText}>
                   Certified since: 13.02.2020<br/>Certificate number: 5660
                    </div>
            </div>
            
            <div className='col-md-4 col-lg-2 col-6'>
                <ul className={style.footerGroup}>
                    <li className={style.footerTitle}>
                        Products
                    </li>
                    <li  className={darkMode?style.footerList:style.footerListDark}><a href="/buy/BTC">Buy Bitcoin</a></li>
                    
<li  className={darkMode?style.footerList:style.footerListDark}><a href="/trade/BTC">Bitcoin Trading</a></li>
<li  className={darkMode?style.footerList:style.footerListDark}><a href="/tradecoins">Instant Buy/Sell</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/swap">Instant Swap</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/markets">CoinSpot Markets</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/bundles">CoinSpot Bundles</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/card">CoinSpot Mastercard</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/nft">Buy NFTs</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/defi">Buy &amp; Sell DeFi Projects</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/nfts">Buy &amp; Sell NFT Projects</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/multicoinwallets">Multicoin Wallets</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/otc">Over the Counter (OTC)</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/smsf">Self Managed Super (SMSF)</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/api">API</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/mobile">CoinSpot App</a></li>
<li >
<div className={` btn btn-default px-2 ${style.setnightmodebtn}`}>
{darkMode?<BsMoonFill/>:<BsFillSunFill style={{color:"yellow"}}/>}<span onClick={handleClick}  className={`  px-2 `}>Night</span>
</div>
</li>
                </ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
            <li className={style.footerTitle}> ABOUT</li>
          
<li className={darkMode?style.footerList:style.footerListDark}><a href="/security">Security</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/tradesafely">Trade Safely With CoinSpot</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/press">Press Enquiries</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/fees">Fees</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/terms">Terms of Use</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/privacy">Privacy Policy</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/aml">AML</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/2-million-customers/terms">2 Million Competition Terms</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footergroupEarn}>
<li className={style.footerTitle}>EARN</li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/affiliate">Affiliate Program</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/referrals">Referral Program</a></li>
</ul>
<ul  className={`d-none d-lg-block ${style.footerGroup}`}>
<li className={style.footerTitle}>COMMUNITY</li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="https://www.facebook.com/coinspotau/">Facebook</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="https://twitter.com/coinspotau/" >Twitter</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="https://www.instagram.com/coinspot/">Instagram</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="https://www.reddit.com/r/coinspotau/">Reddit</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
<li className={style.footerTitle}>LEARN</li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/learn">Learn with CoinSpot</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/how-to-buy-bitcoin">How to buy Bitcoin</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/how-to-buy-ethereum-in-australia">How to buy Ethereum</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/cryptotax">Cryptocurrency &amp; Tax</a></li>
</ul>
            </div>
           
            <div className="d-lg-none col-6 col-md-4 col-lg-2">
                <ul className={style.footerGroup}>
                <li className={style.footerTitle}>COMMUNITY</li>
                <li  className={darkMode?style.footerList:style.footerListDark}><a href="https://www.facebook.com/coinspotau/" >Facebook</a></li>
                <li className={darkMode?style.footerList:style.footerListDark}><a href="https://twitter.com/coinspotau/" >Twitter</a></li>
                <li className={darkMode?style.footerList:style.footerListDark}><a href="https://www.instagram.com/coinspot/" >Instagram</a></li>
                <li className={darkMode?style.footerList:style.footerListDark}><a href="https://www.reddit.com/r/coinspotau/" >Reddit</a></li>
</ul>
            </div>
            <div className='col-md-4 col-lg-2 col-6'>
            <ul className={style.footerGroup}>
<li className={style.footerTitle} >SUPPORT</li>
<li className={darkMode?style.footerList:style.footerListDark} ><a href="https://coinspot.zendesk.com/hc/en-us">Help Centre</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/contact">Contact Support</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/accountrecovery/email">Account Recovery</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="https://coinspot.zendesk.com/hc/en-us/articles/115001019874">Complaints &amp; Disputes</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a  href="https://coinspot.zendesk.com/hc/en-us/articles/333757066344">Protect Yourself Online</a></li>
<li className={darkMode?style.footerList:style.footerListDark}><a href="/requestacoin">Request a Coin</a></li>
</ul>
            </div>
        </div>
        <div className="d-lg-none">
<div className="mt-5 text-start">
<a className={darkMode?style.footerlogo:style.darkfooterLogo} href="/"><img src="https://www.coinspot.com.au/public/img/coinspot-logo-40x40.png?v=321" alt="CoinSpot"/>CoinSpot</a>
</div>
<div className="d-flex mt-2">
<div>
<a href="https://blockchainaustralia.org/member/member-profile-coinspot/" >
<img alt="footerLogo" src="https://www.coinspot.com.au/public/img/adcca-industry.png?v=321" className={style.footerLogo1} /><br/>
<span className={darkMode?"footer-text":"text-light"}>Member since: 02.02.2014</span>
</a>
</div>
<div className={`${style.footerIso} ms-3 ms-sm-5`}>
<a href="https://coinspot.zendesk.com/hc/en-us/articles/360001428615">
<div className="d-flex">
<img alt="123" src="https://www.coinspot.com.au/public/img/security-image1-white.png?v=321" className={style.sclFooterImage}/>
<span className={darkMode?style.isoText:style.isoTextDark}><strong>SCI QUAL</strong><br/>INTERNATIONAL</span>
</div>
<div className={style.footerText}>
<p className={darkMode?'mb-0':'mb-0 text-light'}>Certified since: 13.02.2020</p>
<p className={darkMode?'text-dark':'text-light'}>Certificate number: 5660</p>
</div>
</a>
</div>
</div>
</div>
<BiArrowToTop id="myBtn" onClick={ScrollTop} className={style.bottomIcon}/>
      </div>
      
      </div>
  )
}

export default Index
