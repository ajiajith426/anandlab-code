import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-14.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useDispatch } from "react-redux";
import { feedbackQuestionAnswers, slugify } from "../../utils";
import axios from "axios";

export default function FeedbackB2B() {
    const path = useLocation();
    const queryParams = new URLSearchParams(path.search)
    const patientname = queryParams.get("patientname")
    const labid = queryParams.get("labid")
    const mobile= queryParams.get("mobile")
    const branch= queryParams.get("branch")
    const defaultValue  ={
      name:patientname,
      reg_no:labid,
      mobile:mobile,
      branch:branch
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
            type:'feedBack'
        }
        dispatch(setLoading(true))
        console.log("data", data);
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
                                        <li> Feedback  </li>
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
                    <center className="legacy-care mb-4">
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
                    </center>
                    <hr />
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="row align-items-center">
                            <div className="col-lg-4 h-100">
                                <div className="green-bg animated fadeInRight h-100">
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
                                        <small className="text-light">Registration Number</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="reg_no"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="text"
                                            name="reg_no"
                                            {...register("reg_no", {
                                                required: "This is required.",
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
                                                pattern: {
                                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                                    message: 'Not a valid Phone Number'
                                                }
                                            })}
                                        />
                                    </div>    
                                    <div className="formdata">
                                        <small className="text-light">Branch</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="branch"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="text"
                                            name="branch"
                                            {...register("branch", {
                                                required: "This is required.",
                                            })}
                                        />
                                    </div>                               
                                    <div className="formdata m-0">
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
                                            className="form-control m-0"
                                            name="msg"
                                            id="msg"
                                            {...register("remark", {
                                                required: "This is required.",
                                            })}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 h-100">
                                <div className="green-bg pb-0 px-4 pt-4 h-100">
                                    {feedbackQuestionAnswers.map((item, i) => (
                                        <div className="pb-4" key={Math.random()}>
                                            <div className="row border bg-white rounded align-items-center m-0" >
                                               <div className="col-sm-12 text-dark p-2 fw-bold d-flex border-bottom"><b className="mr-1">{i + 1}.</b> <span>{item?.question}</span></div>
                                               {item?.answers?.map((answers, i) => (
                                                    <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0">
                                                        <input type="radio" {...register(slugify('QA_', item?.question), { required: "This is required." })} name={slugify(`QA_`, item?.question)} id={i + "QA"} className="mr-2" required value={answers} />{answers}</label>
                                               ))}
                                               {/*   <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Exceeding Expectations" />Exceeding Expectations</label>
                                                <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Meet Expectations" />Meet Expectations</label>
                                                <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Below Expectations" />Below Expectations</label> */}
                                            </div>
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
            </section>
        </div>
    );
}