import React from 'react'
import style from './Login.module.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import {AiFillEye} from 'react-icons/ai'

const index = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
    <Navbar/>
    
     <div className='row gx-0'>
        <div className= {`col-lg-6 ${style.leftContent} `}>
        <div className={`mx-auto py-50 py-lg-80 ${style.content}`}>
<h1 className={`${style.sectionHeading} txt-smbd`}>Log in to your CoinSpot account</h1>
<form>
<input type="hidden" name="_csrf" value="DDh2jCJr-p9JhNd2DzQgPWF47lCEJjtUEqMI"/>
<div className={style.formGroup}>
<label>Email</label>
<input type="email" className="form-control email" name="email" value="" placeholder="Type your email" required=""/>
</div>
<div className={style.formGroup}>
<label>Password</label>
<div className={style.inputGroup}>
<input type="password" className="form-control" id="password" name="password" autocomplete="off" minlength="10" placeholder="Type your password" required="" />
<div className={style.inputGroupAddon}>
<span className={style.togglepassword}><AiFillEye/></span>
</div>
</div>
</div>
<div className={style.checkbox}>
<label><input className="remember" type="checkbox"/> Remember my email</label>
</div>
<script  src="https://www.google.com/recaptcha/api.js"></script>
<div className="g-recaptcha mt-20" data-sitekey="6LfSnCMUAAAAAKQuSdBZFzXYmTKQ7EOCu0tcIQB6">
<div>
<iframe 
title="reCAPTCHA" 
src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfSnCMUAAAAAKQuSdBZFzXYmTKQ7EOCu0tcIQB6&amp;co=aHR0cHM6Ly93d3cuY29pbnNwb3QuY29tLmF1OjQ0Mw..&amp;hl=en&amp;v=Km9gKuG06He-isPsP6saG8cn&amp;size=normal&amp;cb=vemqe4isoadz" width="304" height="78" role="presentation" name="a-l2er8eri2azs" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
</iframe>
</div>
</div>

<button type="submit" className={`w-100 btn btn-lg btn-primary ${style.btncreateaccount}`}>Login</button>
<div className={`text-center ${style.CreateAccount}`}>
<small style={{color:"#75798A"}}>
<a style={{color:"#004FEE"}} target="_blank" href="/terms">Forgot your password?</a>
</small>
<div style={{marginTop:"5px"}}>
<span className={style.txtg5}>Not a member? 
</span> 
<a style={{color:"#004FEE",marginLeft:"5px"}} href="/login">Register here
</a>
</div>
</div>
</form>
</div>
        </div>
        <div className={`col-lg-6  d-none d-lg-flex ${style.rightContent}`}>
        <div className={style.bgWrap}>
<img className={style.imgPlanet1} alt="planet1" src="https://www.coinspot.com.au/public/img/planet.png?v=321"/>
<img className={style.imgPlanet2} alt="planet2" src="https://www.coinspot.com.au/public/img/planet.png?v=321"/>
<img className={style.imgPlanet3} alt="planet3" src="https://www.coinspot.com.au/public/img/planet.png?v=321"/>
<img className={style.imgComet1} alt="imgCome1" src="https://www.coinspot.com.au/public/img/comet.png?v=321"/>
<img className={style.imgStart1} alt="imgStart1" src="https://www.coinspot.com.au/public/img/planet.png?v=321"/>
<img className={style.imgStart2} alt="imgStart2" src="	https://www.coinspot.com.au/public/img/cross.svg?v=321"/>
<img className={style.imgStart3} alt="imgStart3" src="https://www.coinspot.com.au/public/img/cross.svg?v=321"/>
<div className={` ${style.card} mx-auto`}>
<div className={style.heading}>Security News</div>
<hr/>
<div className={style.subheading}>External statutory financial audit complete</div>
<div className={style.bodyTxt}>CoinSpot is the first Australian Cryptocurrency Exchange to audit their assets. This confirms holdings are available as displayed and are kept one-to-one.</div>
<hr/>
<div className={style.subheading}>Enable Two Factor Authentication</div>
<div className={style.bodyTxt}>Increase the security of your CoinSpot account and enable 2FA in your Account Settings.</div>
<hr/>
<div className={style.subheading}>Never create an account on behalf of someone else</div>
<div className={style.bodyTxt}>If you have been asked to login or create an account to purchase something on Gumtree, Ebay etc. it is highly likely to be a scam and you should contact our support team immediately.</div>
</div>
</div>
    </div>
     </div>
     <Footer/>
    </div>
  )
}

export default index
