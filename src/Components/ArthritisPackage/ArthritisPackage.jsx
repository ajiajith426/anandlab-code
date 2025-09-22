import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import helthchkp from "../../assets/images/helthchkp.jpg";
import howitworks1 from "../../assets/images/how-it-works-1.png";
import howitworks2 from "../../assets/images/how-it-works-2.png";
import howitworks3 from "../../assets/images/how-it-works-3.png";
import howitworks4 from "../../assets/images/how-it-works-4.png";
import dhoniimg from "../../assets/images/dhoni-img.png";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import commitmentIcon1 from "../../assets/images/commitment-icon-1.png";
import commitmentIcon2 from "../../assets/images/commitment-icon-2.png";
import commitmentIcon3 from "../../assets/images/commitment-icon-3.png";
import taticon from "../../assets/images/tat_icon.png";
import * as Yup from "yup";

export default function ArthritisPackage() {
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
        // message: Yup.string().required(),
      })
    ),
  });
  const contactUsFrom = (data) => {
    setLoading(true);
    data.page = "ARTHRITIS PACKAGE";
    data.page_url = window.location.href;
    data.notes = notesDataString;

    gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

    axios.post(API_URL.REACH_US, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false);
      reset();
      setOpen(!open);
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
    document.title = "Book Our arthritis package";
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
    <div>
      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="book-our-heading">GET</span>
          <span className="health-check-heading">
            &nbsp; ARTHRITIS SCREENING HEALTH CHECKUP
          </span>
          <span className="book-our-heading"> AT HOME</span>
        </div>
      </div>
      <div className="book-health-form-container">
        <div className="left-form h-100">
          <div className="left-side-form-container">
            <form onSubmit={handleSubmit(contactUsFrom)}>
              <div className="form-container">
                <h5 className="get-callback-heading">GET A CALLBACK</h5>
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
                  <p>
                    Please enter your details and we will reach out to you as
                    soon as we can.
                  </p>
                  {errors?.message ? (
                    <div>
                      {/* <small className="text-danger">
                          {"Choose any one!"}
                        </small> */}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <label>
                    <input
                      type="radio"
                      id="test1"
                      value="Contact me by home visit"
                      name="radio-group"
                      {...register("message")}
                    />
                    Home Visit
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test2"
                      value="Contact me at lab test"
                      name="radio-group"
                      {...register("message")}
                    />
                    Lab Test
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test3"
                      value="Contact me by callback"
                      name="radio-group"
                      {...register("message")}
                    />
                    <span>Request Callback</span>
                  </label> */}
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
                  <button type="submit" className="submit-connect-form">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="right-img">
          <img src={dhoniimg} alt="" className="dhoni-img-form" />
        </div>
      </div>


      <div className="book-captain-health-container mt-4">
        <div className="howit-works-info-container mx-auto text-center">
          {/* <span className="health-check-heading">Captain's Health Package </span> */}
          <p>Our Arthritis Screening Health Checkup is designed to provide a comprehensive analysis of your joint and bone health from the comfort of your home. This screening is an essential step towards early detection and management of arthritis.</p>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Arthritis Screening Health Checkup</span>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4 my-4">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>Erythrocyte Sedimentation Rate (ESR)</li>
              <li>Anti-Nuclear Antibody (IIF)</li>
              <li>Anti-Neutrophilic Cytoplasmic Antibodies (IIF)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Rheumatoid Factor</li>
              <li>Anti-Cyclic Citrullinated Peptide (Anti CCP) Level</li>
            </ul>
          </div>
        </div>

        <div className="price-section-container pt-3">
          <div className="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button className="actual-price-btn">₹6740 </button>
            <p className="empty-div-cut"></p>
          </div>
          <div className="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button className="offer-price-btn">₹2999 </button>
          </div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container mt-0">
          <span className="health-check-heading">Who should get tested?</span>

          <div className="howit-works-info-container mx-auto pt-2">
            <p>If you've noticed symptoms such as joint redness, inflammation, swelling, stiffness, pain, if you have a family history of arthritis, are overweight, or of advanced age. it's important to get screened, especially if your doctor has recommended for a screening.</p>

            <p><b>Don't let arthritis control your life. Book your Arthritis Screening Health Checkup today and take the first step towards better joint health.</b></p>
          </div>
        </div>
      </div>

      <div className="how-it-works-container">
        <h4>How It Works</h4>
        <div className="howit-works-info-container">
          <div className="how-it-works-box">
            <img src={howitworks1} alt="" />
            <p>
              Share your <br />
              details with us
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks2} alt="" />
            <p>
              Schedule the test <br />
              at your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks3} alt="" />
            <p>
              Our representative <br />
              would visit your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks4} alt="" />
            <p>
              Get your <br />
              reports online
            </p>
          </div>
        </div>
      </div>


      <div className="book-captain-health-container mt-4">
        <div className="check-health-heading-container mt-0">
          <span className="health-check-heading">Recommended Videos</span>

          <div className="howit-works-info-container mx-auto pt-4">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-sm-6">
                <div className="video-module">
                  <iframe width="100%" height="300" src="https://www.youtube.com/embed/3V9V48BRKzo?si=_PwH_4tSlk5FK9n1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <h4 className="section-heading mb-0">Introduction to Arthritis</h4>
                  <p> Gain an understanding of arthritis, including types and common misconceptions from Dr Vijay KR Rao is Consultant Rheumatologist at Divisha Arthritis and Medical Center</p>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="video-module">
                  <iframe width="100%" height="300" src="https://www.youtube.com/embed/j_z_C6O1jhA?si=1Z1J0JuDavi-wDQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <h4 className="section-heading mb-0">Rheumatoid Arthritis Explained</h4>
                  <p> Dr Vijay KR Rao is Consultant Rheumatologist at Divisha Arthritis and Medical Center delves into rheumatoid arthritis, discussing symptoms, diagnosis, and treatment options.</p>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="our-commitment-container">
        <h4 class="section-heading">Our Commitment</h4>
        <div class="insider-comm-box">
          <div class="commitment-info-container">
            <div class="commitment-info">
              <img src={commitmentIcon2} className="commitment-icon" alt="" />
              <h4>Safety First</h4>
              <p>Ensuring a safe and comfortable testing process.</p>
            </div>
            <div class="commitment-info">
              <img src={commitmentIcon3} className="commitment-icon" alt="" />
              <h4>Quality Care</h4>
              <p>
                Our team is dedicated to providing personalized care and
                support.
              </p>
            </div>
            <div class="commitment-info">
              <img src={taticon} className="commitment-icon" alt="" />
              <h4>Quick Turnaround Time</h4>
              <p>
                Providing comprehensive test reports within a swift 24-hour
                turnaround
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
