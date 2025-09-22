import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import whyAnand1 from "../../assets/images/why-anand-1.png";
import whyAnand2 from "../../assets/images/why-anand-2.png";
import whyAnand3 from "../../assets/images/why-anand-3.png";
import whyAnand4 from "../../assets/images/why-anand-4.png";
import howItWorks1 from "../../assets/images/how-it-works-1.png";
import howItWorks2 from "../../assets/images/how-it-works-2.png";
import howItWorks3 from "../../assets/images/how-it-works-3.png";
import howItWorks4 from "../../assets/images/how-it-works-4.png";
import allergyTest1 from "../../assets/images/allergy-test-1.png";
import allergyTest2 from "../../assets/images/allergy-test-2.png";
import allergyTest3 from "../../assets/images/allergy-test-3.png";
import allergyTest4 from "../../assets/images/allergy-test-4.png";
// import allergyBanner from "../../assets/images/allergy_banner.png";
import mothersBanner from "../../assets/images/neu-anand-banner-mothers-day.png";
import commitmentIcon1 from "../../assets/images/commitment-icon-1.png";
import commitmentIcon2 from "../../assets/images/commitment-icon-2.png";
import commitmentIcon3 from "../../assets/images/commitment-icon-3.png";
import chartimg from "../../assets/images/mother-day-chart.png";
import call_1 from "../../assets/images/call-icon-round.png";
import call_2 from "../../assets/images/call-phone.png";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function MothersDay() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);

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

  const gtmScript5 = document.createElement("script");
  gtmScript5.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript8 = document.createElement("script");
  gtmScript8.innerHTML = `
       gtag('config', 'AW-10841898141/QgvjCPu13tMZEJ356LEo', {
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
      })
    ),
  });

  const contactUsFrom = (formData) => {
    setLoading(true);

    formData.page = "Mother’s day cheers to wellness:";
    formData.page_url = window.location.href;
    formData.notes = notesDataString;
    // console.log(notesDataString);

    gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

    axios.post(API_URL.LANDING_PAGES_FORM, formData)
      .then((res) => {
        // FormResponse()
        navigate("/anand-at-home-thank-you");
        setLoading(false);
        reset();
        setOpen(!open);
      })
      .catch((error) => {
        console.error("Error in Reach Us API:", error);
        setLoading(false); // Make sure to handle loading state even in case of errors
      });
  };



  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   dispatch(setLoading(true));

  //   var formdata = new FormData();
  //   formdata.append("name", data.name);
  //   formdata.append("page_url", window.location.href);
  //   formdata.append("email", data.email);
  //   formdata.append("mobile", data.mobile);
  //   formdata.append("company_name", data.company_name);
  //   formdata.append("designation", data.designation);
  //   formdata.append("address", data.address);
  //   formdata.append("message", data.message);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.Errors === false) {
  //         reset();
  //         dispatch(setLoading(false));
  //         FormResponse();
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  useEffect(() => {
    document.title = "Home collection for Allergy tests";
    window.scroll(0, 0);

    if (window.location.pathname.includes('Bengaluru')) {
      document.head.appendChild(gtmScript4);
      document.head.appendChild(gtmScript5);
      document.head.appendChild(gtmScript8);
    }
  }, []);



  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="mothers-day-page">
      <div className="book-captain-health-container">
        <div className="check-health-heading-container container mx-auto">
          <span className="book-our-heading">MOTHER’S DAY CHEERS TO WELLNESS : </span> <br />
          <span className="health-check-heading">&nbsp;GIFT MOM GOOD HEALTH & JOY</span>

          <p className="my-4 pb-3 custom-para">This Mother’s Day, go the extra mile and give mom the gift of good health and wellness! Celebrate your mom in the most thoughtful way possible- by prioritizing her health, wellness and happiness!</p>
        </div>

        <div className="book-health-form-container mothers-day-form-container mb-4">
          <div className="right-img">
            <img src={mothersBanner} alt="" className="" />
          </div>
          <div className="left-form h-100">
            <div className="left-side-form-container h-100 d-flex flex-wrap align-items-center">
              <form onSubmit={handleSubmit(contactUsFrom)}>
                <input type="hidden" name="AdTypes" {...register("AdTypes")} />
                {/* <input type="hidden" name="channelType" {...register("channelType")} />
                <input type="hidden" name="location" {...register("location")} />
                <input type="hidden" name="content" {...register("content")} />
                <input type="hidden" name="gclid" {...register("gclid")} /> */}
                <div className="form-container">
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
                    placeholder="Enter Your Name"
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
                    placeholder="Enter Your Mobile Number"
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
                  <div className="radio-inputs-container">
                    {/* <p>
                      Please enter your details and we will reach out to you as
                      soon as we can.
                    </p> */}
                    {errors?.message ? (
                      <div>
                        {/* <small className="text-danger">
                          {"Choose any one!"}
                        </small> */}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {Loading === true ? (
                    <button
                      type="submit"
                      disabled
                      className="btn-primary btn-flx-full"
                    >
                      <CgSpinner className="fa-spin mr-2" />
                      Loading ...
                    </button>
                  ) : (
                    <button type="submit" className="submit-connect-form mt-3">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">CAPTAIN MAA <span className="text-yellow">HEALTH CHECK</span> </span>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4 mx-3">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Vitamin D</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>HbA1c</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>CBC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tax-saver-parent-container py-4">
          <div className="tax-saver-check-container">
            <div className="allergy-items-layer-container">
              <div>
                <ul>
                  <li>Kidney Function Test</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Liver Function Test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="price-btn-section price-section-container">
          <div class="price-section-dummy-box"></div>
          <div className="price-btn light-purple-bg text-white">
            <span className="cut-price">₹ 5145 </span>
            <p className="text-white mb-0">Actual Price </p>
          </div>
          <div className="price-btn yellow-bg text-white">
            <span>₹ 999 </span>
            <p className="text-white mb-0">Offer Price </p>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>


      <div className="book-captain-health-container">
        <div className="check-health-heading-container mb-3">
          <span className="text-yellow bolder">Good Health </span>
          <span className="health-check-heading">begins with</span> <br />
          <span className="health-check-heading"> Regular </span>
          <span className="text-yellow bolder">Health Check-up</span>
        </div>
      </div>

      <div className="container">
        <div className="row mx-auto">
          <img src={chartimg} className="img-fluid" alt="" />
        </div>
      </div>

      <div className="book-captain-health-container container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">FOR HOME SAMPLE COLLECTION</span> <br />
          <span className="text-yellow bold"> Call us at: </span>
        </div>

        <div className="call-us-btn-module d-flex flex-wrap align-items-center justify-content-center">
          <div className="yellow-bg w-40 mr-4">
            <a className="text-white d-flex align-items-center justify-content-between" href="tel:18004251974">
              <img src={call_1} alt="call icon" className="call-us-icon mr-2" />
              1800  425  1974
            </a>
          </div>
          <div className="yellow-bg w-40">
            <a className="text-white d-flex align-items-center justify-content-between" href="tel:+918035287579 ">
              <img src={call_2} alt="call icon" className="p-2 call-us-icon mr-2" />
              8035 28 7579
            </a>
          </div>
        </div>
      </div>




      <div className="how-it-works-container">
        <h4 className="section-heading">How It Works</h4>
        <div className="howit-works-info-container">
          <div className="how-it-works-box">
            <img src={howItWorks1} alt="" />
            <p>
              Share your <br />
              details with us
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks2} alt="" />
            <p>
              Schedule the test <br />
              at your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks3} alt="" />
            <p>
              Our representative <br />
              would visit your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks4} alt="" />
            <p>
              Get your <br />
              reports online
            </p>
          </div>
        </div>
      </div>

      {/* <div className="our-commitment-container">
        <h4 className="section-heading">Our Commitment</h4>

        <div className="insider-comm-box">
          <div className="commitment-info-container">
            <div className="commitment-info">
              <img src={commitmentIcon2} alt="" />
              <h4>Safety First</h4>
              <p>Ensuring a safe and comfortable testing process.</p>
            </div>
            <div className="commitment-info">
              <img src={commitmentIcon3} alt="" />
              <h4>Quality Care</h4>
              <p>
                Our team is dedicated to providing personalized care and
                support.
              </p>
            </div>
            <div className="commitment-info">
              <img src={commitmentIcon1} alt="" />
              <h4>Educational Resources</h4>
              <p>Offering guidance on allergy management and prevention.</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
