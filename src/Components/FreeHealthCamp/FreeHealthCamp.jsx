import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
// import anandhome from "../../assets/images/anandathome.jpg"; 
// import anandhome from "../../assets/images/Health-package-desk.jpg";
// import anandhome from "../../assets/images/anant-at-home-banner-min.png";
// import anandhome from "../../assets/images/Anand-At-Home-Banner.png";
// import anandhome from "../../assets/images/diwali-banner.jpg";
import anandhome from "../../assets/images/shivajiangar free sugar camp banner.jpg";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { CgSpinner } from 'react-icons/cg';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import commitmentIcon1 from "../../assets/images/commitment-icon-1.png";
import commitmentIcon2 from "../../assets/images/commitment-icon-2.png";
import commitmentIcon3 from "../../assets/images/commitment-icon-3.png";
import GlobalStyle from "../HowItWorks/HowItWorks.module.css";
import how_work1 from '../../assets/images/landing_pages/Share-your-details.png';
import how_work2 from '../../assets/images/landing_pages/Schedule-the-test.png';
import how_work3 from '../../assets/images/landing_pages/visit-your-home-1.png';
import how_work4 from '../../assets/images/landing_pages/visit-your-home.png';
import how_work5 from '../../assets/images/landing_pages/Get-your-reports.png';

