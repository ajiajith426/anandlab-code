import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import bannerimage from "../../assets/images/inner-banner-2.jpg";
// import prdt_img from "../../assets/images/popular-img-1.jpg";

export default function Packages() {

  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="common-heading cmg-img">
          <span
            className="alphabet-argmnt"
            style={{ background: "#5c2d91", color: "#fff" }}
          >
            {" "}
            J{" "}
          </span>
          <h2>
            {" "}
            <span> Hello! </span> <span className="yelow"> John </span>{" "}
          </h2>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="logout-set text-right">
          <Link to="/">
            {" "}
            <i className="fa fa-power-off" aria-hidden="true"></i> Log Out{" "}
          </Link>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="totl-pkglst">
          <div className="row">
            <div className="col-3">
              <div className="Products-factory-lsts">
                <ul>
                  <li>
                    <Link to="/my-account">
                      {" "}
                      <i className="fa fa-user" aria-hidden="true"></i> Account
                      information{" "}
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/">
                      {" "}
                      <i
                        className="fa fa-pencil-square"
                        aria-hidden="true"
                      ></i>{" "}
                      Update Profile{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i
                        className="fa fa-shopping-cart"
                        aria-hidden="true"
                      ></i>{" "}
                      Orders{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i className="fa fa-reply-all" aria-hidden="true"></i>{" "}
                      Return Orders{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      Address{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i className="fa fa-lock" aria-hidden="true"></i> Change
                      Password{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i className="fa fa-power-off" aria-hidden="true"></i> Log
                      Out{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="Products-factory-functions">
                <div className="row">
                  <div className="col-12">
                    <div className="accnt-heads">
                      <h4>Profile</h4>
                    </div>
                    <div className="acnt-deetils">
                      <ul>
                        <li>
                          <span>
                            <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                            Name :
                          </span>{" "}
                          John
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                            DOB :
                          </span>{" "}
                          18/09/1990
                        </li>
                        <li>
                          <span>
                            <i
                              className="fa fa-envelope-o"
                              aria-hidden="true"
                            ></i>{" "}
                            E-mail :
                          </span>{" "}
                          john@gmail.com
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                            Phone :
                          </span>{" "}
                          1234567890
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
