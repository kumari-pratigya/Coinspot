import React from 'react'
import style from './FrequentlyAskedQuestion.module.css'
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
      <h2 className={style.sectionHeading}>Frequently asked questions</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className={`accordion-button collapsed ${style.accordianHeading}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Why should I choose CoinSpot?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-start">
      CoinSpot is the largest, most established exchange in Australia since 2013.<br/><br/>

CoinSpot offers Australia’s largest variety of digital assets with over 360 coins listed where users can buy, sell & swap benefiting from the lowest fees starting from 0.1%. Trade with peace of mind knowing that CoinSpot has the highest level of globally recognised security certification in Australia.
<br/><br/>
Our friendly Support Team provides premium customer service where users can directly engage with real people 24/7 to assist with any queries.
    </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button class={`accordion-button collapsed ${style.accordianHeading}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What do I need to get started?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-start">
      Anyone over the age of 16 can open an account with CoinSpot; get started with an email address, Australian mobile number & a valid form of ID to verify your account.
   </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className={`accordion-button collapsed ${style.accordianHeading}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I buy crypto?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-start">
      Buying crypto has never been more convenient. Once account verification has been completed, users are able to choose from a range of free and instant AUD deposit methods such as PayID, Direct deposit & POLi to allocate funds to their account. Once the funds have arrived, head to the buy/sell page where you can instantly purchase any of the assets listed.
    </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default index
