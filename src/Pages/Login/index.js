import React, { useState, useRef } from "react";
import style from "./Login.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  
  const handleClickShowPassowrd = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
    recaptcha: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("**Required!").email("Invalid Email Address"),
    password: Yup.string()
      .required("**Required!")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    recaptcha: Yup.string().required("**Required!"),
  });
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    const email = values.email;
    const password = values.password;
    captchaRef.current.getValue();
    captchaRef.current.reset();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(error);
        if (errorCode === "auth/user-not-found")
          toast.error("please Check Email");
        else if (errorCode === "auth/wrong-password")
          toast.error("Please check password");
        // ..
      });
    resetForm({ values: ""});
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // function onChange(value) {
  //   console.log("Captcha value:",value);
  //   console.log(captchaRef.current.getValue(),"token");
  // }
  return (
    <>
      <div className="row gx-0">
        <div className={`col-lg-6 ${style.leftContent} `}>
          <div className={`mx-auto py-50 py-lg-80 ${style.content}`}>
            <h1 className={`${style.sectionHeading} txt-smbd`}>
              Log in to your CoinSpot account
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="hidden"
                name="_csrf"
                value="DDh2jCJr-p9JhNd2DzQgPWF47lCEJjtUEqMI"
              />
              <div className={style.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...formik.getFieldProps("email")}
                  placeholder="Type your email"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p style={{ color: "red" }} className="error">
                  {formik.errors.email}
                </p>
              ) : null}
              <div className={style.formGroup}>
                <label>Password</label>
                <div className={style.inputGroup}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    {...formik.getFieldProps("password")}
                    placeholder="Type your password"
                  />
                  <div className={style.inputGroupAddon}>
                    {showPassword ? (
                      <span
                        onClick={handleClickShowPassowrd}
                        className={style.togglepassword}
                      >
                        <AiFillEyeInvisible />
                      </span>
                    ) : (
                      <span
                        onClick={handleClickShowPassowrd}
                        className={style.togglepassword}
                      >
                        <AiFillEye />
                      </span>
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p style={{ color: "red" }} className="error">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className={style.checkbox}>
                <label>
                  <input className="remember" type="checkbox" /> Remember my
                  email
                </label>
              </div>
              <ReCAPTCHA
                sitekey="6LeJjkYjAAAAACe4zyk_rrxY1-fVFmNslcZ-Elyj"
                render="explicit"
                onChange={(value) => formik.setFieldValue("recaptcha",value)}
                ref={captchaRef}
              />
              {formik.touched.recaptcha && formik.errors.recaptcha ? (
                <p style={{ color: "red" }} className="error">
                  {formik.errors.recaptcha}
                </p>
              ) : null}

              <button
                type="submit"
                className={`w-100 btn btn-lg btn-primary ${style.btncreateaccount}`}
              >
                Login
              </button>
              <div className={`text-center ${style.CreateAccount}`}>
                <small style={{ color: "#75798A" }}>
                  <a style={{ color: "#004FEE" }} target="_blank" href="/terms">
                    Forgot your password?
                  </a>
                </small>
                <div style={{ marginTop: "5px" }}>
                  <span className={style.txtg5}>Not a member?</span>
                  <a
                    style={{ color: "#004FEE", marginLeft: "5px" }}
                    href="/login"
                  >
                    Register here
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`col-lg-6  d-none d-lg-flex ${style.rightContent}`}>
          <div className={style.bgWrap}>
            <img
              className={style.imgPlanet1}
              alt="planet1"
              src="https://www.coinspot.com.au/public/img/planet.png?v=321"
            />
            <img
              className={style.imgPlanet2}
              alt="planet2"
              src="https://www.coinspot.com.au/public/img/planet.png?v=321"
            />
            <img
              className={style.imgPlanet3}
              alt="planet3"
              src="https://www.coinspot.com.au/public/img/planet.png?v=321"
            />
            <img
              className={style.imgComet1}
              alt="imgCome1"
              src="https://www.coinspot.com.au/public/img/comet.png?v=321"
            />
            <img
              className={style.imgStart1}
              alt="imgStart1"
              src="https://www.coinspot.com.au/public/img/planet.png?v=321"
            />
            <img
              className={style.imgStart2}
              alt="imgStart2"
              src="	https://www.coinspot.com.au/public/img/cross.svg?v=321"
            />
            <img
              className={style.imgStart3}
              alt="imgStart3"
              src="https://www.coinspot.com.au/public/img/cross.svg?v=321"
            />
            <div className={` ${style.card} mx-auto`}>
              <div className={style.heading}>Security News</div>
              <hr />
              <div className={style.subheading}>
                External statutory financial audit complete
              </div>
              <div className={style.bodyTxt}>
                CoinSpot is the first Australian Cryptocurrency Exchange to
                audit their assets. This confirms holdings are available as
                displayed and are kept one-to-one.
              </div>
              <hr />
              <div className={style.subheading}>
                Enable Two Factor Authentication
              </div>
              <div className={style.bodyTxt}>
                Increase the security of your CoinSpot account and enable 2FA in
                your Account Settings.
              </div>
              <hr />
              <div className={style.subheading}>
                Never create an account on behalf of someone else
              </div>
              <div className={style.bodyTxt}>
                If you have been asked to login or create an account to purchase
                something on Gumtree, Ebay etc. it is highly likely to be a scam
                and you should contact our support team immediately.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
