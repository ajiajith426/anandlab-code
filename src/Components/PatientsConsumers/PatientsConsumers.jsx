import { useEffect } from "react";
import Sliders from "react-slick";
import InnerCommonBanner from "./Sections/InnerCommonBanner";
import paticon1 from "../../assets/images/pat-icon-1.png";
import paticon2 from "../../assets/images/pat-icon-2.png";
import paticon3 from "../../assets/images/pat-icon-3.png";
import paticon4 from "../../assets/images/pat-icon-4.png";
import paticon5 from "../../assets/images/pat-icon-5.png";
import paticon6 from "../../assets/images/pat-icon-6.png";
import consumerimg2 from "../../assets/images/map-1.png";
import consumerimg3 from "../../assets/images/consumerimg3.jpg";
import { Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Moment from "moment";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function Solutions() {
  useEffect(() => window.scroll(0, 0) , [])
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(setLoading(true)) 
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("page_url",window.location.href);
    formdata.append("email", data.email); 
    formdata.append("mobile", data.mobile);
    formdata.append("dob", Moment(data.date).format("DD-MM-YYYY"));
    formdata.append("gender", data.gender);
    formdata.append("test_for_home_collection", data.test_for_home_collection);
    formdata.append(
      "upload_prescription",
      data.upload_prescription[0],
      data.upload_prescription[0].name
    );
    formdata.append(
      "preferred_date_1",
      Moment(data.preferred_date_1).format("DD-MM-YYYY")
    );
    formdata.append(
      "preferred_date_2",
      Moment(data.preferred_date_2).format("DD-MM-YYYY")
    );
    formdata.append("preferred_time", data.preferred_time);
    formdata.append("address", data.address);
    formdata.append("pincode", data.pincode);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.PATIENTS_CONSUMERS, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Errors === false) {
          dispatch(setLoading(false))
          FormResponse()
          reset();
        } else {
          dispatch(setLoading(true))
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    document.title = "Patient Care";
    // window.scroll(0, 0);
  }, []);
  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 6,
    focusOnSelect: true,
    autoplay: true,
    dots: false,
    arrows: true,
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
      <InnerCommonBanner />

      <section className="pat-con">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Patient </span> Care{" "}
                </h2>
              </div>
              <p>
                Patient Care has always been the primary goal for all of us at
                Anand Diagnostic Laboratory. Apart from being of assistance
                during illness, we also strive to provide robust preventive
                healthcare services in the form of wellness packages to ensure
                that our patrons can identify complications early and address
                them before they become an issue.
              </p>
              <Sliders {...consumeing} className="consumeing">
                <div className="box-cos">
                  <img src={paticon1} alt="" className="img-fluid" />
                  <h4>
                    Basic Health <br></br> Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon2} alt="" className="img-fluid" />
                  <h4>
                    Executive/master<br></br> Health Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon3} alt="" className="img-fluid" />
                  <h4>
                    Check-up <span>(Below 12 years of age)</span>
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon4} alt="" className="img-fluid" />
                  <h4>
                    Pre-Marital <br></br>Health Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon1} alt="" className="img-fluid" />
                  <h4>
                    Bone <br></br>Health Package
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon6} alt="" className="img-fluid" />
                  <h4>
                    Senior citizen <br></br> Health Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon1} alt="" className="img-fluid" />
                  <h4>
                    Basic Health <br></br> Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon2} alt="" className="img-fluid" />
                  <h4>
                    Executive/master<br></br> Health Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon3} alt="" className="img-fluid" />
                  <h4>
                    Check-up <span>(Below 12 years of age)</span>
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon4} alt="" className="img-fluid" />
                  <h4>
                    Pre-Marital <br></br>Health Check-up
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon1} alt="" className="img-fluid" />
                  <h4>
                    Bone <br></br>Health Package
                  </h4>
                </div>
                <div className="box-cos">
                  <img src={paticon6} alt="" className="img-fluid" />
                  <h4>
                    Senior citizen <br></br> Health Check-up
                  </h4>
                </div>
              </Sliders>
            </div>
          </div>
        </div>
      </section>

      <section className="pat-con pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="contnt-set">
                <div className="common-heading">
                  <h2> 'Giving your Sample' </h2>
                </div>
                <p>
                  Giving a sample for testing is the primary experience for any
                  individual who enters a laboratory. Usually this experience
                  involves a drastic change to one’s schedule, an out of the way
                  trip to the Laboratory, and a considerable time waiting for
                  one’s turn. What if this experience was made simpler?
                </p>
                <div className="step-pairing">
                  Anand Diagnostic Laboratory{" "}
                  <span>
                    has multiple solutions to make the diagnostic experience
                    more relaxed for our patients and consumers.{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="imge-set">
                <img src={consumerimg3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row align-items-center pt-5">
            <div className="col-lg-6">
              <div className="imge-set">
                <img src={consumerimg2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contnt-set">
                <div className="common-heading">
                  <h2>
                    {" "}
                    <span>'Multiple Collection Centres </span> across Bangalore'{" "}
                  </h2>
                </div>
                <p>
                  The traffic of Bangalore is a constant bother to its residents
                  due to which, travelling from one part of the city to another
                  has become very difficult. In order to make the diagnostic
                  experience easier for our patrons, we have multiple collection
                  centres spread across the city, with plans to expand into many
                  more areas of Bangalore in the near future. Now traffic woes
                  will no longer come in the way of your diagnostic healthcare
                  needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hme-colcton">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="anddn-lab">
                <div className="common-heading lite">
                  <h2> Anand @ Home Sample Collection </h2>
                </div>
                <p>
                  At ADL, we understand that many of our patrons may find it
                  difficult to travel to their nearest collection centre for
                  their diagnostic tests. To assist such individuals, ADL has
                  launched the 60 minutes home collection facility on
                  appointment.
                </p>
                <p>
                  Our team of home collection personnel are highly trained
                  phlebotomists equipped to deliver the best service.
                </p>
                <p>
                  For more information on, and to book a home collection call
                  18004251974
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="anddn-labfrm">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="form-data col-lg-6">
                      <small className="text-light">Name</small>
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="text"
                        name="name"
                        {...register("name", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
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
                        className="input100"
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
                    <div className="form-data col-lg-6">
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
                        className="input100"
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
                    <div className="form-data col-lg-6">
                      <small className="text-light">Date of Birth</small>
                      <ErrorMessage
                        errors={errors}
                        name="dob"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="date"
                        name="date"
                        {...register("dob", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Gender</small>
                      <ErrorMessage
                        errors={errors}
                        name="gender"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="text"
                        name="gender"
                        {...register("gender", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">
                        Test For Home Collection
                      </small>
                      <ErrorMessage
                        errors={errors}
                        name="test_for_home_collection"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="text"
                        name="test_for_home_collection"
                        {...register("test_for_home_collection", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Upload Prescription</small>
                      <ErrorMessage
                        errors={errors}
                        name="upload_prescription"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="file"
                        name="upload_prescription"
                        {...register("upload_prescription", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Preferred Date One</small>
                      <ErrorMessage
                        errors={errors}
                        name="preferred_date_1"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="date"
                        name="preferred_date_1"
                        {...register("preferred_date_1", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Preferred Date Two</small>
                      <ErrorMessage
                        errors={errors}
                        name="preferred_date_2"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="date"
                        name="preferred_date_2"
                        {...register("preferred_date_2", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Preferred Time</small>
                      <ErrorMessage
                        errors={errors}
                        name="preferred_time"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="time"
                        name="preferred_time"
                        {...register("preferred_time", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Address</small>
                      <ErrorMessage
                        errors={errors}
                        name="address"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="text"
                        name="address"
                        {...register("address", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data col-lg-6">
                      <small className="text-light">Pincode</small>
                      <ErrorMessage
                        errors={errors}
                        name="pincode"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="input100"
                        type="text"
                        name="pincode"
                        {...register("pincode", {
                          required: "This is required.",
                        })}
                      />
                    </div>
                    <div className="form-data text-center col-lg-12">
                      <input type="submit" name="submit" value="SUBMIT" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blood-colleion">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="contnt-set">
                <div className="common-heading">
                  <h2>
                    {" "}
                    <span>“Drive-Through </span>Blood Collection service”{" "}
                  </h2>
                </div>
                <p>
                  The latest service offered by ADL is the revolutionary
                  drive-through blood collection service at Shivajinagar.
                  Inspired by the established drive-through fast food restaurant
                  system across the world, the drive-through blood collection
                  service allows an individual to go through the process of
                  registering for the necessary blood tests and giving the blood
                  sample without having to even get out of their car! This
                  facility, housed in the basement of our new 60,000 Sft
                  premises, has been designed to ensure complete safety and
                  hygiene for our patrons and staff with an efficient
                  ventilation system and a brightly lit, designated phlebotomy
                  section for privacy and cleanliness.
                </p>
                <div className="step-pairing">
                  <span>
                    The Drive-Through Blood Collection Service is operational
                    from{" "}
                  </span>
                  Monday to Saturday, from 7:00AM to 11:00AM.
                </div>
                <div className="cmn-buton">
                  <p>
                    <Link to="/drive-through-blood-collection">Book Now</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="imge-set">
                <iframe
                  width="100%"
                  height="520"
                  src="https://www.youtube.com/embed/shaQf7d_EZQ"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='loyality-program'>
        <div className="container">
        <div className="row">
            
            <div className="col-lg-5">

            </div>
            <div className="col-lg-7">
                <div className="loyalty-progrm text-left">
                <div className="common-heading lite"><h2> Loyalty Program </h2></div>
                    <ul>
                        <li>It is no secret that the success of any establishment is in the hands of its clients. At ADL, the trust of our patrons and their loyalty is our most valuable asset. In order to extend certain value added services to our customers, we have launched the V-card service, which comes with the following benefits among others.</li>
                        <li>10% discount on all bills. (For individuals under 60 years of age. Individuals over 60 are entitled to the standard Senior Citizen discounts of 20%).</li>
                        <li>Prompt attention and priority service at a dedicated counter whenever possible.</li>
                        <li>History/graph of previous results wherever applicable.</li>
                    </ul>
                </div>
            </div>
        </div>    
        </div> 
     </section>  */}

      <section className="report-partion text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2> Getting your Report </h2>
              </div>
              <p>
              Collecting test reports has never been easier. Once ready, all reports are stored in PDF format on our servers. Patrons can log in to our website and download the reports right onto their computers or mobile devices immediately after our doctors release a report. Certain types of reports like Histopathology or Radiology are accompanied by physical material like slides, paraffin blocks, X-Ray films, and so on. These items may be collected from the nearest collection centre upon prior intimation.
              </p>
              <div className="cmn-buton">
                <p>
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
