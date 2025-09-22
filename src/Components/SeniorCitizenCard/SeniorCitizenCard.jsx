import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import './SeniorCitizenCard.css';
import ReCAPTCHA from 'react-google-recaptcha';
import callM from "../../assets/images/SeniorCitizenCardImages/callM.png";
import ShareDetails from "../../assets/images/SeniorCitizenCardImages/ShareDetails.png";
import Reports from "../../assets/images/SeniorCitizenCardImages/Reports.png";
import OVisits from "../../assets/images/SeniorCitizenCardImages/OVisit.png"
import ScheduleTest from "../../assets/images/SeniorCitizenCardImages/ScheduleTest.png";
import Samples from "../../assets/images/SeniorCitizenCardImages/Samples.png";
import LaughingCouple from '../../assets/images/SeniorCitizenCardImages/LaughingCouple.png';
import cardpdf from "../../assets/doc/Elder-care-card.pdf";
import ElderCare from "../../assets/images/SeniorCitizenCardImages/ElderCare.png";
import PersonalConcierge from "../../assets/images/SeniorCitizenCardImages/PersonalConcierge.png";
import SafeAndSecured from "../../assets/images/SeniorCitizenCardImages/SafeAndSecured.png";
import PersonalReminders from "../../assets/images/SeniorCitizenCardImages/PersonalReminders.png";
import BenifitsSCImage from "../../assets/images/SeniorCitizenCardImages/BenifitsSC.png";
import OffersAndDiscount from "../../assets/images/SeniorCitizenCardImages/OffersAndDiscount.png";
import VoiletTick from "../../assets/images/SeniorCitizenCardImages/VoiletTick.png";
import HowItWorks from "../HowItWorks/HowItWorks";



