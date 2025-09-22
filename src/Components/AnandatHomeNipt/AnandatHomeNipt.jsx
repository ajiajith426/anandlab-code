import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-4.webp";
import anandhome from "../../assets/images/anandathome.jpg"; 
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { CgSpinner } from 'react-icons/cg';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";

export default function AnandatHomeNipt() {
  const [open, setOpen] = useState(true)
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
        message: Yup.string().required()
      })
    )
  })
  const contactUsFrom = (data) => {
    setLoading(true)
    data.page = 'ANAND AT HOME'
    data.page_url = window.location.href
    axios.post(API_URL.REACH_US, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false)
      reset()
      setOpen(!open)
    })
  }
  useEffect(() => {
    document.title = "Book A Home Collection | Neuberg Anand";
    window.scroll(0, 0);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    // gtag("config", "AW-10841898141");
    gtag('config', 'G-8VQRMYBYFG');

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover the convenience of Lab Testing at Home with Neuberg Anand. Our hassle-free and convenient Home Collection bring the lab to you, ensuring a stress-free and comfortable experience in the familiar surroundings of your home. Prioritise your health at home with Neuberg Anand. Lab Tests Anytime, Anywhere. ';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'anand diagnostic, blood test, lab test home collection, anand lab bangalore, diagnostic centre near me open now, anand laboratory, full body test, health checkup bangalore, thyroid test price, allergy testing, cbc test price, allergy skin patch test, hcg test, immunology tests, blood sugar test, NST testing, NIPT testing, lipid profile test, diabetes tests, kidney test';
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

    // Append the script tags to the head of the document
    document.head.appendChild(gtmScript1);
    document.head.appendChild(gtmScript2);
    document.head.appendChild(gtmScript3);

  return (
    <>

<Helmet>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10841898141"
        ></script> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script> 
      </Helmet>

    <div> 
      <section className="abt-secton forumn-frm mt-8">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-7">
              <div className="common-heading">
                <h2>
                  <span className="inlne">Why choose </span>
                  Anand@home NIPT?
                </h2>
                <img src={anandhome} alt="Anand at Home Collection Box for Lab Testing – A white box with the 'Anand' logo, designed for convenient and secure collection of samples for laboratory testing at home with contact information written on it" className="img-fluid" />
                <br />
                <br />
                <div className="common-para1 drk detilos-expl indication-details p-0">
                  <ul>
                    <li>Sample collection done right at your doorstep</li>
                    <li>Easy/multiple booking channels- Telephone, Whatsapp, Email, Live Chat, Online Appointment Form</li>
                    <li>Home Care Kit: A complete sample collection kit, sealed for one time use only</li>
                    <li>Since 1974, Ensuring Care in Healthcare, putting customer convenience first</li>
                  </ul>
                  <br />
                  <b>With Anand@home and the Home Care Kit, we’re bringing the finest healthcare experience right to your doorstep.</b>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 mb-5">
              <div className="contact-number-container-home">
                  <a href="tel:+918035287579 " className="call-icon-home shadow-lg"> <i className="fa fa-phone"></i>+918035287579  </a>
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
                  <h6 className="text-light">Please enter your details and we will reach out to you as soon as we can.</h6>
                  {errors?.message ? <div><small className='text-danger'>{'Choose any one!'}</small></div> : ''}
                  <div className="d-flex input-box">
                    <p>
                      <input type="radio" id="test1" value="Contact me on call" name="radio-group"  {...register('message')}/>
                      <label for="test1">Call</label>
                    </p>
                    <p>
                      <input type="radio" id="test2" value="Contact me on Whatsapp" name="radio-group"  {...register('message')}/>
                      <label for="test2">Whatsapp</label>
                    </p>
                    <p>
                      <input type="radio" id="test3" value="Contact me on Email" name="radio-group"  {...register('message')}/>
                      <label for="test3">Email</label>
                    </p>
                  </div>
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
      </section>
    </div>
    
    </>
  );
}
