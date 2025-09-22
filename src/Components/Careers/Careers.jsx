import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import { useJobs } from "../../Hooks";
import { API_URL } from "../../Redux/Constant/ApiRoute";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers";
    window.scroll(0, 0);
  }, []);
  const  jobsPosts = useJobs()
  console.log("jobsPosts", jobsPosts);
  const  navigate = useNavigate()
 
  if (!jobsPosts.isLoading) return (
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
                    <li> Careers </li>
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

      <section className="people-function phsiyo-therphy carer-boxes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Current</span> Openings{" "}
                </h2>
              </div>
              <p>
                We are always open to talking to qualified people for
                appropriate career openings at ADL. From time to time, we also
                advertise in local dailies for specific positions. Every
                employee at ADL has been carefully selected to be part of a team
                that is constantly striving to improve customer experience
                through excellent diagnostic services. If you believe you have
                the right skills, experience and positive attitude to be part of
                a best-in-class laboratory at Bangalore, feel free to forward
                your resume. If your resume suits our requirement, you will be
                shortlisted for further discussion.
              </p>
              <br />
            </div>
            {
             jobsPosts.data.map(item => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={item.id}>
                  <div className="car-bxo mb-4">
                    <h3>
                     {item.title}<span>{item.code}</span>
                    </h3>
                    <h4>
                      Location : <span> {item.location} </span>
                    </h4>
                    <h4>
                      Experience : <span> {item.experience} </span>
                    </h4>
                    <h4>
                      Requirement : <span> {item.no_of_requirement  } </span>
                    </h4>
                    <p className="d-flex">
                      <Link to={`/join-oppourtunities/${item.id}`}> Apply Now </Link>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
