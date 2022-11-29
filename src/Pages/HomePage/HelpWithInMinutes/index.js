import React from 'react'
import style from './HelpWithInMinutes.module.css';
import time from '../../../Assets/Images/time.svg';
import chat from '../../../Assets/Images/chat-blue.png';
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row'>
            <div className={`col-md-6 text-center  text-md-start ${style.leftContent}`}>
            <h2 className={style.sectionHeading}>Get help within <span className={style.gradientText}>minutes</span>
            </h2>
            <p className={style.textDefault}>CoinSpot’s locally based and knowledgeable Support Team is here for you. Both, our Live Chat and Help Desk are available 24/7 to speak to real people everyday.
            </p>
            <div className={style.replytime}>
            <img alt="time" className="mr-10" src={time}/> 
            <span className={style.text}>average reply rate &lt;30 seconds</span>
            </div>
            </div>
            <div className='col-md-6'>
                <img className={style.chat} src={chat} alt="chat"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
