import { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import useTestView from "../../Hooks/useTestView";
import BookedTestSliders from "../Home/Sections/BookedTestSliders";
import PackagesSliders from "../Home/Sections/PackagesSliders";
import CartBtn from "./CartBtn";

export default function TestDetails() {
  const { TestId } = useParams();
  const location = useLocation();
  const { mutate, isLoading, data, isSuccess } = useTestView()
  useEffect(() => {
    window.scroll(0, 0)
    mutate(TestId)
  }, [TestId]);

  if (isLoading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
  if (isSuccess) return (
    <div>
      <section className="comon-testdetail-banner ned-hght">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="bnr-txt text-left">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li> / </li>
                  <li>
                    <Link to="/for-patient">Book a Test</Link>
                  </li>
                  <li> / </li>
                  <li>
                    <Link to="/">{data.data?.test?.TestName}</Link>
                  </li>
                </ul>
                <h1>
                  Book Lab Tests <span>Anywhere - Anytime</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testing-details text-left border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="commentestng-heads">
                <h2>
                  <span>Test ID - {data.data.test.TestId}  | Dos Code - {data.data.test.DosCode}</span>
                 {data.data.test.TestName}
                </h2>
              </div>
              <div className="testng-details">
                <ul>
                  {
                    data.data.test.BasicInstruction !== ' ' ?
                      <li>
                        <img src={require('../../assets/images/testing-icon-1.png')} alt="call" className="img-fluid" />
                        <span>Basic Instruction </span>
                        {data.data.test.BasicInstruction}
                      </li> : ""
                  }
                  <li>
                    <img src={require('../../assets/images/testing-icon-2.png')} alt="call" className="img-fluid" />
                    <span>Test Shedule</span>
                    {data.data.test.TestSchedule}
                  </li>
                  <li className="colap-seing">
                    <img src={require('../../assets/images/testing-icon-3.png')} alt="call" className="img-fluid" />
                    <h5>
                      <span className="strke ml-2">
                      </span>&#8377; {data.data.test.TestPrice}
                    </h5>
                  </li>
                  <li>
                    <img src={require('../../assets/images/testing-icon-4.png')} alt="call" className="img-fluid" />
                    This test is
                    {data.data.test.HomeCollection === "N" ? " Not" : null}
                    &nbsp;eligible for Home Collection.
                  </li>
                  <li>
                    <img src={require('../../assets/images/testing-icon-5.png')} alt="call" className="img-fluid" />
                    <span>Home Collection</span>
                    {data.data.test.HomeCollection === "Y" ? "Available" : "Not available"}
                  </li>
                </ul>
              </div>
              <div className="case">
                {data.data.test.HomeCollection === "Y" ?
                  <b className="text-orange d-flex mb-3"><i className="fa fa-info-circle pr-2"></i><small>Additional charges for home collection is applicable</small></b>
                  : ""}
                <p className="d-flex">
                  <CartBtn testData={data.data.test} />
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              {
                data.data.sub_test.length !== 0 ?
                  <div className="availab-lity">
                    <h4>Available Sub Tests </h4>
                    <ul>
                      {
                        data.data.sub_test.map((subTest, i) => (
                          <li key={i}>{subTest.SubTestName}</li>
                        ))
                      }
                    </ul>
                  </div>
                  : null
              }

            </div>
          </div>
          {
            data.data.test.SpecialInstructionsForPatient !== "" || data.data.test.SpecialInstructionsForCorporates !== "" || data.data.test.SpecialInstructionsForDoctors !== "" ?
              <div className="special-instruction">
                <h3>Special Instructions</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {
                    data.data.test.SpecialInstructionsForPatient !== "" ?
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          For Patient
                        </a>
                      </li>
                      : ""
                  }
                  {
                    data.data.test.SpecialInstructionsForCorporates !== "" ?
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          For Corporates
                        </a>
                      </li>
                      : ""
                  }
                  {
                    data.data.test.SpecialInstructionsForDoctors !== "" ?
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          For Doctors
                        </a>
                      </li>
                      : ""
                  }
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="detilos-expl">
                      <p>{data.data.test.SpecialInstructionsForPatient}</p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="detilos-expl">
                      <p>{data.data.test.SpecialInstructionsForCorporates}</p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="detilos-expl">
                      <p>{data.data.test.SpecialInstructionsForCorporates}</p>
                    </div>
                  </div>
                </div>
              </div>
              : null
          }
        </div>
      </section>
      {
        location.pathname.split('/')[1] === 'package' ?
          <PackagesSliders title="Other related" subTitle="HEALTH Package" />
          :
          <BookedTestSliders title="Other related" subTitle="Tests" />
      }
    </div>
  )
}
