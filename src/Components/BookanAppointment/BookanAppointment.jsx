import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-component-form";
import upload from "../../assets/images/upload.png";
import InnerCommonBanner from "./Sections/InnerCommonBanner";
import videoBg from "../../assets/images/appointment.jpg";
import playButton from "../../assets/images/play-icon.png";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";
import { FormResponse } from "../../Helpers/FormResponse";

export default function BookanAppointment() {
  useEffect(() => {
    document.title = "Book an Appointment";
    window.scroll(0, 0);
  }, []);
  const handleSubmit = (formData, formElement) => {
    axios.post(API_URL.BOOK_AN_APPOINTMENT, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      FormResponse()
      formElement.reset()
    }).catch((error) => {
      console.log(error.message)
    });
  }
  return (
    <div>
      <InnerCommonBanner />

      <section className="blood-colleion">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contnt-set">
                <div className="common-heading">
                  <h2> Affordable And Convenient Lab Tests</h2>
                </div>
                <p>
                  Anand Diagnostic Laboratory being an NABL accredited
                  laboratory offers a hassle-free diagnostic service at both our
                  state of the art labs & from the comfort of your home.
                  <br />
                  <br />
                  If you wish to avail our "Anand@Home - Home Collection
                  Service", our team of highly trained phlebotomists will
                  deliver the best service from the comfort & safety of your
                  home. <br />
                  <br />
                  Additionally our customers can also avail the latest service
                  offered by ADL - The revolutionary drive-through blood
                  collection service at Shivajinagar. This will allow an
                  individual to go through the process of registering for the
                  necessary blood tests and giving the blood sample without
                  having to even get out of their car!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="testivideo-section">
                <img src={videoBg} alt="" className="img-fluid" />
                <div className="plying-btn text-center">
                  <a href="#"  >
                    <img src={playButton} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-aptmentfrm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="poitment-form">
                <h4>Book your appointment today</h4>
                <div className="banner-form">
                  <Form onSubmit={handleSubmit}>
                    <div className="frm-fields row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-data">
                          <input
                            className="input100"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-data">
                          <input
                            className="input100"
                            type="tel"
                            pattern="/^\d{10}$/"
                            name="mobile"
                            placeholder="Mobile"
                            required
                          />
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
                          <input
                            className="input100"
                            type="text"
                            name="test_id"
                            placeholder="Select Your Test"
                            required
                          />
                        </div>
                        <div className="form-data upload-btn-wrapper">
                          <button className="btn">
                            Upload Prescription
                            <img src={upload} alt="img" />
                          </button>
                          <input type="file" name="file" required />
                        </div>
                        <div className="form-data">
                          <input
                            className="input100"
                            type="text"
                            name="test_type"
                            placeholder="Choose your test type"
                            required
                          />
                        </div>
                        <div className="form-data sbm text-center">
                          <input
                            type="submit"
                            name="submit"
                            value="SUBMIT"
                            required
                          />
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

      <section className="getng-reprt">
        <div className="container">
          <div className="distngt-strctre">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <h4>Getting your Report</h4>
                <p>
                  Collecting of test reports has never been easier. - Once
                  ready, Users can log in to our website and download the
                  reports right on to their computers or mobile devices
                  immediately after our doctors release a report.
                </p>
              </div>
              <div className="col-lg-3 text-right">
                <div className="cmn-buton">
                  <p>
                    {/* <Link to="/reports"> */}
                    <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public
" target="_blank">
                      Download Report
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
