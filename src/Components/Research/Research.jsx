import { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-9.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function Research() {
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
    formdata.append("city", data.city);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("message", data.message);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(API_URL.RESEARCH, requestOptions)
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
    document.title = "Research";
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
                  <li> Research </li>
                </ul>
                <h1>
                  Affirmative & accurate <br></br>solutions!
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
            <div className="col-lg-8">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Our </span> Resources
                </h2>
                <p>
                  At ADL, we have two strong resources that are highly
                  beneficial to those conducting medical research – the
                  extensive experiential knowledge of our doctors; and our wide
                  menu that ranges from routine to highly specialised diagnostic
                  tests. If you are a Clinical Research Organisation or a
                  student who would like to utilise our services for research
                  purposes, fill out the form and we will get in touch with you.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="green-bg ps-rel animated fadeInRight">
                <h4 className="mb-3 text-center text-white">
                  Have any Queries?
                </h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="formdata">
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
                      <small className="text-light">City</small>
                      <ErrorMessage
                        errors={errors}
                        name="city"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                      <input
                        className="form-control jsrequired"
                        type="text"
                        name="city"
                        {...register("city", {
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
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
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
