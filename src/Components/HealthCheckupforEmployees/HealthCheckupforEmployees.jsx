import React, { useEffect } from "react";
import Sliders from "react-slick";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-17-new.png";
import helthchkp from "../../assets/images/helthchkp.jpg";
import preicn1 from "../../assets/images/pre-1.png";
import preicn2 from "../../assets/images/pre-2.png";
import preicn3 from "../../assets/images/pre-3.png";
import preicn4 from "../../assets/images/pre-4.png";
import preicn5 from "../../assets/images/pre-5.png";
import preicn6 from "../../assets/images/pre-6.png";
import preicn7 from "../../assets/images/pre-7.png";
import preicn8 from "../../assets/images/pre-8.png";
import preicn9 from "../../assets/images/pre-9.png";
import preicn10 from "../../assets/images/pre-10.png";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function HealthCheckupforEmployees() {

const linkedinScript1 = document.createElement('script');
linkedinScript1.type = 'text/javascript';
linkedinScript1.innerHTML = `
  _linkedin_partner_id = "5652538";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);`;

const linkedinScript2 = document.createElement('script');
linkedinScript2.type = 'text/javascript';
linkedinScript2.innerHTML = `
  (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript"; b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);`;

const linkedinNoscript = document.createElement('noscript');
linkedinNoscript.innerHTML = `
  <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=5652538&fmt=gif" />`;

document.head.appendChild(linkedinScript1);
document.head.appendChild(linkedinScript2);
document.head.appendChild(linkedinNoscript);

  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(setLoading(true))

    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("page_url",window.location.href);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("company_name", data.company_name);
    formdata.append("designation", data.designation);
    formdata.append("address", data.address);
    formdata.append("message", data.message);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Errors === false) {
          reset();
          dispatch(setLoading(false))
          FormResponse()
        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    document.title = "Corporate Health Camp";
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
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
            <div className="col">
              <div className="caption-details bnr-txt">
                <ul>
                  <li>
                    <Link to="/" className="theme-color"> Home </Link>
                  </li>
                  <li className="theme-color"> / </li>
                  <li>
                    {" "}
                    <Link to="/reach-us" className="theme-color"> Reach us </Link>
                  </li>
                  <li className="theme-color"> / </li>
                  <li className="theme-color"> Health Checkup for Employees </li>
                </ul>
                <h1 className="theme-color">
                Corporate Health Camp for 
                  <br /> a Healthier Workforce
                </h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div>
                <p>At Neuberg Anand, we recognize the critical role of health in the corporate sector. To support this, we're proud to offer our specialized Corporate Health Camp, focusing on key health indicators to ensure your employees are at their best, both physically and mentally.</p>
                <h2 className="common-heading-health">Why a Corporate Health Camp?</h2>
                <p>In today's fast-paced corporate environment, health often gets overlooked. Our health camp is designed to bring vital health check-ups, especially blood tests, directly to your workplace, offering convenience to your employees.</p>
              </div>
              
              <div className="common-heading-health-container">
                <h2 className="common-heading-health">What We Offer:</h2>
                <p>Our Corporate Health Camp provides a comprehensive range of blood tests targeting crucial health indicators:</p>
                <ul>
                  <li><span>Heart Health: </span>Tests to assess heart health, including cholesterol levels and other cardiac markers.</li>
                  <li><span>Diabetes Screening: </span>Blood sugar tests to identify pre-diabetic or diabetic conditions early.</li>
                  <li><span>Thyroid Function Tests: </span>Evaluating thyroid health, crucial for metabolism and overall well-being.</li>
                  <li><span>Kidney Function Tests: </span>Essential tests to check the health of the kidneys and their functioning.</li>
                  <li><span>Liver Function Tests: </span>Comprehensive screening to assess liver health and detect any abnormalities.</li>
                  <li><span>Vitamin Level Analysis: </span>Tests to determine levels of essential vitamins, ensuring your employees are not facing any deficiencies.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="common-heading-health">Customizable Packages:</h2>
                <p>We offer customizable health camp packages to suit the specific needs of your organization. Our team can work with you to select the tests that are most relevant to your employees' needs.</p>
              </div>
              
              <div>
                <h2 className="common-heading-health">Our Team:</h2>
                <p>Our experienced healthcare professionals, including pathologists, general physicians, and wellness experts, are committed to providing accurate and comprehensive health assessments.</p>
              </div>
              
              <div>
                <h2 className="common-heading-health">Booking and Scheduling:</h2>
                <p>To arrange a Corporate Health Camp at your office, please fill in the form. We will coordinate with you to plan and schedule the camp, ensuring minimal disruption to your workday.</p>
                <p>Investing in the health of your employees is investing in the success of your company. A healthy workforce is more productive, happier, and more engaged. Partner with Neuberg Anand for a Corporate Health Camp and take a significant step towards fostering a healthier workplace.</p>
              </div>

              <div className="common-heading">
                <h2 className="common-heading-health">Packages we offer</h2>
                <Sliders {...consumeing} className="consumeing">
                  <div className="box-cos">
                    <img src={preicn3} alt="" className="img-fluid" />
                    <h4>
                      Basic Health <br></br> Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn5} alt="" className="img-fluid" />
                    <h4>
                      Executive/master<br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn9} alt="" className="img-fluid" />
                    <h4>
                    Paediatric Health<br /> Check-up <span>(Below 12 years of age)</span>
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn2} alt="" className="img-fluid" />
                    <h4>
                      Pre-Marital <br></br>Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn1} alt="" className="img-fluid" />
                    <h4>
                      Bone <br></br>Health Package
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn4} alt="" className="img-fluid" />
                    <h4>
                    General Health<br /> Check-up 
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn8} alt="" className="img-fluid" />
                    <h4>
                      Well Woman  <br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn7} alt="" className="img-fluid" />
                    <h4>
                    Senior citizen <br></br>Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn10} alt="" className="img-fluid" />
                    <h4>
                    Diabetic <br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn6} alt="" className="img-fluid" />
                    <h4>
                    Comprehensive <br></br> Cardiac Profile
                    </h4>
                  </div>
                </Sliders>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Reach Us</h4>
                <h5 className="mb-3 text-left text-yellow">Personal Details</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="formdata">
                    <small className="text-light">Name</small>
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="name"
                      {...register("name", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Email</small>
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address!",
                        },
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Mobile</small>
                    <ErrorMessage
                      errors={errors}
                      name="mobile"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="tel"
                      name="mobile"
                      {...register("mobile", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: "Not a valid Phone Number",
                        },
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Designation</small>
                    <ErrorMessage
                      errors={errors}
                      name="designation"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="designation"
                      {...register("designation", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Message</small>
                    <ErrorMessage
                      errors={errors}
                      name="message"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <textarea
                      className="form-control"
                      name="msg"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>
                  <h5 className="mb-3 text-left text-yellow">
                    Company Details
                  </h5>
                  <div className="formdata">
                    <small className="text-light">Company Name</small>
                    <ErrorMessage
                      errors={errors}
                      name="company_name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="company_name"
                      {...register("company_name", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Address</small>
                    <ErrorMessage
                      errors={errors}
                      name="address"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <textarea
                      className="form-control"
                      name="address"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>
                  <div className="formdata">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      onClick="submit_contact();"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
