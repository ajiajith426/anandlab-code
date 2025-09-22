import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-17.webp";
import { ErrorMessage } from "@hookform/error-message";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { CareerResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useJobDetails } from "../../Hooks";
import { useForm } from "react-hook-form";  
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function Career(route) {
  const { id } = useParams();
  const { data : job, isLoading } = useJobDetails(id)
  const { register, handleSubmit, formState: { errors },reset } = useForm({ 
    resolver: yupResolver(
      Yup.object().shape({
        name      : Yup.string().required(),
        email     : Yup.string().required(),
        mobile    : Yup.string().matches(/^[6-9]\d{9}$/).required(),
        chooseFile: Yup.mixed().required()
                .test("type","PDF Only",(val) =>  {
                  return val && val.length > 0 && val[0].type === 'application/pdf'
                } )
                .test("fileSize","Very Big File",(val) =>  {
                  return val && val.length > 0 && val[0].size < 200000
                }),
        message: Yup.string().required(),
      })
    )
  })
  const dispatch = useDispatch();
  const onSubmit = (data) => { 
    dispatch(setLoading(true));
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("page_url",window.location.href);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("file", data.chooseFile[0], data.chooseFile[0].name);
    formdata.append("message", data.message);
    formdata.append("job_id", job.department_id); 
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(API_URL.JOB_APPLY, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch(setLoading(false));
        reset();
        CareerResponse();
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    document.title = "Careers";
    window.scroll(0, 0);
  }, []);
 if(!isLoading && job !== undefined) return (
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
                  <li>
                    {" "}
                    <Link to="/reach-us"> Reach us </Link>
                  </li>
                  <li> / </li>
                  <li>
                    {" "}
                    <Link to="/careers"> Careers </Link>
                  </li>
                  <li> / </li>
                  <li> {job.department_name} </li>
                </ul>
                <h1>
                  Your passion, <br />
                  our prospect! Join us!
                </h1>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm carr-eer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="common-heading">
                <h2 className="mb-0">
                  {job.title} <br />
                  <span className="inlne">{job.code}</span>
                </h2>
                <div className="carere-options">
                  <h4>
                    <i className="fa fa-user" aria-hidden="true"></i> Job Title
                    <span> {job.title} </span>
                  </h4>
                  <h4>
                    <i className="fa fa-id-card-o" aria-hidden="true"></i> Job
                    Code <span> {job.code} </span>
                  </h4>
                  <h4>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Job
                    Location <span> {job.location} </span>
                  </h4>
                  <h5>Responsibilities:</h5>
                  <ul>
                    <li>{job.responsibilities}</li>
                  </ul>
                  <h5>Department:</h5>
                  <p>{job.department_name}</p>
                  <h5>Qualification:</h5>
                  <p>{job.qualification}</p>
                  <h5>Experience:</h5>
                  <p>{job.experience}</p>
                  <h5>No Of Requirement:</h5>
                  <p>{job.no_of_requirement}</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">
                  Apply for this Position
                </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="formdata">
                    <small className="text-light">Name</small>
               
                    <input
                      className={`form-control jsrequired input1001 ${errors.name && 'border-danger border'}`}
                      type="text"
                      name="name"
                      {...register("name")}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Email</small> 
                    <input
                      className={`form-control jsrequired input1001 ${errors.email && 'border-danger border'}`}
                      type="email"
                      name="email"
                      {...register("email")}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Mobile</small> 
                    <input
                      className={`form-control jsrequired input1001 ${errors.mobile && 'border-danger border'}`}
                      type="tel"
                      name="mobile"
                      {...register("mobile")}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Upload Resume</small> 
                    <input
                      className={`form-control jsrequired input1001 ${errors.chooseFile && 'border-danger border'}`}
                      type="file"
                      name="chooseFile"
                      {...register("chooseFile")}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Message</small> 
                    <textarea
                      className={`form-control jsrequired input1001 ${errors.message && 'border-danger border'}`}
                      name="message"
                      id="msg"
                      {...register("message")}
                    ></textarea>
                  </div>

                  <div className="formdata">
                    <input type="submit" name="submit" value="Apply Now" />
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
