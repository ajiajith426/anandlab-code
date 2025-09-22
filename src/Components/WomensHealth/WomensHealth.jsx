import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import css from "./WomensHealth.module.css";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import banner_img from '../../assets/images/womens-health/banner-img.png';
import capt_top from '../../assets/images/landing_pages/light-purple-plus.png';
import capt_left from '../../assets/images/landing_pages/orange-plus.png';
import capt_right from '../../assets/images/womens-health/orange-girl.png';
import basic_left from '../../assets/images/womens-health/left-doc.png';
import basic_right from '../../assets/images/landing_pages/orange-plus.png';
import general_left from '../../assets/images/landing_pages/light-purple-plus.png';
import general_right from '../../assets/images/womens-health/orange-girl-2.png';
import all_pkg_left from '../../assets/images/womens-health/all-pkg-icon.png';
import all_pkg_right from '../../assets/images/womens-health/all-pkg-doc.png';
import form_banner from '../../assets/images/mens-health/captain-img.png';
import ReCAPTCHA from 'react-google-recaptcha';


function WomensHealth() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaValue(value);
  };

  const gtmScript1 = document.createElement("script");
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

  const gtmScript2 = document.createElement("script");
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement("script");
  gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript4 = document.createElement("script");
  gtmScript4.innerHTML = `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = 'https://www.anandlab.com/anand-at-home-thank-you';
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
          'event_callback': callback
      });
      return false;
    }`;

  const gtmScript5 = document.createElement("script");
  gtmScript5.innerHTML = `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-10841898141/ssISCMLJ9LsZEJ356LEo',
          'event_callback': callback
      });
      return false;
  }`;

  const gtmScript8 = document.createElement("script");
  gtmScript8.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);
  document.head.appendChild(gtmScript4);
  document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);

  // Define the gtag_report_conversion function
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof (url) !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
      'event_callback': callback
    });
  };

  const handleClick = (event, url) => {
    event.preventDefault();
    const gtag_report_conversion = (url) => {
      const callback = () => {
        if (typeof (url) !== 'undefined') {
          window.location = url;
        }
      };
      window.gtag('event', 'conversion', {
        'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
        'event_callback': callback
      });
    };

    gtag_report_conversion(url);
  }


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

  // Convert JavaScript object to JSON string
  const notesDataString = JSON.stringify(notesValue);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        mobile: Yup.string()
          .matches(/^[6-9]\d{9}$/)
          .required(),
        // message: Yup.string().required(),
      })
    ),
  });
  const contactUsFrom = (data) => {
    if (recaptchaValue) {
      setLoading(true);
      data.page = "CAPTAIN HEALTH CHECK";
      data.page_url = window.location.href;
      data.notes = notesDataString;

      gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

      axios.post(API_URL.LANDING_PAGES_FORM, data).then((res) => {
        // FormResponse()
        navigate("/anand-at-home-thank-you");
        setLoading(false);
        reset();
        setOpen(!open);
      });
    } else {
      // Handle the case where reCAPTCHA validation failed
      console.log('Please complete the reCAPTCHA');
      alert('Please check reCAPTCHA');
    }
  };
  useEffect(() => {
    document.title = "Book Our Captain's Health Check in Bengaluru";
    window.scroll(0, 0);
    if (window.location.pathname.includes('Bengaluru')) {
      document.head.appendChild(gtmScript4);
      document.head.appendChild(gtmScript5);
      document.head.appendChild(gtmScript8);
    }
  }, []);

  return (
    <>
      <div className={`${[css['page-banner-section']]} page-banner-section container`}>
        {/* <img src="/assets/images/mens-health/mens-health-banner.jpg" alt="page-banner" className="w-100 img-fluid" /> */}
        <div className="row">
          <div className="col-sm-7">
            <div className={`${[css['banner-text']]}`}>
              <h3>Celebrating Women's Wellness</h3>
              <h5 className={`${[css['banner-subheading']]}`}>Book Your <span>Comprehensive Health Checkup</span> Today! </h5>
              <div className={`${[css['banner-links']]}`}>
                <a href="#getin_touch" className={` ${css.get_touch}`}>Get in Touch</a>
                <a href={`tel:+918035287579 `} className={` ${css.sent_enquiry}`}><i className="fa fa-phone"></i> +918035287579 </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <img src={banner_img} alt="banner-img" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container pt-4">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <p className={`${[css['page-content']]} text-center`}>Take Charge of Your Health with Our Specialized Women's Health Checkup Package, Tailored for Your Well-being. Schedule Now and Stay Healthy!</p>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${css.pkg_section} ${css['light-pink-bg']} ${css['energy-pkg-section']} position-relative`}>
        <div className="row">
          <img src={capt_top} alt="section icon" className={`${css['top-icon-img']}`} />
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>HAIRFALL CHECK <span>FEMALE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹4099</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, 'https://www.neubergdiagnostics.com/health-package/bangalore/8/hairfall-check-female')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['purple-bg']} ${css['capt-health-module']} position-reltive`}>
            <img src={capt_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Fertility Profile</li>
              <li>17 Oh Progesterone (Lc-Ms/Ms Method)</li>
              <li>Complete Haemogram  (Automated Blood Cell Counter)</li>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Hba1c</li>
              <li>Free Thyroid Profile</li>
              <li>Lipid Profile Standard</li>
              <li>25oh Vitamin D,D2,D3 Ultrasensitive By Lcms</li>
              <li>Vitamin B12 Assay</li>
              <li>Ferritin</li>
              <li>Iron Profile</li>
              <li>Fasting Insulin Level </li>
              <li>Testosterone </li>
            </ul>
            <img src={capt_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`container-fluid ${css.pkg_section} ${css['light-blue-bg']} ${css['gym-pkg-section']} position-relative`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>COMPREHENSIVE FULL BODY <span>CHECK UP FEMALE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹4599</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, 'https://www.neubergdiagnostics.com/health-package/bangalore/8/comprehensive-full-body-checkup-female')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['yellow-bg']} ${css['basic-module']}`}>
            <img src={basic_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Total Calcium</li>
              <li>25oh Vitamin D,D2,D3 Ultrasensitive By Lcms</li>
              <li>Vitamin B12 Assay</li>
              <li>High Sensitive Crp </li>
              <li>Serum Amylase </li>
              <li>Complete Haemogram  (Automated Blood Cell Counter)</li>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Post Prandial Glucose (Serum / Plasma ) </li>
              <li>Hba1c</li>
              <li>Liver Function Test  (Standard)   </li>
              <li>Free Thyroid Profile</li>
              <li>Lipid Profile Standard</li>
              <li>Blood Urea ( Urease )</li>
              <li>Creatinine ( Serum )</li>
              <li>Uric Acid </li>
              <li>Blood Urea Nitrogen </li>
              <li>Urine Complete Examination   </li>
              <li>Serum Electrolytes</li>
              <li>Iron Profile</li>
              <li>Ca 125 </li>
              <li>Serum Lipase</li>
            </ul>
            <img src={basic_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`container-fluid ${css.pkg_section} ${css['light-pink-bg']} ${css['gym-pkg-section']} position-relative`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>MASTER HEALTH CHECKUP <span>HEALTH PACKAGE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹5999</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, 'https://www.neubergdiagnostics.com/health-package/bangalore/8/master-health-checkup-female')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['purple-bg']} ${css['general-module']}`}>
            <img src={general_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Complete Haemogram  (Automated Blood Cell Counter)</li>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Post Prandial Glucose (Serum / Plasma ) </li>
              <li>Hba1c</li>
              <li>Liver Function Test  (Standard)   </li>
              <li>Free Thyroid Profile</li>
              <li>Blood Urea ( Urease )</li>
              <li>Creatinine ( Serum )</li>
              <li>Uric Acid </li>
              <li>Blood Urea Nitrogen </li>
              <li>Urine Complete Examination   </li>
              <li>Serum Electrolytes</li>
              <li>Total Calcium</li>
              <li>25oh Vitamin D,D2,D3 Ultrasensitive By Lcms</li>
              <li>Vitamin B12 Assay</li>
              <li>Iron Profile</li>
              <li>Ca 125 </li>
              <li>High Sensitive Crp </li>
              <li>Serum Amylase </li>
              <li>Serum Lipase</li>
              <li>Lipid Profile Extended, Serum  (Fasting Sample)</li>
              <li>Potassium </li>
              <li>Ferritin</li>
              <li>Stool Complete</li>
              <li>Rheumatoid Factor  Igm Class </li>
            </ul>
            <img src={general_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`${[css['all-pkg-section']]} container-fluid position-relative`}>
        <img src={all_pkg_left} alt="section icon" className={`${css['left-icon-img']}`} />
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <h3>Access all health packages curated <br /> for <span>Women’s Health</span></h3>
              <a href="https://www.neubergdiagnostics.com/">View all packages for Women’s Health</a>
            </div>
          </div>
        </div>
        <img src={all_pkg_right} alt="section icon" className={`${css['right-icon-img']}`} />
      </div>

      <div id={`${'getin_touch'}`}>
        <div className={`container mt-5 pt-5 px-0 ${css.form_section} w-100`}>
          <div className="row">
            <div className="col-sm-7 d-flex align-items-end">
              <img
                src={form_banner}
                alt="captain-banner"
                className={`img-fluid ${css.page_banner}`}
              />
            </div>
            <div className={`col-sm-5`}>
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
                      <p>
                        Please enter your details and we will reach out to you as
                        soon as we can.
                      </p>
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
      </div>

      <h3 className={`${css.how_it_work_heading} text-center mt-5`}><span>BOOK A LAB TEST</span> FROM THE COMFORT OF YOUR HOME</h3>
      <HowItWorks />
    </>
  );
}

export default WomensHealth;