export default function FreeHealthCamp() {
  const [open, setOpen] = useState(true)
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaValue(value);
  };

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

  const notesDataString = JSON.stringify(notesValue);
  console.log(notesDataString);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
        email: Yup.string().required(),
        // message: Yup.string().required()
      })
    )
  })
  const contactUsFrom = (data) => {
    if (recaptchaValue) {
      setLoading(true)
      data.page = 'Free Health Camp'
      data.page_url = window.location.href
      data.notes = notesDataString;
      axios.post(API_URL.LANDING_PAGES_FORM, data).then((res) => {
        // FormResponse()
        navigate("/anand-at-home-thank-you");
        setLoading(false)
        reset()
        setOpen(!open)
      });
      // console.log('Form submitted successfully');
    } else {
      // Handle the case where reCAPTCHA validation failed
      console.log('Please complete the reCAPTCHA');
      alert('Please check reCAPTCHA');
    }
  }
  useEffect(() => {
    document.title = "Free Health Camp | Neuberg Anand";
    window.scroll(0, 0);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-10841898141");
    // gtag('config', 'G-8VQRMYBYFG');

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover the convenience of Lab Testing at Home with Neuberg Anand. Our hassle-free and convenient Free Health Camp bring the lab to you, ensuring a stress-free and comfortable experience in the familiar surroundings of your home. Prioritise your health at home with Neuberg Anand. Lab Tests Anytime, Anywhere. ';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'anand diagnostic, blood test, lab test Free Health Camp, anand lab bangalore, diagnostic centre near me open now, anand laboratory, full body test, health checkup bangalore, thyroid test price, allergy testing, cbc test price, allergy skin patch test, hcg test, immunology tests, blood sugar test, NST testing, NIPT testing, lipid profile test, diabetes tests, kidney test';
    document.head.appendChild(metaKeywords);
  }, []);

  const gtmScript1 = document.createElement('script');
  gtmScript1.async = true;
  gtmScript1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10841898141';

  const gtmScript2 = document.createElement('script');
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement('script');
  gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
    `;

  const gtmScript4 = document.createElement('script');
  gtmScript4.innerHTML = `
     gtag('event', 'conversion', {'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo'});
  `;


  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);
  document.head.appendChild(gtmScript4);

  return (
    <>

      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10841898141"
        ></script>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script> */}
      </Helmet>

      <div>
        <section className="abt-secton forumn-frm mt-8">
          <div className="container">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-7">
                <div className="common-heading">
                  <h2>
                    <span className="inlne">Free Health Camp at Neuberg Anand, Shivajinagar
                    </span><br />Special Offers on Lab & Radiology Tests!
                  </h2>
                  <img src={anandhome} alt="Anand at Free Health Camp Box for Lab Testing – A white box with the 'Anand' logo, designed for convenient and secure collection of samples for laboratory testing at home with contact information written on it" className="img-fluid" />
                  <br />
                  <br />
                  <div className="common-para1 drk detilos-expl text-justify indication-details p-0">
                    <p>Looking for affordable health checkups in <b>Shivajinagar, Bangalore?</b> <br /> <b>Neuberg Anand </b>is offering exclusive discounts on lab investigations and radiology tests during <b>our special Health Checkup Camp on 22nd & 23rd February.</b>
                    </p>
                    <h2 class="text-center mb-3 mt-5">Exclusive Health Camp Offers</h2>
                    <ul class=" mb-4 mt-2">
                      <li><strong>FREE Blood Sugar Tests</strong> – FBS, PPBS, RBS</li>
                      <li><strong>20% OFF</strong> on Routine Lab Investigations (A & B Category)</li>
                      <li><strong>30% OFF</strong> on Radiology Tests – Echo, ECG, TMT, Mammogram, Dexa, X-ray Chest</li>
                    </ul>
                    <div className=" mt-4">
                      <h2 className="text-center mb-3">Event Details</h2>
                      <ul class=" mb-0 mt-2">
                        <li><strong>Dates:</strong> 22nd & 23rd February 2025</li>
                        <li><strong>Time:</strong> 7:30 AM – 4:00 PM</li>
                        <li><strong>Location:</strong> Neuberg Anand , Shivajinagar Branch, Bangalore</li>
                        <li><strong>Find Us Easily on Google Maps:</strong></li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.849743711489!2d77.60357287539158!3d12.981460587334869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1662e7c1a033%3A0x33ceeda312ca9a2c!2sNeuberg%20Anand%20Reference%20Laboratory%20-%20Shivajinagar%20offers%20Diagnostics%2C%20X%20Ray%2C%20ECG%2C%20Dexa%2C%20Mammogram%2C%20Ultrasound!5e0!3m2!1sen!2sin!4v1739534046549!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                      </ul>
                    </div>


                    {/* <ul>
                      <li>Sample collection done right at your doorstep</li>
                      <li>Easy/multiple booking channels- Telephone, Whatsapp, Email, Live Chat, Online Appointment Form</li>
                      <li>Home Care Kit: A complete sample collection kit, sealed for one time use only</li>
                      <li>Since 1974, Ensuring Care in Healthcare, putting customer convenience first</li>
                    </ul>
                    <br />
                    <b>With Anand@home and the Home Care Kit, we’re bringing the finest healthcare experience right to your doorstep.</b> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 mb-5">
                <div className="contact-number-container-home">
                  <a href="tel:+918035287579 " className="call-icon-home shadow-lg"> <i className="fa fa-phone"></i>+918035287579 </a>
                </div>
                <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                  <h4 className="mb-3 text-center text-white">Enquire Now</h4>
                  <form onSubmit={handleSubmit(contactUsFrom)}>
                    <div className="formdata">
                      {errors?.name ? <small className='text-danger'>{errors?.name?.message}</small> : ''}
                      <input {...register('name')} type="text" placeholder="Enter Your Name" className='form-control' />
                    </div>
                    <div className="formdata">
                      {errors?.mobile ? <small className='text-danger'>{'Mobile is a invalid field'}</small> : ''}
                      <input {...register('mobile')} type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
                    </div>
                    <div className="formdata">
                      {errors?.email ? <small className='text-danger'>{'Email is a invalid field'}</small> : ''}
                      <input {...register('email')} type="email" placeholder="Enter Your Email" className='form-control' />
                    </div>
                    <h6 className="text-light">
                      {/* Please enter your details and we will reach out to you as soon as we can. */}
                    </h6>
                    {/* {errors?.message ? <div><small className='text-danger'>{'Choose any one!'}</small></div> : ''} */}
                    {/* <div className="d-flex input-box">
                      <p>
                        <input type="radio" id="test1" value="Contact me on call" name="radio-group"  {...register('message')} />
                        <label for="test1">Call</label>
                      </p>
                      <p>
                        <input type="radio" id="test2" value="Contact me on Whatsapp" name="radio-group"  {...register('message')} />
                        <label for="test2">Whatsapp</label>
                      </p>
                      <p>
                        <input type="radio" id="test3" value="Contact me on Email" name="radio-group"  {...register('message')} />
                        <label for="test3">Email</label>
                      </p>
                    </div> */}
                    <ReCAPTCHA
                      sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                      onChange={handleRecaptchaChange}
                    />
                    <div className="formdata">
                      {
                        Loading === true
                          ?
                          <button type="submit" disabled className="btn-primary btn-flx-full">
                            <CgSpinner className="fa-spin mr-2" />
                            Loading ...
                          </button>
                          :
                          <button type="submit" className="btn-primary btn-flx-full">
                            Submit
                          </button>
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="our-commitment-container">
            <h4 className="section-heading">Our Commitment</h4>

            <div className="insider-comm-box">
              <div className="commitment-info-container">
                <div className="commitment-info">
                  <img src={commitmentIcon2} alt="" />
                  <h4>Safety First</h4>
                  <p>Ensuring a safe and comfortable testing process.</p>
                </div>
                <div className="commitment-info">
                  <img src={commitmentIcon3} alt="" />
                  <h4>Quality Care</h4>
                  <p>
                    Our team is dedicated to providing personalized care and
                    support.
                  </p>
                </div>
                <div className="commitment-info">
                  <img src={commitmentIcon1} alt="" />
                  <h4>Quick Turnaround Time</h4>
                  <p>Get your test reports within 24 hours — download online for fast, convenient access.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`container py-5`}>
            <div className="row">
              <div className={`col-12 mb-4`} >
                <h3 className={`${GlobalStyle.purple_text} fw-bold text-center ${GlobalStyle.section_heading}`}>How It Works </h3>
              </div>

              <div className="col-md col-sm-4">
                <div className={`${GlobalStyle.how_it_work_module}`}>
                  <img src={how_work1} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                  <span>Share your details with us</span>
                </div>
              </div>
              <div className="col-md col-sm-4">
                <div className={`${GlobalStyle.how_it_work_module}`}>
                  <img src={how_work2} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                  <span>Schedule the test at your home</span>
                </div>
              </div>
              <div className="col-md col-sm-4">
                <div className={`${GlobalStyle.how_it_work_module}`}>
                  <img src={how_work4} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                  <span>Our phlebotomist would visit your home</span>
                </div>
              </div>
              <div className="col-md col-sm-4">
                <div className={`${GlobalStyle.how_it_work_module}`}>
                  <img src={how_work5} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                  <span>Get your reports online</span>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>

    </>
  );
}
