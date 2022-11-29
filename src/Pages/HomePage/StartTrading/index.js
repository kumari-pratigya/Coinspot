import React from 'react'
import style from './StartTrading.module.css';
import lockBlue from '../../../Assets/Images/lock-blue.svg';
import money from '../../../Assets/Images/money-blue.svg';
import moneyBlue from '../../../Assets/Images/moneyin-blue.svg'
const index = () => {
  return (
    <div className={style.section}>
    <div className={`container ${style.Container}`}>
      <h2 className="section-heading text-center mb-15">
      The <span className={style.gradienttText1}>simplest</span> way to start trading
      </h2>
      <p className={`text-center mx-auto ${style.textDefault}`}>With ease of use at the core of our approach, we have constructed an interface with usability in mind, quick-to-access features and information that you actually want to see.
      </p>
      <div className='row my-2'>
        <div className='col-md-4'>
            <img src={lockBlue} width="40px" height="40px" alt="lock"/>
            <div className={style.blockHeading}>Create an account</div>
            <div className={style.blockText}>
                Sign up and verify with our easy process and you’re good to go!
            </div>
        </div>
        <div className='col-md-4'>
        <img src={moneyBlue} width="40px" height="40px"  alt="money"/>
        <div className={style.blockHeading}>Deposit funds</div>
        <div  className={style.blockText}>
            Easily deposit funds into your account using one of our many deposit methods
        </div>

        </div>
        <div className='col-md-4'>
        <img src={money} width="40px" height="40px" alt="bluemoney"/>
        <div className={style.blockHeading}>Trade your crypto</div>
        <div className={style.blockText}>
            Buy, swap and sell with Australia’s largest variety of cryptocurrencies
        </div>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default index
