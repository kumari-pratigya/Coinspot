import React from 'react'
import style from './DownloadCoinSpot.module.css';
import googleplay from '../../../Assets/Images/google-play-white.png';
import appStore from '../../../Assets/Images/appstore-white.png';
import Homeapp from '../../../Assets/Images/home-app.png';
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row'>
            <div className={`col-md-6 text-center text-md-start ${style.leftContent}`}>
            <h2 className="section-heading text-white mb-20">Buy and sell<br/>Bitcoin on-the-go</h2>
            <p className={`mx-auto mx-md-0 ${style.textDefault}`}>Download the CoinSpot app and manage your investments everywhere you go.</p>
            <div className={style.imageContainer}>
            <img alt="googlepay" className={style.googleplayImage} src={googleplay}/>
            <img alt="appStore" className={style.appStoreImage} src={appStore}/>
            </div>
            </div>
            <div className='col-md-6'>
            <img alt="HomeApp" className={style.homeappImage} src={Homeapp}/> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
