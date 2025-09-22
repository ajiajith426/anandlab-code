import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import prenatalBanner from "../../assets/images/prenatal-banner.png";
import niptNote1 from "../../assets/images/nipt-note-img-1.png";
import niptNote2 from "../../assets/images/nipt-note-img-2.png";
import niptNote3 from "../../assets/images/nipt-note-img-3.png";
import niptNote4 from "../../assets/images/nipt-note-img-4.png";
import serumTest from "../../assets/images/serum-screening-test.png";
import singleBaby from "../../assets/images/single-baby.png";
import twins from "../../assets/images/twins.png";
import normalMother from "../../assets/images/normal-mother.png";
import pregnantMother from "../../assets/images/pregnant-mother.png";
import ivfDonorSurrogate from "../../assets/images/ivf-donor-surrogate.png";

import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function NIPT() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);
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
        message: Yup.string().required(),
      })
    ),
  });
  const contactUsFrom = (data) => {
    setLoading(true);
    data.page = "NIPT";
    data.page_url = window.location.href;
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
    document.title = "Book Home Collection for NIPT | Neuberg Diagnostics";
    window.scroll(0, 0);
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
          <span className="book-our-heading"> NON-INVASIVE </span>
          <span className="health-check-heading">&nbsp; PRENATAL TESTING</span>
        </div>
      </div>

      <div className="book-health-form-container">
        <div className="left-form h-100">
          <div className="left-side-form-container">
            <form onSubmit={handleSubmit(contactUsFrom)}>
              <div className="form-container">
                <h5 className="get-callback-heading">GET A CALLBACK</h5>
                {errors?.name ? (
                  <small className="text-danger">{errors?.name?.message}</small>
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
                  <p>Please enter your details and we will reach out to you as soon as we can.</p>
                  {errors?.message ? (
                    <div>
                      <small className="text-danger">{"Choose any one!"}</small>
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
          <img src={prenatalBanner} alt="" className="dhoni-img-form" />
        </div>
      </div>

      <div className="nipt-description-container">
        <img src="images/nipt-small-logo.png" alt="" className="nipt-small-logo" />
        <h4 className="nipt-heading">NIPT*</h4>
        <p>
          Welcome to Neuberg's Non-Invasive Prenatal Testing (NIPT), a
          breakthrough in routine prenatal care. NIPT is a screening test
          recognized for its exceptional specificity, sensitivity, and minimal
          false positive rates. It ensures comprehensive insights into your
          baby's health during pregnancy.{" "}
          <b>We have successfully completed more than 50,000 NIPT tests.</b>
        </p>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container please-note-container">
          <span className="book-our-heading">*Please note: </span>
          <span className="health-check-heading">
            As per PC-PNDT Act 2003, this test does not reveal the gender of the
            fetus.
          </span>
        </div>
      </div>

      <div className="how-it-works-container">
        <div className="nipt-info-container">
          <div className="how-it-works-box">
            <img src={niptNote1} alt="" />
            <p>
              As early as <span>9 weeks</span>
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={niptNote2} alt="" />
            <p>
              All <span>23 chromosomes</span>
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={niptNote3} alt="" />
            <p>
              Reporting in as low as <span>2% fetal fraction</span>
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={niptNote4} alt="" />
            <p>
              <span>{">"}50,000 </span>samples processed till date
            </p>
          </div>
        </div>
      </div>

      <div className="chrome-nipt-usecase-container">
        <div className="left-side">
          <h4 className="considered-for-heading">
            CHROME- NIPT CAN BE CONSIDERED FOR
          </h4>
          <div className="nipt-consideration-container">
            <div className="chrome-layer-div">
              <div>
                <img src={serumTest} alt="" className="" />
                <p>Positive serum screening test</p>
              </div>
              <div>
                <img src={singleBaby} alt="" />
                <p>Previous child with aneuploidy</p>
              </div>
            </div>

            <div className="chrome-layer-div">
              <div>
                <img src={normalMother} alt="" />
                <p>Advanced maternal age</p>
              </div>
              <div>
                <img src={pregnantMother} alt="" />
                <p>Any pregnant woman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-dummy"></div>
        <div className="right-side">
          <h4>CHROME - NIPT VALIDATED FOR</h4>
          <div className="nipt-consideration-container">
            <div className="chrome-layer-div">
              <div>
                <img src={singleBaby} alt="" />
                <p>Singleton</p>
              </div>
              <div>
                <img src={twins} alt="" className="chrome-layer-img-adj" />
                <p>Twins</p>
              </div>
            </div>

            <div className="chrome-layer-div">
              <div>
                <img
                  src={ivfDonorSurrogate}
                  alt=""
                  className="chrome-layer-img-adj"
                />
                <p>IVF, Donor egg or surrogate</p>
              </div>
              <div> </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nipt-description-container">
        <h4>Types</h4>
        <ul className="chrome-types-info-ul">
          <li>
            CHROME Focus - Testing of 5 Common chromosomal aneuploidies - chr
            13, 18, 21, X & Y
          </li>
          <li>CHROME Comprehensive - Aneuploidy testing for all chromosomes</li>
          <li>
            CHROME Plus - Aneuploidy testing of 23 chromosomes + 6
            microdeletions -
          </li>
        </ul>
        <ul className="chrome-types-list-ul">
          <li>DiGeorge(22q11.2)</li>
          <li>Angelman(15q11.2)</li>
          <li>Prader-willi(15q11.2)</li>
          <li>Cri-du-chat(5p)</li>
          <li>Wolf-Hirschhorn syndrome(4p)</li>
          <li>1p36 deletion</li>
        </ul>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="book-our-heading"> TAT </span>
          <span className="health-check-heading">: 7-10 Working Days</span>
        </div>
      </div>

      <div className="test-req-form-container">
        <a
          href="https://www.neubergdiagnostics.com/nipt/pdf/CHROME-TRF.pdf"
          target="_blank"
        >
          TEST REQUISITION FORM (TRF)
        </a>
      </div>
    </div>
  );
}
