import {React,useState,useRef,useContext} from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from "react-router-dom";
import {toast} from 'react-toastify' 
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { DarkModeContext } from '../../Context/DarkMode';
const Index = () => {
  const [theme,setTheme]=useState(false)
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const captchaRef = useRef(null)
  const {darkMode}=useContext(DarkModeContext)
  const location=useLocation();
  const [showPassword,setShowPassword]=useState(false);
  const handleClickShowPassowrd=()=>{
    setShowPassword(!showPassword);
  }
  // function onChange(value) {
  //   console.log("Captcha value:",value);
  //   console.log(captchaRef.current.getValue(),"token");
  // }
  const initialValues = {
    email:"",   
    password:"",
    recaptcha:""
   
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("**Required!").email("Invalid Email Address"),
    password:Yup.string().required("**Required!").min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    recaptcha:Yup.string().required("Please Select Recaptcha")
  });
  const onSubmit = (values,{resetForm}) => {
   console.log(values);
   const email=values.email;
   const password=values.password;
   captchaRef.current.getValue();
   captchaRef.current.reset();
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("userCredential",userCredential)
    const user = userCredential.user;
    toast.success("Your Account has been Created");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
  resetForm({values:""})
  }
  const formik =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
   
     <div className='row gx-0'>
        <div className= {`col-lg-6 ${ darkMode ?style.leftContent:style.LeftContentDark} `}>
        <div className={`mx-auto py-50 py-lg-80 ${style.content}`}>
<h1 className={`${darkMode?style.sectionHeading:style.sectionHeadingDark} txt-smbd mt-30`}>Create a CoinSpot account</h1>
<p className={darkMode?style.subHeading:style.subHeadingDark}>Join two million other Australians trading Bitcoin and a whole world of other digital currencies on CoinSpot.</p>
<form onSubmit={formik.handleSubmit}>
<input type="hidden"/>
<div className={style.formGroup}>
<label>Email  </label>
<input type="email"  className={darkMode? "form-control mb-3 text-dark bg-light":"form-control mb-3 border-0 text-light bg-dark"} {...formik.getFieldProps("email")} placeholder="Type your email"/>
</div>
{formik.touched.email && formik.errors.email ? (
                          <p style={{color:"red"}} className="error m-0">
                            {formik.errors.email}
                          </p>
                        ) : null}
<div className={style.formGroup}>
<label>Password</label>
<div className={style.inputGroup}>
<input type={showPassword ? "text" : "password"} className={darkMode? "form-control mb-3 text-dark bg-light":"form-control mb-3 text-light bg-dark border-0"}  {...formik.getFieldProps("password")}  placeholder="Type your password"/>
<div className={style.inputGroupAddon}>
{showPassword?<span onClick={handleClickShowPassowrd} className={style.togglepassword}><AiFillEyeInvisible/></span>
:<span onClick={handleClickShowPassowrd} className={style.togglepassword}><AiFillEye/></span>
}
</div>
</div>
</div>
{formik.touched.password && formik.errors.password ? (
                          <p style={{color:"red"}} className="error m-0">
                            {formik.errors.password}
                          </p>
                        ) : null}

<div className={style.formGroup}>
<label>Referral or Affiliate code (Optional)</label>
<input className={darkMode? "form-control mb-3 text-dark bg-light":"form-control mb-3 text-light bg-dark border-0"} type="text"  pattern="[A-Za-z0-9]+" name="referredcode" placeholder="If you have a referral / affiliate code please type here"/>
<p className="help-block"></p>
</div>
{/* <script nonce="" src="https://www.google.com/recaptcha/api.js"></script> */}


 <ReCAPTCHA
            sitekey="6LeJjkYjAAAAACe4zyk_rrxY1-fVFmNslcZ-Elyj"
            render="explicit"
            onChange={(value) => formik.setFieldValue("recaptcha",value)}
            ref={captchaRef}
            theme={darkMode?"dark":"light"}

          />
            {formik.touched.recaptcha && formik.errors.recaptcha ? (
                          <p style={{color:"red"}} className="error m-0">
                            {formik.errors.recaptcha}
                          </p>
                        ) : null}
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
    
    </>
  )
}

export default Index
