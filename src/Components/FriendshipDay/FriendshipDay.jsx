import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import css from "./FriendshipDay.module.css";
import anandhome from "../../assets/images/frindship-day-banner.png";
import frndship_tble from "../../assets/images/frindship-table.png";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { CgSpinner } from 'react-icons/cg';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import HowItWorks from "../HowItWorks/HowItWorks";

export default function FriendshipDay() {
  const [open, setOpen] = useState(true)
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaValue(value);
  };

  const extractParamsFromURL = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    const extractedParams = {};

    for (const [key, value] of params.entries()) {
      extractedParams[key] = value;
    }

    return extractedParams;
  };

  const currentURL = window.location.href;
  const extractedParams = extractParamsFromURL(currentURL);

  const notesValue = Object.entries(extractedParams).map(([key, value]) => `${key}=${value}`).join('&');

  const notesDataString = JSON.stringify(notesValue);
  console.log(notesDataString);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
        // message: Yup.string().required()
      })
    )
  })
  const contactUsFrom = (data) => {
    if (recaptchaValue) {
      setLoading(true)
      data.page = 'FRIENDSHIP DAY'
      data.page_url = window.location.href
      data.notes = notesDataString;
      axios.post(API_URL.LANDING_PAGES_FORM, data).then((res) => {
        // FormResponse()
        navigate("/anand-at-home-thank-you");
        setLoading(false)
        reset()
        setOpen(!open)
      });
      // console.log('Form submitted successfully');
    } else {
      // Handle the case where reCAPTCHA validation failed
      console.log('Please complete the reCAPTCHA');
      alert('Please check reCAPTCHA');
    }
  }
  useEffect(() => {
    document.title = "Book A Home Collection | Neuberg Anand";
    window.scroll(0, 0);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    // gtag("config", "AW-10841898141");
    gtag('config', 'G-8VQRMYBYFG');

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover the convenience of Lab Testing at Home with Neuberg Anand. Our hassle-free and convenient Home Collection bring the lab to you, ensuring a stress-free and comfortable experience in the familiar surroundings of your home. Prioritise your health at home with Neuberg Anand. Lab Tests Anytime, Anywhere. ';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'anand diagnostic, blood test, lab test home collection, anand lab bangalore, diagnostic centre near me open now, anand laboratory, full body test, health checkup bangalore, thyroid test price, allergy testing, cbc test price, allergy skin patch test, hcg test, immunology tests, blood sugar test, NST testing, NIPT testing, lipid profile test, diabetes tests, kidney test';
    document.head.appendChild(metaKeywords);
  }, []);

  const gtmScript1 = document.createElement('script');
  gtmScript1.async = true;
  gtmScript1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10841898141';

  const gtmScript2 = document.createElement('script');
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement('script');
  gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
    `;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);

  return (
    <div className={`${css['friendship-day-page']}`}>

      <Helmet>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10841898141"
        ></script> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script>
      </Helmet>



      <div className={`${css['top-space']} container`}>
        <div className="row my-4">
          <div className="col-sm-8 mx-auto">
            <div className={`${[css['banner-content']]} text-center`}>
              <h3 className={`${css['yellow-text']} mb-3`}>HAPPY FRIENDSHIP DAY:</h3>
              <h4>MAKE YOUR BOND STRONGER WITH HEALTH & WELL-BEING</h4>

              <p className="my-3">This Friendship’s Day, strengthen your bonds with a commitment to health & well-being </p>

              <div className={`${[css['banner-links']]} pb-3`}>
                <a href={`tel:+918035287579 `} className={` ${css.sent_enquiry} ${css['w-auto']} m-auto`}><i className="fa fa-phone"></i> +918035287579 </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7 px-0">
            <img src={anandhome} alt="Friendship Day" className="img-fluid w-100" />

          </div>
          <div className="col-sm-5 p-0">
            {/* <div className="contact-number-container-home">
                  <a href="tel:+918035287579 " className="call-icon-home shadow-lg"> <i className="fa fa-phone"></i>+918035287579 </a>
                </div> */}
            <div className={`${css.form_module}`}>
              <form onSubmit={handleSubmit(contactUsFrom)}>
                <div className="form-container p-0">
                  <h5 className="get-callback-heading">Our partners in health are at your service.</h5>
                  {errors?.name ? (
                    <small className="text-danger">
                      {errors?.name?.message}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    className={`name-number-inp ${errors?.name ? "input-error" : ""}`}
                  />
                  {errors?.mobile ? (
                    <small className="text-danger">
                      {"Mobile is a invalid field"}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("mobile")}
                    type="tel"
                    placeholder="Mobile Number"
                    className={`name-number-inp ${errors?.mobile ? "input-error" : ""}`}
                  />
                  {errors?.email ? (
                    <small className="text-danger">
                      {"Email is a invalid field"}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter Your Email"
                    className={`name-number-inp ${errors?.email ? "input-error" : ""}`}
                  />
                  <div className={[css['radio-inputs-container']]}>
                    {/* <p>
                        Please enter your details and we will reach out to you as
                        soon as we can.
                      </p> */}
                    {errors?.message ? (
                      <div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <ReCAPTCHA
                    sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                    onChange={handleRecaptchaChange}
                  />

                  {Loading === true ? (
                    <button
                      type="submit"
                      disabled
                      className="btn-primary btn-flx-full mt-2"
                    >
                      <CgSpinner className="fa-spin mr-2" />
                      Loading ...
                    </button>
                  ) : (
                    <button type="submit" className="submit-connect-form mt-2">
                      Request A Call
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-11 m-auto">
          <div className={`${css['section-heading']}`}>LIMITED TIME <span>SPECIAL OFFER</span></div>

          <p>Get additional <span className={`${css['yellow-text']} bold`}>Rs. 200/- off</span> on <span className={`${css['purple-text']} bold`}>Suvarna and Advanced Health Packages </span> when you and your friend visits the nearest Neuberg Branch for a wellness check together.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-11 m-auto text-center">
          <div className={`${css['section-heading']} pb-4`}> <span>Good Health</span> begins with <br />
            Regular<span> Health Check-up </span>
          </div>

          <img src={frndship_tble} alt="Price table" className="img-fluid" />
        </div>
      </div>

      <HowItWorks />
    </div>
  );
}
