import React from 'react'
import style from './Customer.module.css';
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row gx-0'>
            <div className={`col-md-6 order-last text-center text-md-start  order-md-first ${style.leftContent}`}>
            <h2 className={style.sectionHeading}>
            Hear it from our
             <span className={style.gradientText}>  customers
             </span>
             </h2>
             <p className={`mx-auto mx-md-0 ${style.textDefault}`}>
                Here’s what our customers have to say about their experiences with Coinspot.
             </p>
            </div>
            <div className={`col-md-6 order-first  order-md-last ${style.rightContent}`}>
            <div className={`d-flex ms-auto me-auto me-md-0 ms-md-auto ${style.trustpilot}`}>
            <img height="30px" className="tp2-img" src="https://www.coinspot.com.au/public/img/trustpilotlogo.svg?v=321" 
            alt="TrustPilot"/>
            <div className={style.textRight}>
            <div className="tprating">4.5 
            <img alt="img" src="https://www.coinspot.com.au/public/img/star-yellow.svg?v=321" />
            </div>
        <div className="tpreview">
        1807 reviews
        </div>
</div>
</div>
            </div>
        </div>
        <div className={`row ${style.row}`}>
            <div className='col-md-4'>
                <img alt="img1" className={style.img1} src="https://www.coinspot.com.au/public/img/trustpilot-review5.png?v=321"/>
            </div>
            <div className='col-md-4'>
            <img alt="img2" className={style.img2} src="https://www.coinspot.com.au/public/img/trustpilot-review1.png?v=321"/>
            </div>
            <div className='col-md-4 '>
            <img alt="img3" className={style.img3} src="https://www.coinspot.com.au/public/img/trustpilot-review6.png?v=321"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
