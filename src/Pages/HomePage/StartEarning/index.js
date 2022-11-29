import React from 'react'
import style from './StartEarning.module.css';
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
        <div className='row'>
        <div className={`col-lg-6 ${style.leftContent}`}>
        <h2 className={`text-center text-lg-start {style.sectionHeading}`}>
        <span className={style.gradientText}>Join 2.5 million</span> other users<br/> and start earning!</h2>
        <div className="d-none d-lg-block">
<form>
<input  type="hidden" name="_csrf" value="WxGqUKb1-2N_22es5_3Ey1M2GyQAF1vvYMok"/>
<div className={`input-group getstarted ${style.getStartedForm}`}>
<input className={`form-control ${style.email}`} type="email" name="email" placeholder="Email address"/>
<span className={`input-group-btn ${style.inputButton}`}>
<button className={`btn btn-primary ${style.getStartedButton}`} type="submit">Get Started</button>
</span>
</div>
</form>
</div>
<div className="d-lg-none">
<form>
<input className={`form-control ${style.emailSm}`}  type="email" name="email" placeholder="Email address"/>
<button className={`btn btn-primary form-control mt-10 ${style.buttonsm}`} type="submit">Get Started</button>
</form>
</div>
        </div>
        <div className='col-md-6 col-12 d-none d-lg-block'>
          <img className={style.joinImg} src="https://www.coinspot.com.au/public/img/australia-join.png?v=321" alt="joinImg"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default index
