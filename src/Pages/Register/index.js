import React from 'react'
import style from './Register.module.css'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {AiFillEye} from 'react-icons/ai'
const index = () => {
  return (
    <div>
    <Navbar/>
    
     <div className='row gx-0'>
        <div className= {`col-lg-6 ${style.leftContent} `}>
        <div className={`mx-auto py-50 py-lg-80 ${style.content}`}>
<h1 className={`${style.sectionHeading} txt-smbd mt-30`}>Create a CoinSpot account</h1>
<p className={style.subHeading}>Join two million other Australians trading Bitcoin and a whole world of other digital currencies on CoinSpot.</p>
<form className="form-validate"  action="/register" method="POST" novalidate="novalidate">
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
<span><label for="password" className="error" ></label></span>
<div className="passwordvalidate"></div>
<input type="hidden" name="referredcode-elem" value=""/>
<div className={style.formGroup}>
<label>Referral or Affiliate code (Optional)</label>
<input className="form-control" type="text" maxlength="9" pattern="[A-Za-z0-9]+" name="referredcode" placeholder="If you have a referral / affiliate code please type here" value=""/>
<p className="help-block"></p>
</div>
<script  src="https://www.google.com/recaptcha/api.js"></script>
<div className="g-recaptcha mt-20" data-sitekey="6LfSnCMUAAAAAKQuSdBZFzXYmTKQ7EOCu0tcIQB6">

<div>
<iframe 
title="reCAPTCHA" 
src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfSnCMUAAAAAKQuSdBZFzXYmTKQ7EOCu0tcIQB6&amp;co=aHR0cHM6Ly93d3cuY29pbnNwb3QuY29tLmF1OjQ0Mw..&amp;hl=en&amp;v=Km9gKuG06He-isPsP6saG8cn&amp;size=normal&amp;cb=vemqe4isoadz" width="304" height="78" role="presentation" name="a-l2er8eri2azs" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
</iframe>
</div>
{/* <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response">
</textarea> */}

</div>
<button type="submit" className={`w-100 btn btn-lg btn-primary ${style.btncreateaccount}`}>Create Account</button>
<div className={`text-center ${style.CreateAccount}`}>
<small style={{color:"#75798A"}}>
By creating an account you are agreeing to CoinSpot's<br/> 
<a style={{color:"#004FEE"}} target="_blank" href="/terms">Terms and conditions</a>
</small>
<div style={{marginTop:"5px"}}>
<span className={style.txtg5}>Already a member?
</span> 
<a style={{color:"#004FEE",marginLeft:"5px"}} href="/login">Sign in
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
<img className={style.imgComet1} alt="imgCome" src="https://www.coinspot.com.au/public/img/comet.png?v=321"/>
<div className={`d-flex  text-center mx-auto ${style.trustpilot} `}>
<img className={style.tp2Img} src="https://www.coinspot.com.au/public/img/trustpilotlogo.svg?v=321" alt="TrustPilot"/>
<div className="ms-auto">
<div className={style.tprating}>4.5 <img alt="rating" src="https://www.coinspot.com.au/public/img/star-yellow.svg?v=321" style={{marginBottom:"4px"}}/></div>
<div className={style.tpreview}>1807 reviews</div>
</div>
</div>
<img className={`${style.reviewimg} mx-auto`} alt="review" src="https://www.coinspot.com.au/public/img/trustpilot-review1.png?v=321" />
<div className="row gx-0">
<div className="col">
<div className={`${style.blockHero} mx-auto`}>
<img className={style.blockHeroImage} alt="blockheroImage" src="https://www.coinspot.com.au/public/img/icons/lock-price-green.svg?v=321"/>
<div className={style.title}>Industry leading security</div>
</div>
</div>
<div className="col">
<div className={`${style.blockHero} mx-auto`}>
<img className={style.blockHeroImage}  alt="blockheroImage" src="https://www.coinspot.com.au/public/img/icons/money-green.svg?v=321"/>
<div className={style.title}>Instant buy/sell</div>
</div>
</div>
<div className="col">
<div className={`${style.blockHero} mx-auto`}>
<img className={style.blockHeroImage}  alt="blockheroImage" src="https://www.coinspot.com.au/public/img/icons/money-out-green.svg?v=321"/>
<div className={style.title}>Free &amp; instant withdraw</div>
</div>
</div>
</div>
</div>
        </div>
     </div>
     <Footer/>
    </div>
  )
}

export default index
