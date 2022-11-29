import {React} from 'react'
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/coinspot-logo-40x40.png'
import {AiOutlineHome,AiOutlineLogout} from 'react-icons/ai'
import {TfiWallet} from 'react-icons/tfi'
import {TfiShoppingCart} from 'react-icons/tfi'
import {BsBuilding,BsCurrencyExchange} from 'react-icons/bs'
import {FaBalanceScaleLeft,FaHornbill} from 'react-icons/fa'
import {IoRocketOutline} from 'react-icons/io5'
const NavBar = () => {
  
    document.querySelectorAll(".nav-item").forEach((ele) =>
    ele.addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelectorAll(".nav-item")
        .forEach((ele) => ele.classList.remove("active"));
      this.classList.add("active")
    })
  );
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-light ${style.navbar}`}>
  <div className={`container  gx-0 ${style.innerContainer}`}>
    <a className={`navbar-brand ${style.logoHeader}`} href="/">
    <img alt="logo" className='me-2' src={Logo} height="30px" width="30px"/>
    CoinSpot
   </a>
   
   <NavLink className={`ms-2 d-flex d-lg-none ms-auto me-2 ${style.login}`} to="/Login">LOGIN</NavLink>
   <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-controls="modal" aria-expanded="false" aria-label="Toggle navigation">
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mx-0">
    <div className={`navbar-nav ms-auto modal-content d-block d-lg-none  mb-2 mb-lg-0  ${style.list}`}>
    
      <div className="modal-body">
      <li className='nav-item ps-2 text-start'>
        <a className={`navbar-brand ${style.logoHeader}`} href="/">
        <img alt="logo" className='me-2' src={Logo} height="30px" width="30px"/>
        CoinSpot
        </a>
      </li>
        <li className="nav-item">
          <NavLink  to="/" className={`nav-link   ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><AiOutlineHome/></span>HOME</NavLink>
        </li>
        <li className="nav-item">
          <a href="/wallet" className={`nav-link    ${style.link}`}><span style={{color:"#fff",fontSize:"34px"}} className='mx-3'><TfiWallet/></span>WALLET</a>
        </li>
        
        <li className="nav-item">
          <a   href="/Buy/Sell" className={`nav-link  ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><TfiShoppingCart/></span>BUY/SELL</a>
        </li>
       
        <li className="nav-item">
          <a   href="!#" className={`nav-link    ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><BsCurrencyExchange/></span>SWAP</a>
        </li>
       
        <li className="nav-item">
          <a href="!#" className={`nav-link  ${style.link}`}> <span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><FaHornbill/></span>BUNDLES</a>
        </li>
      
        <li className="nav-item">
          <NavLink to="/nft" className={`nav-link   ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><TfiShoppingCart/></span>NFT</NavLink>
        </li>
       
        <li className="nav-item">
          <a href="!#" className={`nav-link   ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><FaBalanceScaleLeft/></span>OTC</a>
        </li>
        <hr/>
        <li className="nav-item">
          <a  href="!#" className={`nav-link  ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><BsBuilding/></span>MARKETS</a>
        </li>
        <hr/>
        <form className="d-flex flex-column" role="search">
        <li className="nav-item">
          <NavLink  to="/register" className={`nav-link  ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><IoRocketOutline/></span>Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/login" className={`nav-link  ${style.link}`}><span className='mx-3' style={{color:"#fff",fontSize:"34px"}}><AiOutlineLogout/></span>Login</NavLink>
        </li>
        </form>
      </div>
      
    </div>
  </div>
</div>
   <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav ms-auto d-none d-lg-flex  mb-2 mb-lg-0`}>
        <li className="nav-item">
          <NavLink  to="/" className={`nav-link   ${style.link}`}>HOME</NavLink>
        </li>
        <li className="nav-item">
          <a href="/wallet" className={`nav-link    ${style.link}`}>WALLET</a>
        </li>
        <li className="nav-item">
          <a   href="/Buy/Sell" className={`nav-link  ${style.link}`}>BUY/SELL</a>
        </li>
        <li className="nav-item">
          <a   href="!#" className={`nav-link    ${style.link}`}>SWAP</a>
        </li>
        <li className="nav-item">
          <a href="!#" className={`nav-link  ${style.link}`}>BUNDLES</a>
        </li>
        <li className="nav-item">
          <NavLink to="/nft" className={`nav-link ${style.link}`}>NFT</NavLink>
        </li>
        <li className="nav-item">
          <a href="!#" className={`nav-link   ${style.link}`}>OTC</a>
        </li>
        <li className="nav-item">
          <a  href="!#" className={`nav-link  ${style.link}`}>MARKETS</a>
        </li>
        <form className="d-flex" role="search">
     <NavLink className={`mx-2 ${style.register}` } to="/register">REGISTER</NavLink>
     <NavLink className={`ms-2  ${style.login}`} to="/login">LOGIN</NavLink>
      </form>
      </ul>
    </div>
    </div>
</nav>

    </>
  )
}
export default NavBar
