import React from 'react'
import Logo from '../../../Assets/Images/coinspot-logo-40x40.png';
import TrustPilot from '../../../Assets/Images/trustpilotlogo.svg';
import starYellow from '../../../Assets/Images/star-yellow.svg';
import BitCoin from '../../../Assets/Images/bitcoin.png';
import ehereum from '../../../Assets/Images/ethereum.png';
import Solana from '../../../Assets/Images/solana.png';
import polygon from '../../../Assets/Images/matic network.png';
import cardano from '../../../Assets/Images/cardano.png';
import style from './BuySellCurrency.module.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {BsArrowDownRight,BsArrowUpRight} from 'react-icons/bs'
const Index = () =>{
  const navigate=useNavigate();
  const initialValues = {
    email:"",   
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("**Required!").email("Invalid Email Address")
  });
  const onSubmit = (values) => {
   console.log(values);
   navigate("/Register", {
    state: {
     value:formik.values.email
    },
  })
  }
  const formik =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
    <div className={`pt-5 ${style.section}`}>
     <div className={`container ${style.container}`}>
        <div className='row'>
            <div className= {`col-md-6  text-center d-flex ${style.leftContent} `}>
                <div className={` ${style.heading}`}>
                    <img className={style.Image} src={Logo} alt="logo"/>
                    <h1 className={`text-white text-center text-md-left mt-2 ${style.coinspot}`}>CoinSpot</h1>
                </div>
                <h2 className={`text-white  text-center text-md-start  ${style.heading1}`}>Buy, Sell &amp; Swap Cryptocurrency</h2>
                <p className={`text-white  text-center text-md-start ${style.subHeading}`}>The easiest way to buy Bitcoin (BTC) and a whole world of other digital currencies.</p>
                <form  onSubmit={formik.handleSubmit}>
<input type="hidden"/>
<div className={`input-group  mx-auto mx-md-0 ${style.inputContainer}`}>
<input className={`form-control ${style.emailInput}`} value={formik.values.email} {...formik.getFieldProps("email")} type="text"  placeholder="Email address"/>
<span className={style.inputGroupButton}>
 <button className={`btn btn-primary ${style.getStartedButton}`} type='submit'>Get started</button>
</span>
</div>
{formik.touched.email && formik.errors.email ? (
                          <p style={{color:"red"}} className="error mt-3">
                            {formik.errors.email}
                          </p>
                        ) : null}
</form>
        <div className={`d-flex px-2  py-1   ${style.rating}`}>
          <img className={`my-2 ${style.trustPilot}`} src={TrustPilot} alt ="trustPilot"/>
          <div className='text-end'>
            <span>4.5</span><img alt="starYellow" height="14px" width="14px" src={starYellow}/>
            <div class={`hidden-xs text-end ${style.tpreview}`}>1807 reviews</div>
          </div>
         
        </div>        
            </div>
            <div  className='col-md-6 gx-0 '>
              <div className={` ms-sm-0 ms-md-auto ${style.card}`}>
                <p className={style.leftheading}>Trending Coins</p>
                <table  className={`table table-center table-responsive-xs `}>
                <thead style={{color:"#75798A",fontSize:"12px",fontWeight:"500"}}>
                  <tr >
                    <th className='text-start'>Coin</th>
                    <th>Last Hr</th>
                    <th>Rate</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img alt="bitCoin"  width="45px" height="45px" src={BitCoin}/>
                      <div className='text-start px-2'>
                      <span>BitCoin</span>
                      <p>BTC</p>
                      </div>
                    </td>
                    <td className={style.HR}>
                      0.05%<span><BsArrowDownRight className={style.icon}/></span>
                    </td>
                    <td>
                    $26,343.28
                    </td>
                  </tr>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img alt="etherum"  width="45px" height="45px" src={ehereum}/>
                      <div className='text-start px-2'>
                      <span>Ethereum</span>
                      <p>ETH</p>
                      </div>
                    </td>
                    <td className={style.HR}>
                      0.02%<span><BsArrowDownRight className={style.icon}/></span>
                    </td>
                    <td>
                    $1969.24
                    </td>
                  </tr>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img alt="solana" src={Solana} width="45px" height="45px"/>
                      <div className='text-start px-2'>
                      <span>Solana</span>
                      <p>SOL</p>
                      </div>
                    </td>
                    <td className={style.HR}>
                      0.01%<span><BsArrowDownRight className={style.icon}/></span>
                    </td>
                    <td>
                    $26,343.28
                    </td>
                  </tr>
                  <tr className={style.tableRow}>
                    <td className='d-flex'>
                      <img alt="polygon" src={polygon} width="45px" height="45px"/>
                      <div className='text-start px-2'>
                      <span>Polygon</span>
                      <p>MATIC</p>
                      </div>
                    </td>
                    <td className={style.HR}>
                      0.16%<span><BsArrowDownRight className={style.icon}/></span>
                    </td>
                    <td>
                    $26.66
                    </td>
                  </tr>
                  <tr className={`'table borderless ${style.cardano}`}>
                    <td className='d-flex'>
                      <img alt="cardano" src={cardano} width="45px" height="45px"/>
                      <div className='text-start px-2'>
                      <span>Cardano</span>
                      <p>ADA</p>
                      </div>
                    </td>
                    <td className={style.HRPositive}>
                      0.61%<span ><BsArrowUpRight className={style.icon}/></span>
                    </td>
                    <td>
                    $0.565258
                    </td>
                  </tr>
                  </tbody>
                </table>
                <a href="!#" className={style.moreCoins}>360+ more coins</a>
              </div>
            </div>
        </div>
     </div> 
     </div>
    </>
  )
}

export default Index
