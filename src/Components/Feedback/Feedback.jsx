import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-14.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useDispatch } from "react-redux";
import { questions, slugify } from "../../utils";
import axios from "axios";

export default function Feedback() {
  const path = useLocation();
  const queryParams = new URLSearchParams(path.search)
  const patientname = queryParams.get("patientname")
  const labid = queryParams.get("labid")
  const defaultValue  ={
    name:patientname,
    corporate_id:labid
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues:defaultValue
  });

  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      type:'feedback-b2b'
  }
    dispatch(setLoading(true))
    data['page_url'] = window.location.href
    axios.post(API_URL.FEEDBACKS, data).then(res => {
      if (res.data.Errors === false) {
        dispatch(setLoading(false))
        reset()
        FormResponse()
      }
    }).catch(error => console.log('error', error));
  }

  useEffect(() => {
    document.title = "Feedback";
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
                    <li> Patients </li>
                    <li> / </li>
                    <li> Feedback B2B</li>
                  </ul>
                  <h1>
                    Service with commitment<br></br> and competence!
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
            <center className="mb-4">
              <div className="legacy-care">
                <div className="common-heading">
                  <h2>
                    We value <span className="yelow">your feedback</span>
                  </h2>
                </div>
                <p>
                We strive to provide you with the best service possible, and your feedback is crucial for us to serve 
                you better.  Your insights will help us improve and ensure that we exceed your expectations.
                </p>
                {/* <p>
                Remove Thank you for your time and for choosing Neuberg Anand. We look forward to hearing your 
                thoughts!
                </p> */}
                <div className="cmn-buton">
                  <p>
                    <Link to='tel:18004251974'>Call Back</Link>
                  </p>
                </div>
              </div>
            </center>

            <div className="col-12">
              <div className="green-bg animated fadeInRight">
                <form onSubmit={handleSubmit(onSubmit)} className="row"> 
                  <div className="col-lg-4">
                    <div>
                      <div className="formdata">
                        <small className="text-light">Name of the organization</small>
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
                        <small className="text-light">B2B Corporate ID</small>
                        <ErrorMessage
                          errors={errors}
                          name="corporate_id"
                          render={({ message }) => (
                            <small className="text-danger ml-2">
                              * {message}
                            </small>
                          )}
                        />
                        <input
                          className="form-control jsrequired"
                          type="text"
                          name="corporate_id"
                          {...register("corporate_id", {
                            required: "This is required.",
                          })}
                        />
                      </div>
                      <div className="formdata">
                        <small className="text-light">Remarks</small>
                        <ErrorMessage
                          errors={errors}
                          name="remark"
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
                          {...register("remark", {
                            required: "This is required.",
                          })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="bg-white rounded">
                      {questions.map((item, i) => (
                        <div className="row border-bottom rounded qa-row align-items-center  m-0 small" key={Math.random()}>
                          <div className="col-sm-9 p-0 my-2 my-sm-0 text-dark p-0"><b className="mr-1">{i + 1}.</b> <span>{item}</span></div>
                          <label forHtml={i + "QA"} className="col p-0 m-0"><input type="radio" value={1} {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required />Yes</label>
                          <label forHtml={i + "QA"} className="col p-0 m-0"><input type="radio" value={0} {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required />No</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="px-5 btn-primary border border-light mt-3"
                      />
                    </div>
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