export default function SeniorCitizenCard() {
    const [open, setOpen] = useState(true);
    const [Loading, setLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setRecaptchaValue(value);
    };

    const gtmScript1 = document.createElement("script");
    gtmScript1.async = true;
    gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

    const gtmScript2 = document.createElement("script");
    gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

    const gtmScript3 = document.createElement("script");
    gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

    const gtmScript5 = document.createElement("script");
    gtmScript5.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

    const gtmScript8 = document.createElement("script");
    gtmScript8.innerHTML = `
       gtag('config', 'AW-10841898141/QgvjCPu13tMZEJ356LEo', {
    'phone_conversion_number': '+918035287579'
      });
  `;

    const gtmScript4 = document.createElement("script");
    gtmScript4.innerHTML = `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = 'https://www.anandlab.com/anand-at-home-thank-you';
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
          'event_callback': callback
      });
      return false;
    }`;

    // Append the script tags to the head of the document
    document.head.appendChild(gtmScript1);
    document.head.appendChild(gtmScript2);
    document.head.appendChild(gtmScript3);
    document.head.appendChild(gtmScript4);
    document.head.appendChild(gtmScript5);
    document.head.appendChild(gtmScript8);

    const gtag_report_conversion = (url) => {
        const callback = () => {
            if (typeof (url) !== 'undefined') {
                window.location = url;
            }
        };
        window.gtag('event', 'conversion', {
            'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
            'event_callback': callback
        });
    };

    const handleClick = (event, url) => {
        event.preventDefault();
        const gtag_report_conversion = (url) => {
            const callback = () => {
                if (typeof (url) !== 'undefined') {
                    window.location = url;
                }
            };
            window.gtag('event', 'conversion', {
                'send_to': 'AW-10841898141/3OhYCLma7MsZEJ356LEo',
                'event_callback': callback
            });
        };

        gtag_report_conversion(url);
    }






    const extractParamsFromURL = (url) => {
        const params = new URLSearchParams(url.split('?')[1]);
        const extractedParams = {};

        for (const [key, value] of params.entries()) {
            extractedParams[key] = value;
        }

        return extractedParams;
    };

    const currentURL = window.location.href;
    const extractedParams = extractParamsFromURL(currentURL);

    const notesValue = Object.entries(extractedParams).map(([key, value]) => `${key}=${value}`).join('&');

    // Convert JavaScript object to JSON string
    const notesDataString = JSON.stringify(notesValue);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                mobile: Yup.string()
                    .matches(/^[6-9]\d{9}$/)
                    .required(),
                // message: Yup.string().required(),
            })
        ),
    });
    const contactUsFrom = (data) => {
        if (recaptchaValue) {
            setLoading(true);
            data.page = "SENIOR CITIZEN CARD";
            data.page_url = window.location.href;
            data.notes = notesDataString;

            gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

            axios.post(API_URL.LANDING_PAGES_FORM, data).then((res) => {
                // FormResponse()
                navigate("/anand-at-home-thank-you");
                setLoading(false);
                reset();
                setOpen(!open);
            });
        } else {
            // Handle the case where reCAPTCHA validation failed
            console.log('Please complete the reCAPTCHA');
            alert('Please check reCAPTCHA');
        }
    };
    useEffect(() => {
        document.title = "Senior Citizen Card";
        window.scroll(0, 0);
        if (window.location.pathname.includes('Bengaluru')) {
            document.head.appendChild(gtmScript4);
            document.head.appendChild(gtmScript5);
            document.head.appendChild(gtmScript8);
        }


    }, []);



    return (
        <div className="SeniorCitizenCard">
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script>
            </Helmet>

            <div className="container pd-4 top-padding">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <p className="orange-col-text mb-3">PRIORITIZING ELDER CARE:</p>

                        <p className="violet-col-text">ENHANCED CARE FOR SENIOR CITIZENS</p>
                    </div>
                </div>
                <div className="row justify-content-center my-3">
                    <div className="col-12 mb-3">
                        {/* <p className="Pn-text">
                            For Senior Citizen Day, we introduce a special card designed to meet the diagnostic needs of our esteemed<br />
                            elders in the community. This initiative underscores our commitment to providing exceptional care and<br />
                            support to our senior citizens.
                        </p> */}

                        <div className="benefits-container py-0 my-2">
                            {/* <div className="benefits-header">
                                <p className="benefits-title">BENEFITS FOR SENIOR CITIZENS</p>
                            </div> */}
                            <div className="benefits-icons">
                                <div className="icon-item">
                                    <img className="PersonalConcierge" src={PersonalConcierge} alt="PC" />
                                    <p>Personal concierge <br /> for senior citizens</p>
                                </div>
                                <div className="icon-item">
                                    <img className="SafeAndSecured" src={SafeAndSecured} alt="SC" />
                                    <p>Safe & Secured <br /> Free Home Sample Collection</p>
                                </div>
                                <div className="icon-item">
                                    <img className="PersonalReminders" src={PersonalReminders} alt="PC" />
                                    <p>Personal reminders <br /> for repeat tests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container mt-5 py-ms-5 py-3 px-0 form_section w-100`}>
                <div className="row g-0">
                    <div className="g-0 col-md-7">
                        <img src={LaughingCouple} alt="Banner image" className={`banner-img img-fluid`} />
                    </div>
                    <div className={`g-0 col-md-5 col-11 ml-auto mr-auto ml-md-auto mr-md-0`}>
                        <div className={`form_module`}>
                            <form onSubmit={handleSubmit(contactUsFrom)}>
                                <div className="form-container p-0">
                                    <h5 className="get-callback-heading">Our partners in health are at your service.</h5>
                                    {errors?.name ? (
                                        <small className="text-danger">
                                            {errors?.name?.message}
                                        </small>
                                    ) : (
                                        ""
                                    )}
                                    <input
                                        {...register("name")}
                                        type="text"
                                        placeholder="Name"
                                        className={`name-number-inp ${errors?.name ? "input-error" : ""}`}
                                    />
                                    {errors?.mobile ? (
                                        <small className="text-danger">
                                            {"Mobile is a invalid field"}
                                        </small>
                                    ) : (
                                        ""
                                    )}
                                    <input
                                        {...register("mobile")}
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className={`name-number-inp ${errors?.mobile ? "input-error" : ""}`}
                                    />
                                    {errors?.email ? (
                                        <small className="text-danger">
                                            {"Email is a invalid field"}
                                        </small>
                                    ) : (
                                        ""
                                    )}
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className={`name-number-inp ${errors?.email ? "input-error" : ""}`}
                                    />
                                    <div className={`radio-inputs-container`}>
                                        {/* <p>
                                            Please enter your details and we will reach out to you as
                                            soon as we can.
                                        </p> */}
                                        {errors?.message ? (
                                            <div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <ReCAPTCHA
                                        sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                                        onChange={handleRecaptchaChange}
                                    />

                                    {Loading === true ? (
                                        <button
                                            type="submit"
                                            disabled
                                            className="btn-primary btn-flx-full mt-2"
                                        >
                                            <CgSpinner className="fa-spin mr-2" />
                                            Loading ...
                                        </button>
                                    ) : (
                                        <button type="submit" className="submit-connect-form m-4">
                                            Request A Call
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="col-lg-4 col-md-7 m-auto">
                            <a href={`tel:+918035287579 `} className='sent_enquiry call-btn m-auto'> CALL US
                                <i className="fa fa-phone"></i>
                                +91 8035 28 7579</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pd-4 pt-4 top-padding">
                <div className="text-conatiner justify-content-center mb-4">
                    <span className="o-col">XTRA CARE</span>
                    <span className="v-col">for Senior Citizens</span>
                </div>
            </div>

            <section className="discounts-container">
                <div className="container py-0 my-0">
                    <div className="offers-discounts row">
                        <div className="col-sm-7">
                            <span className="yourSpanClass">
                                <img className="OffersAndDiscount img-fluid" src={OffersAndDiscount} alt="OD" />
                                <p className="offers-title">XCLUSIVE OFFERS & DISCOUNTS</p>
                            </span>

                            <ul className="offers-list">
                                <li>
                                    <img className="offer-icon" src={VoiletTick} alt="Offer Icon" />
                                    <p><span className="orange-text">5% OFF </span>
                                        <span className="violet-txt"> on Health Packages for Seniors</span></p>
                                </li>
                                <li>
                                    <img className="offer-icon" src={VoiletTick} alt="Offer Icon" />
                                    <p><span className="orange-text">20% OFF </span>
                                        <span className="violet-txt"> on Routine Blood Tests</span></p>
                                </li>
                                <li>
                                    <img className="offer-icon" src={VoiletTick} alt="Offer Icon" />
                                    <p><span className="orange-text">10% OFF </span>
                                        <span className="violet-txt"> on Ultrasound @ Shivajinagar, Kasturinagar</span></p>
                                </li>
                                <li>
                                    <img className="offer-icon" src={VoiletTick} alt="Offer Icon" />
                                    <p><span className="orange-text">10% OFF </span>
                                        <span className="violet-txt"> on ECG @ Shivajinagar, Kasturinagar, Vijaynagar, Jayanagar</span></p>
                                </li>
                                <li>
                                    <img className="offer-icon" src={VoiletTick} alt="Offer Icon" />
                                    <p><span className="orange-text">10% OFF </span>
                                        <span className="violet-txt"> on Dexa, Mammogram, Eye checkup, PFT @ Shivajinagar</span></p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-5">
                            <img className="elder-care-logo11 img-fluid" src={ElderCare} alt="Elder Care" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="card-container">
                <div className="row justify-content-center">
                    <span className="w-col">Download Your Card & Avail</span>
                    <span className="o-col">Exclusive Health Benefits</span>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-6"><img className="img-fluid" src={ElderCare} alt="Elder Care" /></div>
                    <div className="col-sm-6"><img className="img-fluid" src={BenifitsSCImage} alt="BI" /></div>
                </div>
                <div className="cta-container text-center">
                    <p>Your senior discount is just a download away.</p>
                    <p>Get your card and show it at the lab for easy savings.</p>
                    <p className="text-center d-flex justify-content-center">
                        {/* <a className="b-orange sent_enquiry width-fitcontent px-3 justify-content-center" href={cardpdf} target="_blank">Download Your Card Now</a> */}

                        <a className="b-orange sent_enquiry width-fitcontent justify-content-center" onClick={(event) => handleClick(event, cardpdf)} target="_blank"><span>Download Your Card Now</span></a>
                    </p>
                </div>
            </div>


            <div className={`col-12 pt-5  my-3 mx-auto text-center`} >
                <h3 className='page-header'> <span>BOOK A LAB TEST</span> FROM THE COMFORT OF YOUR HOME </h3>
            </div>

            <HowItWorks />
        </div>
    );
}
