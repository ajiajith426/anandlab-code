import { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-7.webp"; 
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { FormResponse } from "../../../src/Helpers/FormResponse";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function ClinicalLabManagement() {
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
    formdata.append("doctors_name", data.doctors_name);
    formdata.append("specialization", data.specialization);
    formdata.append("associated_hospitals_clinics", data.associated_hospitals_clinics);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("message", data.message);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(API_URL.CLINICAL_LAB_MANAGEMENT, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.Errors === false) {
          dispatch(setLoading(false))
          reset()
          FormResponse()
        }
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    document.title = "Clinical Lab Management";
    window.scroll(0, 0);
  }, []);
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
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> Doctors </li>
                  <li> / </li>
                  <li> Clinical Lab Management </li>
                </ul>
                <h1>
                  Intelligence in pattern recognition<br></br> for autoimmune
                  diagnosis.
                </h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Clinicians &amp;</span> Physicians
                </h2>
                <p className="pr-5">
                  Our qualified and ardent team of doctors and technologists
                  provide strong support to the medical fraternity with the
                  decisive motive being patient care. With our extensive test
                  menu, state-of-of-the-art technology, and fast turn around
                  time, Clinicians and Physicians can expect nothing less than
                  the best in class diagnostic tools to aide in delivering
                  patient care. Our team of experienced and decorated doctors
                  are always eager to discuss the clinical implications of a
                  diagnostic result with clinicians to assist in identifying the
                  right course of treatment.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="green-bg ps-rel animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Contact us</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="formdata">
                      <small className="text-light">Doctor Name</small>
                      <ErrorMessage
                        errors={errors}
                        name="doctors_name"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="text"
                        name="doctors_name"
                        {...register("doctors_name", {
                          required: "This is required.",
                        })}
                      /> 
                  </div> 
                  <div className="formdata">
                      <small className="text-light">Specialization</small>
                      <ErrorMessage
                        errors={errors}
                        name="specialization"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="text"
                        name="specialization"
                        {...register("specialization", {
                          required: "This is required.",
                        })}
                      /> 
                  </div>  
                  <div className="formdata">
                      <small className="text-light">Associated hospitals clinics</small>
                      <ErrorMessage
                        errors={errors}
                        name="associated_hospitals_clinics"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="text"
                        name="associated_hospitals_clinics"
                        {...register("associated_hospitals_clinics", {
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
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="email"
                        name="email"
                        {...register("email", {
                          required: "This is required.",
                          pattern:{
                            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message:'Invalid email address!'
                          }
                        })}
                      /> 
                  </div>
                  <div className="formdata">
                      <small className="text-light">Mobile</small>
                      <ErrorMessage
                        errors={errors}
                        name="mobile"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="tel"
                        name="mobile"
                        {...register("mobile", {
                          required: "This is required.",
                          pattern:{
                            value:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                            message:'Not a valid Phone Number'
                          } 
                        })}
                      /> 
                  </div>
                  <div className="formdata">
                      <small className="text-light">Message</small>
                      <ErrorMessage
                        errors={errors}
                        name="message"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
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
                  <div className="formdata">
                    <input type="submit" name="submit" value="Submit"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-presence">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-title drk animated fadeInUp mb-3">
                <h4>Our Presence</h4>
              </div>

              <div className="row col-lg-8 mb-5">
                <div className="lst-lction">
                  <h5 className="text-yellow">Bangalore</h5>
                  <ul>
                    <h6 className="map-ngin">North</h6>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">HBR Layout</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Peenya</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">R. T. Nagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Sanjayanagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Yelahanka</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6 className="map-ngin">East</h6>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">BTM Layout</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">HSR Layout</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Hoodi</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Kasturi Nagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Koramangala</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6 className="map-ngin">West</h6>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Kengeri</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Nagarbhavi</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Rajajinagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">RR Nagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Vijayanagar</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6 className="map-ngin">South</h6>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Banashankari</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Bannergatta Road</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Jayanagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">J. P. Nagar</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6 className="map-ngin">Central</h6>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Shivaji Nagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Hanumanth Nagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Indiranagar</Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Vyalikaval</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row col-lg-8">
                <div className="lst-lction fl-wdth text-left">
                  <h5 className="text-yellow">Rest in karnataka</h5>
                  <ul>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Hubli </Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Kanakpura Road </Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Mysuru </Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Shivamogga </Link>
                    </li>
                    <li>
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      <Link to="/">Vidyaranyapura</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
