import { useEffect } from 'react';
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import icon7 from "../../assets/images/icon7.png";
import icon8 from "../../assets/images/icon8.png";
import icon9 from "../../assets/images/icon9.png";
import { Form } from 'react-component-form';
import upload from '../../assets/images/upload.png'

export default function HealthPackages() {
  useEffect(() => {
    document.title = "Health Packages";
    window.scroll(0,0)
  }, []);  
  return (
    <div>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> Patients </li>
                  <li> / </li>
                  <li> Anand Health Packages </li>
                </ul>
                <h1>
                Add booking form in this page Or <br></br>adding the package into the cart
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Our</span> Health Packages{" "}
                </h2>
              </div>
              <div className="special-instruction">
                <p>
                  When your health and lifestyle start moving on top of your
                  priority list, Neuberg Anand Diagnostics emerges as one of the
                  most trusted names in the fields of pathology, advanced
                  diagnostic services, global quality standards and
                  state-of-the-art facilities. With over 48 years of experience,
                  Neuberg Anand Diagnostics is one of leading diagnostic chains.
                  Neuberg Anand Diagnostics brings a generation of advanced yet
                  a ordable healthcare packages designed to suit your needs,
                  with comprehensive and customised AI-based SMART reports to
                  empower your access to quality treatment. ANYTIME. ANYWHERE.
                </p>

                <p>
                  Been having troubles choosing the right healthcare package for
                  you and your loved ones? Well, now you won’t. Neuberg Anand
                  Diagnostics brings to you customised health packages,
                  specifically designed to suit your health and lifestyle needs.
                </p>
                <br></br>
                <h3>
                  The Health Check Package most Suited for you & Your Loved Ones
                </h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                      Anand Basic Health Package
                    </a>
                  </li>
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
                      Anand Pro Health Checkup
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile1"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Anand General Health Package
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile2"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Anand Advanced Health Package
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="detilos-expl">
                      <p>
                        Too many things on your mind? Take a deep breath and
                        choose the smartest Basic package, that covers tests on
                        major organs of your body, so that you are prepared for
                        prevention of future diseases way before time.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="detilos-expl">
                      <p>
                        If you think you don’t have the time or the mind space
                        to keep a track on your body’s vital functions, allow us
                        to keep an eye on your organs, and check for your
                        immunity every once in a while.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile1"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="detilos-expl">
                      <p>
                        You have been waiting to entrust your health in the
                        hands of the experts. That’s why we are here for you and
                        we are about to make you stronger!
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile2"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="detilos-expl">
                      <p>
                        Before you change your dietary patterns or go in for
                        supplements without consultation with your Doctor, walk
                        in for a Advanced package that checks on your vital
                        organs and vitamin levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-lists">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="test-content hidden-sm hidden-xs">
                <div id="table-scroll" className="table-scroll">
                  <div className="table-wrap">
                    <table className="main-table">
                      <thead>
                        <tr>
                          <th scope="col" className="heading2 text-left">
                            <span>Health Checkup</span>
                          </th>
                          <th scope="col" className="heading2">
                            <span>Basic</span>
                          </th>
                          <th scope="col" className="heading2">
                            <span>Pro</span>
                          </th>
                          <th scope="col" className="heading2">
                            <span>General</span>
                          </th>
                          <th scope="col" className="heading2">
                            <span>Advanced</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon1} alt="call" className="img-fluid" />{" "}
                            Liver Function Test
                            <span>
                              SGOT, SGPT, GGTP, Bilirubin, ProteinTotal with AG
                              ratio, Alkaline Phosphatase.
                            </span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon2} alt="call" className="img-fluid" />{" "}
                            Thyroid Profile Test <span>TSH, FT4</span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon3} alt="call" className="img-fluid" />{" "}
                            Lipid Profile Test
                            <span>
                              Total Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated LDL cholesterol to HDL-cholesterol
                              Ratio
                            </span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon4} alt="call" className="img-fluid" />{" "}
                            Kidney Function Test
                            <span>
                              Serum - Urea, Creatinine, Uric Acid,
                              Electrolytes,BUN
                            </span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon5} alt="call" className="img-fluid" />{" "}
                            CBC<span>(Complete Blood Count)</span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon6} alt="call" className="img-fluid" />{" "}
                            CRP<span>(Creactive Protein)</span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon7} alt="call" className="img-fluid" />{" "}
                            Diabetic Screening
                            <span>Fasting Blood Sugar, HbA1c</span>
                          </th>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon8} alt="call" className="img-fluid" />{" "}
                            Vitamin profile<span>Vitamin D, Calcium</span>
                          </th>
                          <td>
                            {" "}
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon9} alt="call" className="img-fluid" />{" "}
                            Activ Vitamin B12<span>&nbsp;</span>
                          </th>
                          <td>
                            {" "}
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            {" "}
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                        <tr>
                          <th className="fixed-side">
                            <img src={icon8} alt="call" className="img-fluid" />{" "}
                            Iron profile
                            <span>
                              Serum Iron, UIBC, Ferritin; TIBC & Transferrin
                              saturation by calculation
                            </span>
                          </th>
                          <td>
                            {" "}
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            {" "}
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            <div className="dot ntvable"></div>
                          </td>
                          <td>
                            <div className="dot"></div>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="fixed-side gray-bg">MRP</th>
                          <td className="purple-bg1">₹ 4520</td>
                          <td className="purple-bg1">₹ 6230</td>
                          <td className="purple-bg1">₹ 7620</td>
                          <td className="purple-bg1">₹ 8790</td>
                        </tr>
                        <tr>
                          <th className="fixed-side gray-bg">
                            Discount percentage
                          </th>
                          <td className="purple-bg2">75%</td>
                          <td className="purple-bg2">75%</td>
                          <td className="purple-bg2">75%</td>
                          <td className="purple-bg2">75%</td>
                        </tr>
                        <tr>
                          <th className="fixed-side gray-bg">
                            Final Offer price
                          </th>
                          <td className="purple-bg3">₹ 1199</td>
                          <td className="purple-bg3">₹ 1599</td>
                          <td className="purple-bg3">₹ 1999</td>
                          <td className="purple-bg3">₹ 2299</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='book-aptmentfrm'>
      <div className="container">
      <div className="row align-items-center"> 
      <div className='col-lg-5'>

     
      </div> 
      <div className='col-lg-7'>
      <div className="poitment-form">
      <h4>Book your package now</h4>  
      <div className='banner-form'>
            <Form>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12"> 
                        <div className="form-data">
                            <input className="input100" type="text" name='name' placeholder="Name" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="tel" pattern="/^\d{10}$/" name='mobile' placeholder="Mobile" required/> 
                        </div>
                        <div className="form-data">
                        <select className="form-control " id="location" name="location">
	                        <option value="">Select Your Location</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mangalore">Mangalore</option> 
                            <option value="Rest of Bangalore">Rest of Bangalore</option> 
	                        </select>
                        </div> 
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Select Your Package" required/> 
                        </div> 
                        <div className="form-data upload-btn-wrapper">
                            <button className="btn">Upload Prescription<img src={upload}/> </button>
                            <input type="file" name="reportFile"  required/>
                        </div> 
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Choose your test type" required/> 
                        </div> 
                        <div className="form-data sbm text-center">
                            <input type="submit" name="submit" value="SUBMIT" required/>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
      </div>  
      </div>
      </div>
      </div>
      </section>


    </div>
  );
}
